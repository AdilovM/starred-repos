import { apiHelper } from "common/services/apiHelper";
import * as _ from "lodash";
import { chosenItems } from "common/services/chosenItems";
import { swSettings } from "common/services/swSettings";
import { AppsResourceService } from "services/AppsResourceService";
import { KeywordsResource } from "../../../../../scripts/common/resources/keywordsResource";
import { AppInfoService } from "../../../../../scripts/common/services/appInfoService";

export const statesAnalysisHideFavorites = new Set([
    "salesIntelligence-apps-performance",
    "salesIntelligence-apps-ranking",
    "salesIntelligence-apps-engagement",
    "salesIntelligence-apps-engagementoverview",
    "salesIntelligence-apps-demographics",
]);

const appInfoResolver = [
    "$stateParams",
    "$filter",
    function ($stateParams, $filter) {
        let params = apiHelper.transformParamsForAPI($stateParams);
        params = _.pick(params, ["appId", "store"]);
        return AppInfoService.getInfo(params.appId, params.store).then(function (data) {
            const apps = params.appId.split(","),
                mainAppId = apps.shift(),
                mainApp = data[mainAppId] || null,
                tail = [];
            if (chosenItems.$first().$set) {
                chosenItems.$first().$set(mainApp);
            }
            apps.forEach(function (appId) {
                tail.push(data[appId]);
            });
            chosenItems.$tail(tail);
            // because similarApps API only works with one app ID
            params.appId = mainAppId;
            AppsResourceService.similarApps(params, function (data) {
                chosenItems.similarApps = data.slice(0, 5);
            });
            document.title =
                mainApp != null
                    ? $filter("i18n")("titleTag.mobileapps.analysis", {
                          app: mainApp.Title,
                      })
                    : "";

            return data;
        });
    },
];

export const appAnalysisConfig = {
    "salesIntelligence-apps-root": {
        abstract: true,
        parent: "salesIntelligence",
        configId: "AppAnalysis",
        templateUrl: "/app/pages/market-research/root.html",
        packageName: "salesIntelligence",
    },
    "salesIntelligence-apps": {
        abstract: true,
        parent: "salesIntelligence",
        url: "/apps",
        menuId: "apps",
        templateUrl: "/partials/apps/navigation.html",
        controller: "appsNavigationCtrl",
        configId: "AppAnalysis",
        data: {
            menuId: "apps",
            menuKbItems: function (state) {
                let section;
                if (state.name == "salesIntelligence-apps-ranking") {
                    section = "overview";
                } else {
                    switch (state.parent) {
                        case "salesIntelligence-apps.storepageanalysis":
                            section = "storepage";
                            break;
                        case "salesIntelligence-apps-engagement":
                            section = "engagement";
                            break;
                    }
                }
                return ["app", section, state.name.split(".").pop()].join("-");
            },
            showConnectedAccountsGlobalHook: true,
            showConnectedAccountsOnPageHook: false,
            showAvailableAppsIntro: false,
        },
        secondaryBarType: "SalesIntelligenceAppReview",
        isSecondaryBarOpen: true,
        packageName: "salesIntelligence",
    },
    "salesIntelligence-apps-home": {
        parent: "salesIntelligence-apps-root",
        url: "/apps/home",
        templateUrl: "/app/pages/sales-intelligence/sub-modules/app-analysis/templates/home.html",
        controller: "appHomeCtrl",
        configId: "AppAnalysisHome",
        isHomePage: true,
        data: {
            menuId: "",
            menuKbItems: "mobile-home",
            showAvailableAppsIntro: true,
        },
        pageId: {
            section: "apps",
            subSection: "home",
        },
        trackingId: {
            section: "appAnalysis",
            subSection: "home",
            subsubSection: "",
        },
        secondaryBarType: "SalesIntelligenceAppReview",
        isSecondaryBarOpen: false,
        clearSearch: true,
    },
    "salesIntelligence-apps-performance": {
        parent: "salesIntelligence-apps",
        url: "/performance/:appId/:country/:duration/",
        templateUrl: "/app/pages/app-analysis/app-overview/app-performance/index.html",
        configId: "AppPerformanceReport",
        resolve: {
            appInfo: appInfoResolver,
        },
        pageId: {
            section: "apps",
            subSection: "overview",
            subSubSection: "performance",
        },
        trackingId: {
            section: "appAnalysis",
            subSection: "overview",
            subSubSection: "appPerformance",
        },
        data: {
            menuKbItems: null,
        },
        pageTitle: "mobileAppsAnalysis.overview.performance.titleNew",
        reloadOnSearch: false,
        legacy: {
            marketresearch: "companyresearch_app_appperformance",
        },
        fallbackStates: {
            marketresearch: "companyresearch_app_appperformance",
        },
        homeState: "salesIntelligence-apps-home",
    },
    "salesIntelligence-apps-ranking": {
        parent: "salesIntelligence-apps",
        url: "/ranking/:appId/:country/:duration?category?device?mode?orderby?tab",
        templateUrl: "/app/pages/app-analysis/app-overview/app-ranking/ranking.html",
        controller: "appsRankingMainCtrl",
        controllerAs: "ranking",
        configId: "AppRanks",
        resolve: {
            appInfo: appInfoResolver,
        },
        pageId: {
            section: "apps",
            subSection: "overview",
            subSubSection: "ranking",
        },
        trackingId: {
            section: "appAnalysis",
            subSection: "overview",
            subSubSection: "ranking",
        },
        data: {
            menuKbItems: null,
        },
        pageTitle: "mobileAppsAnalysis.overview.ranking.titleNew",
        defaultQueryParams: {
            tab: "history",
            category: "", //Value determined in runtime. Solves problem from double tracking SIM-14371
        },
        reloadOnSearch: false,
        homeState: "salesIntelligence-apps-home",
        legacy: {
            marketresearch: "companyresearch_app_appranking",
        },
        fallbackStates: {
            marketresearch: "companyresearch_app_appranking",
        },
    },
    "salesIntelligence-apps-engagement": {
        abstract: true,
        parent: "salesIntelligence-apps",
        templateUrl: "/partials/apps/engagement.html",
        controller: "appEngagementCtrl",
        resolve: {
            categories: [
                function () {
                    return KeywordsResource.getCategories().then(function (response) {
                        return response;
                    });
                },
            ],
        },
        data: {
            showAvailableAppsIntro: true,
            showConnectedAccountsGlobalHook: false,
            trackPageViewOnSearchUpdate: false,
        },
        homeState: "salesIntelligence-apps-home",
    },
    "salesIntelligence-apps-engagementoverview": {
        parent: "salesIntelligence-apps-engagement",
        configId: "AppEngagementOverview",
        url: "/engagementoverview/:appId/:country/:duration?tab?granularity", //?dataMode'
        template: `<sw-react component="AppEngagementOverviewRedirect"></sw-react>`,
        permission: "MobEngagementOverview",
        resolve: {
            appInfo: appInfoResolver,
        },
        pageId: {
            section: "apps",
            subSection: "engagement",
            subSubSection: "overview",
        },
        trackingId: {
            section: "appAnalysis",
            subSection: "overview",
            subSubSection: "engagement",
        },
        icon: "sw-icon-overview",
        pageTitle: "mobileAppAnalysis.usageAndDownloads.engagement.title",
        pageSubtitle: "apps-engagementoverview.subtitle",
        pinkBadgeTitle: "sidenav.beta",
        data: {
            getCustomUrlType: function (toState) {
                return "connectedAccounts";
            },
            showConnectedAccountsOnPageHook: true,
            showConnectedAccountsGlobalHook: false,
        },
        defaultQueryParams: {
            granularity: "Daily",
        },
        reloadOnSearch: false,
        legacy: {
            marketresearch: "companyresearch_app_appengagementoverview",
        },
        fallbackStates: {
            marketresearch: "companyresearch_app_appengagementoverview",
        },
        homeState: "salesIntelligence-apps-home",
    },
    "salesIntelligence-apps-appaudienceinterests": {
        parent: "salesIntelligence-apps-engagement",
        trackNavUpdate: false,
        configId: "AppAudienceInterests",
        url: "/affinity/:appId/:country/:duration?orderby?page?filter?compare",
        templateUrl: "/app/pages/app-analysis/app-audience/audience-interests/affinity.html",
        controller: "affinityCtrl",
        permission: "MobEngagementAudienceInterests",
        resolve: {
            appInfo: appInfoResolver,
        },
        pageId: {
            section: "apps",
            subSection: "audience",
            subSubSection: "affinity",
        },
        trackingId: {
            section: "appAnalysis",
            subSection: "audience",
            subSubSection: "interests",
        },
        icon: "sw-icon-audience",
        pageTitle: "apps.engagement.affinity.title",
        pageSubtitle: "apps-engagementaffinity.subTitle",
        data: {
            showAvailableAppsIntro: true,
            showConnectedAccountsOnPageHook: true,
            showConnectedAccountsGlobalHook: false,
            pageViewTracking: function (swTrack, toParams, toState) {
                if (swSettings.current.isAllowed) {
                    swTrack.trackPageView(toState, toParams);
                }
            },
        },
        legacy: {
            marketresearch: "companyresearch_app_appinterests",
        },
        fallbackStates: {
            marketresearch: "companyresearch_app_appinterests",
        },
        homeState: "salesIntelligence-apps-home",
    },
    "salesIntelligence-apps-demographics": {
        parent: "salesIntelligence-apps-engagement",
        configId: "AppAudienceDemographics",
        url: "/demographics/:appId/:country/:duration",
        templateUrl: "/app/pages/app-analysis/app-audience/app-demographics/app-demographics.html",
        controllerAs: "ctrl",
        controller: "appDemographicsCtrl",
        permission: "MobEngagementAudienceInterests",
        resolve: {
            appInfo: appInfoResolver,
        },
        pageId: {
            section: "sales-apps",
            subSection: "audience",
            subSubSection: "demographics",
        },
        trackingId: {
            section: "appAnalysis",
            subSection: "audience",
            subSubSection: "demographics",
        },
        icon: "sw-icon-demographics",
        pageTitle: "apps.audience.demographics.pageTitle",
        pinkBadgeTitle: "sidenav.beta",
        data: {
            showAvailableAppsIntro: true,
            showConnectedAccountsOnPageHook: true,
            showConnectedAccountsGlobalHook: false,
            pageViewTracking: function (swTrack, toParams, toState) {
                if (swSettings.current.isAllowed) {
                    swTrack.trackPageView(toState, toParams);
                }
            },
        },
        legacy: {
            marketresearch: "companyresearch_app_appdmg",
        },
        fallbackStates: {
            marketresearch: "companyresearch_app_appdmg",
        },
        homeState: "salesIntelligence-apps-home",
    },
};
