import { SWReactIcons } from "@similarweb/icons";
import _ from "lodash";
import dayjs from "dayjs";
import React from "react";
import { connect } from "react-redux";
import { Injector } from "../../../../../../scripts/common/ioc/Injector";
import { i18nFilter } from "../../../../../filters/ngFilters";
import { allTrackers } from "../../../../../services/track/track";
import { selectActiveOpportunityList, selectOpportunityId } from "../../selectors";
import {
    DashboardTileSubtitle,
    DashboardTileTitle,
    DashboardTileWrapper,
    TabWrapper,
} from "./StyledComponents";

interface IDashboardTileProps {
    title: string;
    subtitle: string;
    onClick: () => void;
    iconName: string;
}

const DashboardTile = ({ title, subtitle, onClick, iconName }: IDashboardTileProps) => (
    <DashboardTileWrapper onClick={onClick} data-automation="dashboard-tile">
        <DashboardTileTitle>{title}</DashboardTileTitle>
        <DashboardTileSubtitle>{subtitle}</DashboardTileSubtitle>
        <SWReactIcons iconName={iconName} size="sm" />
    </DashboardTileWrapper>
);

interface IDashboardsTabProps {
    getDashboardQuickLinks: any;
    goToDashboardTemplate: (templateId, keys, country, opportunityListId, templateTitle) => void;
    dashboards: string[];
    domain: string;
    favicon: string;
    country: number;
    activeListId: string;
}

const DashboardsTabContent = ({
    getDashboardQuickLinks,
    goToDashboardTemplate,
    dashboards,
    domain,
    favicon,
    country,
    activeListId,
}: IDashboardsTabProps) => {
    const onClickDashboardTemplate = (dashboardLink) => {
        allTrackers.trackEvent(
            "Expanded Side bar/Deep Internal Link",
            "click",
            `${domain}/${i18nFilter()(dashboardLink.title)}`,
        );
        goToDashboardTemplate(
            dashboardLink.templateId,
            [
                {
                    name: domain,
                    image: favicon,
                    type: "website",
                },
            ],
            country,
            selectOpportunityId(activeListId, domain),
            dashboardLink.templateTitle,
        );
    };

    const onClickDashboardExist = (dashboard) => {
        allTrackers.trackEvent(
            "Expanded Side bar/Deep Internal Link",
            "click",
            `${domain}/${dashboard.title}`,
        );
    };

    const dashboardService = Injector.get("dashboardService") as any;

    return (
        <TabWrapper>
            {getDashboardQuickLinks(domain).map((dashboardLink, index) => (
                <DashboardTile
                    key={index}
                    title={i18nFilter()(dashboardLink.title)}
                    subtitle={i18nFilter()(dashboardLink.description)}
                    onClick={() => onClickDashboardTemplate(dashboardLink)}
                    iconName="wand"
                />
            ))}
            {dashboards.map((dashboardId) => {
                const dashboard = dashboardService.getDashboardById(dashboardId);
                return (
                    <a href={dashboard.link} key={`${dashboard.id}`}>
                        <DashboardTile
                            title={dashboard.title}
                            subtitle={i18nFilter()("workspace.analysis_sidebar.dashboard.created", {
                                date: dayjs(dashboard.addedTime).format("MMM D, YYYY"),
                            })}
                            onClick={() => onClickDashboardExist(dashboard)}
                            iconName="arrow-right"
                        />
                    </a>
                );
            })}
        </TabWrapper>
    );
};

const mapStateToProps = ({ commonWorkspace }) => {
    const activeOpportunitiesList = selectActiveOpportunityList(commonWorkspace);
    return {
        ...commonWorkspace,
        dashboards: _.get(commonWorkspace, "selectedDomain.enrichedData.dashboards", []),
        domain: _.get(commonWorkspace, "selectedDomain.domain", ""),
        favicon: _.get(commonWorkspace, "selectedDomain.favicon", ""),
        country: activeOpportunitiesList ? activeOpportunitiesList.country : 0,
    };
};

export const DashboardsTab = connect(mapStateToProps)(DashboardsTabContent);
