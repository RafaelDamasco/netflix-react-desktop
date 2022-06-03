import styled from "styled-components";

export const ButtonStyled = styled.button`
width: 100%;
padding: 8px;
margin: 0 0 22px;

border: 0;
border-radius: ${props => props.theme.layout.border.small};

background-color: ${props => props.theme.palette.core.primary};
color: ${props => props.theme.palette.typography.primary};

/* filter: ${props => props.theme.hover.filter.opacity}; */


cursor: pointer;
`