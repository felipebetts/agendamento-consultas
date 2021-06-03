import styled from "styled-components";


export const HeaderContainer = styled.header`

    width: 100%;
    height: 70px;

    padding: 0 1rem;
   
    // background: ${({ theme }) => theme.colors.background.primary };

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-shadow: ${({ theme }) => theme.boxShadow.bottom };

`

export const HeaderLogo = styled.img`

    height: 60px;
    width: auto;
    margin: 0 10px 0 0;
`