import { IDashboardTemplate } from "../DashboardTemplateService";
import { EFamilyTypes } from "../components/DashboardTemplatesConfig";
import { AssetsService } from "../../../../services/AssetsService";
import { i18nFilter } from "../../../../filters/ngFilters";

const i18n = i18nFilter();

const dashboard: IDashboardTemplate = {
    id: 12,
    title: "dashboard.templates.evaluation.title",
    description: "dashboard.templates.evaluation.description",
    descriptionLong: "dashboard.templates.evaluation.description.long",
    keyMetrics: "dashboard.templates.evaluation.keymetric",
    previewImage: AssetsService.assetUrl("/images/dashboard/templates/Evaluation-preview.png"),
    thumbnailImage: AssetsService.assetUrl("/images/dashboard/templates/Evaluation-thumb.png"),
    familyType: EFamilyTypes.Website,
    minItems: 1,
    maxItems: 1,
    autocompleteDescription: i18n("dashboard.templates.evaluation.autocompleteDescription"),
    placeholderEmpty: i18n("dashboard.templates.evaluation.placeholderEmpty"),
    placeholderFull: i18n("dashboard.templates.evaluation.placeholderFull"),
    widgets: [
        {
            pos: {
                maxSizeY: 2,
                minSizeX: 2,
                maxSizeX: 4,
                sizeX: 2,
                row: 0,
                col: 0,
            },
            properties: {
                flexibleDuration: true,
                selectedChannel: "Direct",
                metric: "EngagementVisits",
                webSource: "Total",
                duration: "24m",
                type: "Graph",
                filters: {
                    ShouldGetVerifiedData: "true",
                    timeGranularity: "Monthly",
                    includeSubDomains: "true",
                },
                width: "2",
                customAsset: false,
                family: "Website",
                options: {},
                tooltip: "",
            },
        },
        {
            pos: {
                sizeX: 2,
                sizeY: 1,
                maxSizeY: 2,
                minSizeX: 2,
                maxSizeX: 4,
                row: 0,
                col: 2,
            },
            properties: {
                flexibleDuration: true,
                selectedChannel: "Direct",
                metric: "EngagementBounceRate",
                webSource: "Total",
                duration: "24m",
                type: "Graph",
                filters: {
                    ShouldGetVerifiedData: "true",
                    timeGranularity: "Monthly",
                    includeSubDomains: "true",
                },
                width: "2",
                customAsset: false,
                family: "Website",
                options: {},
                tooltip: "",
            },
        },
        {
            pos: {
                sizeX: 2,
                sizeY: 1,
                maxSizeY: 2,
                minSizeX: 2,
                maxSizeX: 4,
                row: 1,
                col: 0,
            },
            properties: {
                flexibleDuration: true,
                selectedChannel: "Direct",
                metric: "EngagementPagesPerVisit",
                webSource: "Total",
                duration: "24m",
                type: "Graph",
                filters: {
                    ShouldGetVerifiedData: "true",
                    timeGranularity: "Monthly",
                    includeSubDomains: "true",
                },
                width: "2",
                customAsset: false,
                family: "Website",
                options: {},
                tooltip: "",
            },
        },
        {
            pos: {
                sizeX: 2,
                sizeY: 1,
                maxSizeY: 2,
                minSizeX: 2,
                maxSizeX: 4,
                row: 1,
                col: 2,
            },
            properties: {
                flexibleDuration: true,
                selectedChannel: "Direct",
                metric: "EngagementAvgVisitDuration",
                webSource: "Total",
                duration: "24m",
                type: "Graph",
                filters: {
                    ShouldGetVerifiedData: "true",
                    timeGranularity: "Monthly",
                    includeSubDomains: "true",
                },
                width: "2",
                customAsset: false,
                family: "Website",
                options: {},
                tooltip: "",
            },
        },
        {
            pos: {
                sizeX: 2,
                sizeY: 1,
                maxSizeY: 1,
                minSizeX: 1,
                maxSizeX: 2,
                row: 2,
                col: 0,
            },
            properties: {
                selectedChannel: "Direct",
                metric: "EngagementDesktopVsMobileVisits",
                webSource: "Desktop",
                duration: "3m",
                type: "PieChart",
                filters: {
                    ShouldGetVerifiedData: "true",
                    includeSubDomains: "true",
                },
                width: "1",
                customAsset: false,
                family: "Website",
                options: {},
                title: "Traffic Share by Device ",
                tooltip: "Traffic Share by Device .tooltip",
            },
        },
        {
            pos: {
                sizeX: 2,
                sizeY: 1,
                maxSizeY: 2,
                minSizeX: 2,
                maxSizeX: 4,
                row: 2,
                col: 2,
            },
            properties: {
                fixedCountry: 999,
                selectedChannel: "Direct",
                metric: "Geography",
                webSource: "Desktop",
                duration: "3m",
                type: "Table",
                filters: {
                    orderBy: "TotalShare desc",
                    includeSubDomains: "true",
                },
                width: "2",
                customAsset: false,
                family: "Website",
                options: {},
                tooltip: "",
            },
        },
        {
            pos: {
                sizeX: 4,
                sizeY: 1,
                maxSizeY: 2,
                minSizeX: 2,
                maxSizeX: 4,
                row: 3,
                col: 0,
            },
            properties: {
                selectedChannel: "Direct",
                metric: "TrafficSourcesOverview",
                webSource: "Desktop",
                duration: "3m",
                type: "BarChart",
                filters: {
                    includeSubDomains: "true",
                },
                width: "2",
                customAsset: false,
                family: "Website",
                options: {},
                title: "Channels Overview",
                tooltip: "Channels Overview.tooltip",
            },
        },
        {
            pos: {
                sizeX: 4,
                sizeY: 1,
                maxSizeY: 2,
                minSizeX: 2,
                maxSizeX: 4,
                row: 4,
                col: 0,
            },
            properties: {
                flexibleDuration: true,
                metric: "ChannelsAnalysisByTrafficShare",
                webSource: "Desktop",
                duration: "24m",
                type: "MmxTrafficShareDashboard",
                filters: {
                    includeSubDomains: "true",
                    timeGranularity: "Monthly",
                },
                width: "4",
                customAsset: false,
                family: "Website",
                options: {},
                tooltip: "",
            },
        },
        {
            pos: {
                sizeX: 1,
                sizeY: 1,
                maxSizeY: 1,
                minSizeX: 1,
                maxSizeX: 2,
                row: 5,
                col: 0,
            },
            properties: {
                selectedChannel: "Direct",
                metric: "WebDemographicsAge",
                webSource: "Total",
                duration: "3m",
                type: "PieChart",
                filters: {},
                width: "1",
                customAsset: false,
                family: "Website",
                options: {},
                tooltip: "",
            },
        },
        {
            pos: {
                sizeX: 1,
                sizeY: 1,
                maxSizeY: 1,
                minSizeX: 1,
                maxSizeX: 2,
                row: 5,
                col: 1,
            },
            properties: {
                selectedChannel: "Direct",
                metric: "WebDemographicsGender",
                webSource: "Total",
                duration: "3m",
                type: "PieChart",
                filters: {},
                width: "1",
                customAsset: false,
                family: "Website",
                options: {},
                tooltip: "",
            },
        },
        {
            pos: {
                sizeX: 2,
                sizeY: 1,
                maxSizeY: 2,
                minSizeX: 2,
                maxSizeX: 4,
                row: 5,
                col: 2,
            },
            properties: {
                selectedChannel: "Direct",
                metric: "AudienceInterests",
                webSource: "Desktop",
                duration: "3m",
                type: "Table",
                filters: {
                    includeSubDomains: "true",
                },
                width: "2",
                customAsset: false,
                family: "Website",
                options: {},
                tooltip: "",
            },
        },
        {
            pos: {
                sizeX: 1,
                sizeY: 1,
                maxSizeY: 1,
                minSizeX: 1,
                maxSizeX: 2,
                row: 6,
                col: 0,
            },
            properties: {
                selectedChannel: "Direct",
                metric: "SearchOrganicPaidOverview",
                webSource: "Desktop",
                duration: "3m",
                type: "PieChart",
                filters: {
                    includeSubDomains: "true",
                },
                width: "1",
                customAsset: false,
                family: "Website",
                options: {},
                tooltip: "",
            },
        },
        {
            pos: {
                sizeX: 1,
                sizeY: 1,
                maxSizeY: 1,
                minSizeX: 1,
                maxSizeX: 2,
                row: 6,
                col: 1,
            },
            properties: {
                selectedChannel: "Direct",
                metric: "SearchBrandedKeywords",
                webSource: "Desktop",
                duration: "3m",
                type: "PieChart",
                filters: {
                    includeSubDomains: "true",
                },
                width: "1",
                customAsset: false,
                family: "Website",
                options: {},
                tooltip: "",
            },
        },
        {
            pos: {
                sizeX: 2,
                sizeY: 1,
                maxSizeY: 2,
                minSizeX: 2,
                maxSizeX: 4,
                row: 7,
                col: 0,
            },
            properties: {
                selectedChannel: "Direct",
                metric: "TopOrganicKeywords",
                webSource: "Desktop",
                duration: "3m",
                type: "WebsiteKeywordsDashboardTable",
                filters: {
                    orderBy: "TotalShare desc",
                    IncludeOrganic: "true",
                    includeSubDomains: "true",
                    filter: "",
                    isAll: true,
                },
                width: "2",
                customAsset: false,
                family: "Website",
                options: {},
                tooltip: "",
            },
        },
        {
            pos: {
                sizeX: 2,
                sizeY: 1,
                maxSizeY: 2,
                minSizeX: 2,
                maxSizeX: 4,
                row: 7,
                col: 2,
            },
            properties: {
                selectedChannel: "Direct",
                metric: "TopPaidKeywords",
                webSource: "Desktop",
                duration: "3m",
                type: "WebsiteKeywordsDashboardTable",
                filters: {
                    orderBy: "TotalShare desc",
                    IncludePaid: "true",
                    includeSubDomains: "true",
                    filter: "",
                    isAll: true,
                },
                width: "2",
                customAsset: false,
                family: "Website",
                options: {},
                tooltip: "",
            },
        },
    ],
};

export default dashboard;
