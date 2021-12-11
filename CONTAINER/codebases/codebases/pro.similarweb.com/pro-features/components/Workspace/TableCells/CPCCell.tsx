import * as React from "react";
import styled from "styled-components";
import { colorsPalettes } from "@similarweb/styles";
import { setFont } from "@similarweb/styles/src/mixins";
import { DefaultCell } from "./DefaultCell";
import { ReactNode, StatelessComponent } from "react";
import { CPCFilter } from "filters/ngFilters";

const StyledCell = styled(DefaultCell)`
    ${setFont({ $family: "'Roboto'" })};
    text-align: right;
    justify-content: flex-end;
`;

export const CPCCell: StatelessComponent<{
    value?: number;
    children?: ReactNode;
    className?: string;
}> = ({ value, children, className }) => {
    return <StyledCell className={className}>{children || CPCFilter()(value)}</StyledCell>;
};
