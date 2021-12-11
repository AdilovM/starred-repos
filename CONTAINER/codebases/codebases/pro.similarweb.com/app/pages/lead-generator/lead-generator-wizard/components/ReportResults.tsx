import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { SWReactIcons } from "@similarweb/icons";
import { removeLeadsGeneratorReport } from "actions/leadGeneratorActions";
import { showErrorToast } from "actions/toast_actions";
import autobind from "autobind-decorator";
import { swSettings } from "common/services/swSettings";
import LocationService from "components/Modals/src/UnlockModal/LocationService";
import { RowSelectionConsumer } from "components/React/Table/cells/RowSelection";
import { SelectAllRowsHeaderCellConsumer } from "components/React/Table/headerCells/SelectAllRowsHeaderCell";
import {
    SWReactTableWrapperContextConsumer,
    SWReactTableWrapperWithSelection,
} from "components/React/Table/SWReactTableWrapperSelectionContext";
import { TableSelection } from "components/TableSelection/src/TableSelection";
import {
    ETableSelectionNewGroupDropdownMode,
    TableSelectionNewGroupDropdown,
} from "components/TableSelection/src/TableSelectionNewGroupDropdown";
import {
    categoryIconFilter,
    i18nFilter,
    parentCategoryFilter,
    subCategoryFilter,
} from "filters/ngFilters";
import { selectSavedSearchesList } from "pages/lead-generator/lead-generator-wizard/components/SaveSearch/selectors";
import {
    WorkspaceContext,
    workspaceContextType,
} from "pages/workspace/common components/WorkspaceContext";
import { selectActiveWorkSpace } from "pages/workspace/common/selectors";
import { ISavedSearchesItem, IWorkspace } from "pages/workspace/common/types";
import { AssetsService } from "services/AssetsService";
import { openUnlockModal } from "services/ModalService";
import { TrackWithGuidService } from "services/track/TrackWithGuidService";
import { IOpportunityCapitalized } from "services/workspaces/workspaceApi.types";
import I18n from "../../../../components/React/Filters/I18n";
import LeadGeneratorPageError from "../../components/LeadGeneratorPageError";
import LeadGeneratorPageNoData from "../../components/LeadGeneratorPageNoData";
import LeadGeneratorSubtitleBox from "../../components/LeadGeneratorSubtitleBox";
import { LeadGeneratorSubtitleWrapper } from "../../lead-generator-exist/components/elements";
import {
    getTableColumns,
    getTableToggleGroups,
} from "../../lead-generator-exist/leadGeneratorExistConfig";
import LeadGeneratorUtils from "../../LeadGeneratorUtils";
import { AddWebsitesBubble } from "./AddWebsitesBubble";
import ReportTableTop from "./ReportTableTop";
import { SaveSearchComponent } from "./SaveSearch/SaveSearchComponent";
import {
    AddButton,
    HeaderContainer,
    ReportResultsTitle,
    ReportResultsWarning,
    ReportResultsWrapper,
    StyledBottomHook,
    StyledBottomHookButton,
    StyledBottomHookImageWrapper,
    StyledBottomHookInfo,
    StyledBottomHookText,
    StyledBottomHookTitle,
    StyledTopHook,
    StyledTopHookButton,
    StyledTopHookImageWrapper,
    StyledTopHookInfo,
    StyledTopHookTitle,
} from "./StyledComponents";
import SWReactTableWrapper from "components/React/Table/SWReactTableWrapper";
import { NoCacheHeaders } from "services/fetchService";

enum dataStates {
    VALID,
    ERROR,
    NO_DATA,
}

interface IReportResultsProps {
    order_by: string;
    filters: any;
    serverApi: string;
    onAddOpportunities: (domains: { [Domain: string]: any }, newListName: string) => void;
    onAddItemToExistOpportunityList?: (
        domains: { [Domain: string]: any },
        opportunityListId: string,
    ) => void;
    onBack: () => void;
    initialKeys?: IOpportunityCapitalized[];
    showErrorToast?: (text) => void;
    workspaceId: string;
    workspaceType: string;
    opportunitiesListId: string;
    queryId: string;
    activeWorkspace: IWorkspace;
    activeSavedSearchListData: ISavedSearchesItem;
    onRemoveLeadsGeneratorReport: VoidFunction;
}

interface IReportResultsState {
    dataState: number;
    isButtonDisabled: boolean;
    listSelectionMode: ETableSelectionNewGroupDropdownMode;
    totalResultCount: number;
    filters: any;
    isTableLoading: boolean;
}

const MAX_LENGTH_OPPORTUNITY_FRIENDLY_NAME = 30;

class ReportResults extends Component<IReportResultsProps, IReportResultsState> {
    public static contextType = WorkspaceContext;

    private _tableColumns;
    private _tableToggleGroups;
    private _isDesktopOnly;
    private _LeadGenResults;
    private _isLeadGenResultLimited;
    private _isSavedSearchesFeatureEnabled;
    private translate;
    private dropdownRef: { close: () => any };
    tableRef = createRef<SWReactTableWrapper>();

    constructor(props, context: workspaceContextType) {
        super(props, context);

        const swSettingsSalesWorkspace = swSettings?.components?.SalesWorkspace?.resources;

        this.state = {
            dataState: dataStates.VALID,
            isButtonDisabled: false,
            listSelectionMode: ETableSelectionNewGroupDropdownMode.GROUP_LIST,
            totalResultCount: 0,
            isTableLoading: true,
            filters: props.filters,
        };

        this.translate = i18nFilter();

        this._isDesktopOnly = props.filters.device === "Desktop";

        this._tableColumns = getTableColumns(this._isDesktopOnly).map((column) => ({
            ...column,
            visible: column.fixed || column.visible,
        }));
        this._tableColumns[0] = {
            fixed: true,
            cellComponent: (props) => (
                <div className="u-alignCenter">
                    <RowSelectionConsumer {...props} />
                    {props.row.index === 0 && <AddWebsitesBubble />}
                </div>
            ),
            sortable: false,
            width: 48,
            headerComponent: SelectAllRowsHeaderCellConsumer,
            visible: true,
        };
        this._tableColumns[3].cellComponent = ({ value }) => {
            return (
                <div className="swTable-categoryCell">
                    <i
                        className={`sprite-category u-right-padding-6 ${categoryIconFilter()(
                            parentCategoryFilter()(value),
                        )}`}
                    />
                    <span>{subCategoryFilter()(value)}</span>
                </div>
            );
        };

        this._tableToggleGroups = getTableToggleGroups(this._isDesktopOnly).map((group) => ({
            ...group,
            displayName: this.translate(group.displayName),
        }));

        this._LeadGenResults = swSettingsSalesWorkspace?.LeadGeneratorResults;
        this._isLeadGenResultLimited = !(
            !this._LeadGenResults ||
            (this._LeadGenResults && this._LeadGenResults === 2147483647) || // "unlimited"
            (this._LeadGenResults && this._LeadGenResults === 50000)
        );
        this._isSavedSearchesFeatureEnabled = context.isFeatureEnabled("saved-searches");
    }

    public componentWillUnmount() {
        this.props.onRemoveLeadsGeneratorReport();
    }

    @autobind
    private findOpportunityIndex(opportunities, domain) {
        return opportunities.findIndex(
            (opportunity) => opportunity.site === domain || opportunity.Domain === domain,
        );
    }

    private onDataError = () => {
        this.setState({ dataState: dataStates.ERROR });
    };

    private getDataCallback = (data) => {
        this.setState({
            totalResultCount: data.totalResultCount,
            isTableLoading: false,
        });
    };

    private onAdd = async (
        selectedOpportunities,
        clearAllSelectedRows,
        opportunityListId,
        newListName,
    ) => {
        this.setState({ isButtonDisabled: true });
        let duplicateOpportunities = 0;
        const opportunities: Array<{ site: string }> = [];
        selectedOpportunities.forEach((opportunity) => {
            if (
                this.findOpportunityIndex(opportunities, opportunity.site) > -1 ||
                this.findOpportunityIndex(this.props.initialKeys, opportunity.site) > -1
            ) {
                duplicateOpportunities++;
            } else {
                opportunities.push(opportunity);
            }
        });

        if (duplicateOpportunities === 1) {
            this.props.showErrorToast(
                this.translate("grow.lead_generator.wizard.error.duplicate.key"),
            );
        } else if (duplicateOpportunities > 1) {
            this.props.showErrorToast(
                this.translate("grow.lead_generator.wizard.error.duplicate.keys", {
                    duplicatesNum: duplicateOpportunities.toString(),
                }),
            );
        }

        const mappedOpportunities = opportunities.map((opportunity) => ({
            Domain: opportunity.site,
        }));

        if (opportunityListId) {
            await this.props.onAddItemToExistOpportunityList(
                mappedOpportunities,
                opportunityListId,
            );
        } else {
            await this.props.onAddOpportunities(mappedOpportunities, newListName);
        }

        this.setState({ isButtonDisabled: false });
        this.dropdownRef && this.dropdownRef.close();
        clearAllSelectedRows();

        if (this.tableRef.current?.state.filters.excludeUserLeads) {
            this.tableRef.current.getData(undefined, NoCacheHeaders);
        }
    };

    // TODO only for sales workspace
    protected setRef = (ref) => {
        this.dropdownRef = ref;
    };

    protected onListClick = (item, selectedRows, clearAllSelectedRows) => {
        if (!item.id) {
            // new list
            this.setState({
                listSelectionMode: ETableSelectionNewGroupDropdownMode.NEW_GROUP,
            });
        } else {
            this.onAdd(selectedRows, clearAllSelectedRows, item.id, null);

            TrackWithGuidService.trackWithGuid(
                "workspaces.sales.saved_searches.checkbox.add_to_existing_lead_list",
                "click",
                {
                    name: item.text,
                    countDomains: selectedRows.map((item) => item.site).length,
                },
            );
        }
    };

    protected onNewListSubmit = (name, selectedRows, clearAllSelectedRows) => {
        this.onAdd(selectedRows, clearAllSelectedRows, null, name);

        TrackWithGuidService.trackWithGuid(
            "workspaces.sales.saved_searches.checkbox.add_to_new_lead_list",
            "click",
            {
                name,
                countDomains: selectedRows.map((item) => item.site).length,
            },
        );

        this.setState({
            listSelectionMode: ETableSelectionNewGroupDropdownMode.GROUP_LIST,
        });
    };

    protected onCancelNewListCreation = () => {
        if (this.state.listSelectionMode === ETableSelectionNewGroupDropdownMode.NEW_GROUP) {
            // TODO !???
            // allTrackers.trackEvent('add to keyword group', 'click', 'Create New Keyword Group/Cancel');
        }
        this.setState({
            listSelectionMode: ETableSelectionNewGroupDropdownMode.GROUP_LIST,
        });
    };

    private getTableSelectionComponentWithDropdown = () => {
        const { opportunityLists = [] } = this.props.activeWorkspace;

        const groups = opportunityLists.map(({ opportunityListId, friendlyName }) => {
            const text =
                friendlyName.length >= MAX_LENGTH_OPPORTUNITY_FRIENDLY_NAME
                    ? friendlyName.substring(0, MAX_LENGTH_OPPORTUNITY_FRIENDLY_NAME) + "..."
                    : friendlyName;

            return {
                id: opportunityListId,
                text,
            };
        });
        const groupSelectorElement = (selectedRows, clearAllSelectedRows) => (
            <TableSelectionNewGroupDropdown
                appendTo=".swReactTable-header-above-header"
                ref={this.setRef}
                groups={groups}
                onSubmit={(name) => this.onNewListSubmit(name, selectedRows, clearAllSelectedRows)}
                isLoading={false}
                onGroupClick={(item) => this.onListClick(item, selectedRows, clearAllSelectedRows)}
                mode={this.state.listSelectionMode}
                onCancel={this.onCancelNewListCreation}
                groupIconName="lead-generator"
                newGroupNameLabel={this.translate("table.selection.newgroup.leadlist.title")}
                trackingCategory="Add leads to list"
                newGroupItemText="workspace.sales.leadgenerator.results-page.сreate.new.list.title"
            />
        );

        return (
            <SWReactTableWrapperContextConsumer>
                {({ selectedRows, clearAllSelectedRows }) => {
                    const text = this.translate(
                        "grow.lead_generator.wizard.step2.save.searche.summary",
                        {
                            number: selectedRows.length.toString(),
                        },
                    );
                    return (
                        <TableSelection
                            key="1"
                            selectedText={text}
                            onCloseClick={clearAllSelectedRows}
                            addToGroupLabel=""
                            isVisible={selectedRows.length > 0}
                            groupSelectorElement={groupSelectorElement(
                                selectedRows,
                                clearAllSelectedRows,
                            )}
                        />
                    );
                }}
            </SWReactTableWrapperContextConsumer>
        );
    };

    private getTableSelectionComponent = () => {
        return (
            <SWReactTableWrapperContextConsumer>
                {({ selectedRows, clearAllSelectedRows }) => {
                    const text = this.translate("grow.lead_generator.wizard.step2.summary", {
                        number: selectedRows.length.toString(),
                    });
                    return (
                        <TableSelection
                            key="1"
                            selectedText={text}
                            onCloseClick={clearAllSelectedRows}
                            addToGroupLabel=""
                            isVisible={selectedRows.length > 0}
                            groupSelectorElement={
                                <AddButton
                                    type="outlined"
                                    iconName="add"
                                    onClick={() =>
                                        this.onAdd(selectedRows, clearAllSelectedRows, null, null)
                                    }
                                    isDisabled={this.state.isButtonDisabled}
                                    width={232}
                                >
                                    <I18n>grow.lead_generator.wizard.step2.button</I18n>
                                </AddButton>
                            }
                        />
                    );
                }}
            </SWReactTableWrapperContextConsumer>
        );
    };

    public render() {
        const {
            filters,
            onBack,
            opportunitiesListId,
            activeSavedSearchListData,
            queryId,
            order_by,
            serverApi,
        } = this.props;
        if (this.state.dataState === dataStates.ERROR) {
            return <LeadGeneratorPageError onClickRefresh={onBack} />;
        }
        if (this.state.dataState === dataStates.NO_DATA) {
            return <LeadGeneratorPageNoData onClick={onBack} />;
        }
        const tableSelectionComponent =
            this._isSavedSearchesFeatureEnabled && !opportunitiesListId
                ? this.getTableSelectionComponentWithDropdown()
                : this.getTableSelectionComponent();

        const title = activeSavedSearchListData
            ? activeSavedSearchListData?.queryDefinition?.name
            : this.translate("grow.lead_generator.wizard.step2.title");
        const newResultsCount = activeSavedSearchListData?.lastRun?.newSinceLastRun;

        return (
            <ReportResultsWrapper>
                {this._isLeadGenResultLimited && (
                    <StyledTopHook>
                        <StyledTopHookImageWrapper>
                            <img
                                src={AssetsService.assetUrl("/images/lead-generator-hook-top.svg")}
                                alt=""
                            />
                        </StyledTopHookImageWrapper>
                        <StyledTopHookInfo>
                            <StyledTopHookTitle>
                                <I18n dataObj={{ leadsNumber: this._LeadGenResults }}>
                                    grow.lead_generator.wizard.step2.hook_top.title
                                </I18n>
                            </StyledTopHookTitle>
                            <I18n>grow.lead_generator.wizard.step2.hook_top.text</I18n>
                        </StyledTopHookInfo>
                        <StyledTopHookButton
                            type="trial"
                            label={<I18n>grow.lead_generator.wizard.step2.hook_top.button</I18n>}
                            onClick={() => {
                                openUnlockModal(
                                    {
                                        modal: "SourceLeads",
                                        slide: "SourceLeads",
                                    },
                                    `${LocationService.getCurrentLocation()}/TrialBanner`,
                                );
                            }}
                        />
                    </StyledTopHook>
                )}
                <HeaderContainer>
                    <ReportResultsTitle>
                        {this._isSavedSearchesFeatureEnabled ? (
                            title
                        ) : (
                            <I18n>grow.lead_generator.wizard.step2.title</I18n>
                        )}
                    </ReportResultsTitle>
                    {this._isSavedSearchesFeatureEnabled && (
                        <SaveSearchComponent
                            queryId={queryId}
                            totalResultCount={this.state.totalResultCount}
                            filters={this.state.filters}
                            isTableLoading={this.state.isTableLoading}
                        />
                    )}
                </HeaderContainer>
                <LeadGeneratorSubtitleWrapper>
                    <LeadGeneratorSubtitleBox
                        filters={LeadGeneratorUtils.getBoxSubtitleFilters(
                            null,
                            order_by,
                            this.props.filters,
                        )}
                    />
                </LeadGeneratorSubtitleWrapper>
                {this._isDesktopOnly && (
                    <ReportResultsWarning>
                        <SWReactIcons iconName="warning" size="sm" />
                        <I18n>grow.lead_generator.wizard.desktop_countries_warning.results</I18n>
                    </ReportResultsWarning>
                )}
                <SWReactTableWrapperWithSelection
                    tableRef={this.tableRef}
                    tableSelectionKey="LeadGeneratorReportResult"
                    tableSelectionProperty="site"
                    serverApi={serverApi}
                    tableColumns={this._tableColumns}
                    fetchServerPages={9}
                    totalRecordsField="filteredResultCount"
                    onDataError={this.onDataError}
                    rowsPerPage={this._isLeadGenResultLimited ? this._LeadGenResults : 100}
                    getDataCallback={this.getDataCallback}
                    tableOptions={{
                        aboveHeaderComponents: [tableSelectionComponent],
                        metric: "LeadGeneratorWizardTable",
                    }}
                    paginationProps={{
                        showPagination: !this._isLeadGenResultLimited,
                        hasItemsPerPageSelect: false,
                    }}
                    initialFilters={{
                        excludeUserLeads: true,
                        newLeadsOnly: newResultsCount > 0 ? filters.newLeadsOnly : false,
                    }}
                >
                    {(topComponentProps) => (
                        <ReportTableTop
                            {...topComponentProps}
                            isNewResultsCheckboxVisible={
                                this._isSavedSearchesFeatureEnabled && newResultsCount > 0
                            }
                            isExcludeUserLeadsCheckboxVisible={this._isSavedSearchesFeatureEnabled}
                            defaultTableColumns={this._tableColumns}
                            tableToggleGroups={this._tableToggleGroups}
                        />
                    )}
                </SWReactTableWrapperWithSelection>
                {this._isLeadGenResultLimited && (
                    <StyledBottomHook>
                        <StyledBottomHookImageWrapper>
                            <img
                                src={AssetsService.assetUrl(
                                    "/images/lead-generator-hook-bottom.svg",
                                )}
                                alt=""
                            />
                        </StyledBottomHookImageWrapper>
                        <StyledBottomHookInfo>
                            <StyledBottomHookTitle>
                                <I18n>grow.lead_generator.wizard.step2.hook_bottom.title</I18n>
                            </StyledBottomHookTitle>
                            <StyledBottomHookText>
                                <I18n
                                    dataObj={{ leadsNumber: this._LeadGenResults }}
                                    dangerouslySetInnerHTML={true}
                                >
                                    grow.lead_generator.wizard.step2.hook_bottom.text
                                </I18n>
                            </StyledBottomHookText>
                        </StyledBottomHookInfo>
                        <StyledBottomHookButton
                            type="trial"
                            label={<I18n>grow.lead_generator.wizard.step2.hook_bottom.button</I18n>}
                            onClick={() => {
                                openUnlockModal(
                                    {
                                        modal: "SourceLeads",
                                        slide: "SourceLeads",
                                    },
                                    `${LocationService.getCurrentLocation()}/TrialBanner`,
                                );
                            }}
                        />
                    </StyledBottomHook>
                )}
            </ReportResultsWrapper>
        );
    }
}

const mapStateToProps = ({ commonWorkspace }) => ({
    activeWorkspace: selectActiveWorkSpace(commonWorkspace),
    activeSavedSearchListData: selectSavedSearchesList(),
});

const mapDispatchToProps = {
    showErrorToast,
    onRemoveLeadsGeneratorReport: removeLeadsGeneratorReport,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportResults);
