import { isFeatureEnabled, FeatureName } from 'owa-feature-flags';

export default function getAdExpFlights(): FeatureName[] {
    return ([
        'adsexp-adIconText-Sponsored',
        'adsexp-adIconText-Promoted',
        'adsexp-adIconText-cr',
        'adsexp-adIconTextStyle-Nonwhite',
        'adsexp-adIconTextStyle-cr',
        'adsexp-adIconIcon-Info',
        'adsexp-adIconIcon-AdSense',
        'adsexp-adIconIcon-cr',
        'adsexp-adAstupgrade-037',
        'adsexp-adAstupgrade-cr',
        'adsexp-Display-7s',
        'adsexp-Display-cr',
        'adsexp-DisplayOffNativeOn-treament',
        'adsexp-DisplayOffNativeOn-control',
        'adsExp-DONO-AdInPrimary-e1',
        'adsExp-DONO-TwoAdsOther-e1',
        'adsexp-DisplayVerizon-30s',
        'adsexp-DisplayVerizon-cr',
        'adsExp-JacLiveRamp-treatment',
        'adsExp-JacLiveRamp-control',
        'adsexp-nativeAdHover-LightBlue',
        'adsexp-nativeAdHover-MediumGrey',
        'adsexp-nativeAdHover-cr',
        'adsExp-NativeInbox-e2-NoDisplayAd',
        'adsExp-NativeInbox-e3-NoDisplayAd',
        'adsExp-NativeInbox-e4-NoDisplayAd',
        'adsExp-NativeInbox-e3-DisplayAd',
        'adsExp-NativeInbox-control',
        'adsExp-NativeTwoAds-e1',
        'adsExp-NativeTwoAds-e2',
        'adsExp-NativeTwoAds-e3',
        'adsExp-NativeTwoAds-control',
        'adsexp-NRExitRp-treatment',
        'adsexp-NRExitRp-control',
        'adsexp-NRExitRpThrottle-cr',
        'adsexp-NRExitRpThrottle-5s',
        'adsexp-NRExitRpThrottle-10s',
        'adsexp-NRExitRpThrottle-15s',
        'adsexp-NRExitRpThrottle-20s',
        'adsexp-NRExitRpThrottle-202104-cr',
        'adsexp-NRExitRpThrottle-202104-20s',
        'adsexp-NRExitRpThrottle-202104-40s',
        'adsexp-NRExitRpThrottle-202104-60s',
        'adsexp-NRExitRpThrottle-202104-120s',
        'miniAE-NativeUX-update',
    ] as FeatureName[]).filter(f => isFeatureEnabled(f));
}
