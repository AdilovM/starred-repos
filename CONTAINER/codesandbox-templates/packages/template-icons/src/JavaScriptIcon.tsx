import React from "react";
import { SVGIcon, ISVGIconProps } from "./SVGIcon";

export const JavaScriptIcon: React.FC<ISVGIconProps> = ({ ...props }) => (
  <SVGIcon {...props}>
    <path d="M0 0H32V32H0V0Z" fill="#F7DF1E" />
    <path
      d="M8.41397 26.7415L10.8628 25.2595C11.3353 26.0972 11.765 26.8059 12.7959 26.8059C13.784 26.8059 14.407 26.4193 14.407 24.9158V14.6911H17.4142V24.9584C17.4142 28.073 15.5885 29.4907 12.9248 29.4907C10.5192 29.4907 9.12274 28.2448 8.41392 26.7413"
      fill="black"
    />
    <path
      d="M19.0476 26.4193L21.4962 25.0016C22.1408 26.0542 22.9785 26.8275 24.4606 26.8275C25.7066 26.8275 26.5011 26.2045 26.5011 25.3452C26.5011 24.3142 25.6849 23.949 24.3102 23.3477L23.5586 23.0253C21.3889 22.1018 19.9497 20.9419 19.9497 18.4931C19.9497 16.2376 21.6681 14.5191 24.3532 14.5191C26.265 14.5191 27.6397 15.1851 28.6277 16.925L26.2863 18.4286C25.7708 17.505 25.2124 17.1399 24.3533 17.1399C23.4726 17.1399 22.914 17.6984 22.914 18.4286C22.914 19.3308 23.4726 19.696 24.7612 20.2546L25.513 20.5767C28.0692 21.6723 29.5084 22.7892 29.5084 25.3023C29.5084 28.009 27.3819 29.491 24.5251 29.491C21.7326 29.491 19.9282 28.1593 19.0477 26.4193"
      fill="black"
    />
  </SVGIcon>
);

export const JavaScriptIconDark: React.FC<ISVGIconProps> = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 1H31V31H1V1ZM8.88808 26.0702L8.88813 26.0701C9.55269 27.4796 10.8618 28.6476 13.117 28.6476C15.6142 28.6476 17.3258 27.3185 17.3258 24.3985V14.7729H14.5066V24.3586C14.5066 25.7681 13.9225 26.1305 12.9961 26.1305C12.0297 26.1305 11.6268 25.4661 11.1839 24.6808L8.88813 26.0701L8.88804 26.0699L8.88808 26.0702ZM21.1527 24.439L18.8572 25.7681C19.6827 27.3993 21.3743 28.6478 23.9922 28.6478C26.6705 28.6478 28.6642 27.2584 28.6642 24.7209C28.6642 22.3648 27.3149 21.3178 24.9184 20.2907L24.2137 19.9886C23.0055 19.465 22.4819 19.1226 22.4819 18.2768C22.4819 17.5922 23.0055 17.0686 23.8312 17.0686C24.6367 17.0686 25.1601 17.4109 25.6434 18.2768L27.8385 16.8672C26.9122 15.236 25.6234 14.6117 23.8311 14.6117C21.3138 14.6117 19.7028 16.2228 19.7028 18.3373C19.7028 20.633 21.0521 21.7205 23.0861 22.5862L23.7908 22.8885C25.0796 23.4522 25.8448 23.7945 25.8448 24.7612C25.8448 25.5667 25.0999 26.1507 23.9318 26.1507C22.5423 26.1507 21.757 25.4258 21.1527 24.439Z"
      fill="black"
    />
  </SVGIcon>
);
export const JavaScriptIconLight: React.FC<ISVGIconProps> = ({ ...props }) => (
  <SVGIcon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 1H31V31H1V1ZM8.88808 26.0702L8.88813 26.0701C9.55269 27.4796 10.8618 28.6476 13.117 28.6476C15.6142 28.6476 17.3258 27.3185 17.3258 24.3985V14.7729H14.5066V24.3586C14.5066 25.7681 13.9225 26.1305 12.9961 26.1305C12.0297 26.1305 11.6268 25.4661 11.1839 24.6808L8.88813 26.0701L8.88804 26.0699L8.88808 26.0702ZM21.1527 24.439L18.8572 25.7681C19.6827 27.3993 21.3743 28.6478 23.9922 28.6478C26.6705 28.6478 28.6642 27.2584 28.6642 24.7209C28.6642 22.3648 27.3149 21.3178 24.9184 20.2907L24.2137 19.9886C23.0055 19.465 22.4819 19.1226 22.4819 18.2768C22.4819 17.5922 23.0055 17.0686 23.8312 17.0686C24.6367 17.0686 25.1601 17.4109 25.6434 18.2768L27.8385 16.8672C26.9122 15.236 25.6234 14.6117 23.8311 14.6117C21.3138 14.6117 19.7028 16.2228 19.7028 18.3373C19.7028 20.633 21.0521 21.7205 23.0861 22.5862L23.7908 22.8885C25.0796 23.4522 25.8448 23.7945 25.8448 24.7612C25.8448 25.5667 25.0999 26.1507 23.9318 26.1507C22.5423 26.1507 21.757 25.4258 21.1527 24.439Z"
      fill="white"
    />
  </SVGIcon>
);
