import React from 'react';

type FillColor = string;
type ClassName = string;

interface Props {
  fillColor: FillColor;
  className: ClassName;
}

const defaultProps = {
  className: '',
  fillColor: '#53585E',
};

const PowerIcon = ({
  fillColor,
  className,
}: Props): React.ReactElement<React.ReactNode> => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    className={className}
  >
    <title>Power icon</title>
    <path
      fill={fillColor}
      fillRule="nonzero"
      d="M12.423 11.755c.04-.038.08-.069.1-.1l-.1.1zM9 0a9 9 0 0 0-9 9.001A9 9 0 0 0 18 9 8.999 8.999 0 0 0 9 0zm-.661 3.102c0-.37.304-.646.661-.662.357-.015.661.316.661.662V8.69c0 .37-.304.646-.661.662-.357.015-.661-.316-.661-.662V3.102zM14.57 9.98c-.284 1.801-1.54 3.437-3.207 4.178-.842.374-1.757.568-2.68.509a5.681 5.681 0 0 1-2.608-.805 5.724 5.724 0 0 1-2.727-4.647 5.74 5.74 0 0 1 .569-2.672c.434-.913 1.137-1.682 1.97-2.246.424-.287.997.094.997.57v.023c0 .28-.172.504-.41.604l-.11.077-.062.046.042-.03c-.011.008-.024.017-.031.024a5.16 5.16 0 0 0-.754.76c-.01.016-.022.031-.033.046-.03.042-.062.086-.09.13a4.646 4.646 0 0 0-.432.778l.03-.077-.066.16c.011-.027.022-.054.036-.08a5.07 5.07 0 0 0-.305 1.109 5.139 5.139 0 0 0 0 1.164c.06.379.16.75.302 1.106a5.207 5.207 0 0 0 .554.953c.009.01.017.022.024.033l.029.033a5.046 5.046 0 0 0 .685.686l.018.013.002.002.004.004.005.005.013.01a.039.039 0 0 1 .011.01l.009.006.004.002.033.027a3.185 3.185 0 0 0 .174.119c.236.156.485.293.746.408.354.14.723.242 1.1.302-.031-.005-.062-.007-.093-.011l.176.024-.081-.011a5.215 5.215 0 0 0 1.09.011l.177-.024c-.03.004-.062.009-.092.01.376-.059.745-.158 1.1-.301a4.98 4.98 0 0 0 .952-.554l.033-.024c.01-.009.022-.02.035-.028a5.046 5.046 0 0 0 .686-.686l.013-.018.002-.002c.002-.002.002-.004.004-.004 0-.003.003-.003.003-.005l.008-.009c.01-.01.018-.02.022-.028 0-.002.003-.002.003-.002l.004-.007a4.98 4.98 0 0 0 .547-.944c.14-.357.242-.727.302-1.106a5.139 5.139 0 0 0 0-1.164c-.06-.38-.161-.752-.304-1.11.01.027.024.054.035.08l-.066-.159c.01.027.022.051.03.078a5.085 5.085 0 0 0-.432-.779c-.028-.044-.059-.086-.09-.13l-.03-.041a5.247 5.247 0 0 0-.741-.752c-.022-.018-.051-.036-.07-.058-.05-.035-.1-.072-.15-.105-.305-.21-.415-.57-.239-.904.159-.3.62-.435.904-.238.249.172.49.357.71.562a5.688 5.688 0 0 1 1.523 2.392c.286.873.33 1.8.187 2.707z"
    />
  </svg>
);
PowerIcon.defaultProps = defaultProps;

export { PowerIcon };
