import styled from "styled-components";


export const CardContainer = styled.div`

    display: flex;
    flex-direction:column;

    ${(props) => props.width ? `width: ${props.width};` : ''}

    padding: 16px;

    background: ${({ theme }) => theme.colors.text.white};
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.boxShadow.primary };

`