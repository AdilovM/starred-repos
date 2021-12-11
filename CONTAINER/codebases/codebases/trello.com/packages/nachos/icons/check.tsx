// this component was automatically generated by IconGlyph.template.js
import React from 'react';
import { TestId } from '@trello/test-ids';

import { Icon, IconColor, IconSize } from '../src/components/Icon';

export interface GlyphProps {
  /**
   * A string that is applied as an aria attribute on the icon. Usually it
   * matches up with the display name of the icon
   * @default If no label is provided, it will fallback to the name of the icon
   */
  label?: string;
  /**
   * The color that the Icon should be rendered as.
   * @default @icon-default-color (#42526E)
   */
  color?: IconColor;
  /**
   * The size to render the Icon size.
   * @default "medium"
   */
  size?: IconSize;
  /**
   * A string that gets placed as a data attribute (data-test-id) onto the
   * Icon wrapper so that our
   * smoketest can properly target and test the component
   * @default undefined
   */
  testId?: TestId;
  // Escape hatches
  /**
   * ⚠️ DO NOT USE THIS PROP UNLESS YOU REALLY REALLY HAVE TO.
   *
   * Places a class name on the Icon (more specifically, the svg itself). This
   * is placed in addition to the classes already placed on the Icon. This is
   * placed directly onto the SVG via the glyph templates that are
   * generated by IconGlyph.template.js
   *
   * Please refrain from using this unless absolutely necessary.
   * @default undefined
   */
  dangerous_className?: string;
  /**
   * The switch for the icon to be centered in the dedicated space with padding around it.
   * Designed for cases when icon is not inline.
   */
  block?: boolean;
}

const CheckIconGlyph = () => {
  return (
    <svg
      width="24"
      height="24"
      role="presentation"
      focusable="false"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.73534 12.3223C6.36105 11.9162 5.72841 11.8904 5.3223 12.2647C4.91619 12.639 4.89039 13.2716 5.26467 13.6777L8.87678 17.597C9.41431 18.1231 10.2145 18.1231 10.7111 17.6264C10.7724 17.5662 10.7724 17.5662 11.0754 17.2683C11.3699 16.9785 11.6981 16.6556 12.0516 16.3075C13.0614 15.313 14.0713 14.3169 15.014 13.3848L15.0543 13.3449C16.7291 11.6887 18.0004 10.4236 18.712 9.70223C19.0998 9.30904 19.0954 8.67589 18.7022 8.28805C18.309 7.90022 17.6759 7.90457 17.2881 8.29777C16.5843 9.01131 15.3169 10.2724 13.648 11.9228L13.6077 11.9626C12.6662 12.8937 11.6572 13.8889 10.6483 14.8825C10.3578 15.1685 10.0845 15.4375 9.83288 15.6851L6.73534 12.3223Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const CheckIcon: React.FunctionComponent<GlyphProps> = (props) => {
  const { testId, dangerous_className, size, color, label, block } = props;
  return (
    <Icon
      testId={testId}
      size={size}
      dangerous_className={dangerous_className}
      color={color}
      block={block}
      label={label || 'CheckIcon'}
      glyph={CheckIconGlyph}
    />
  );
};
