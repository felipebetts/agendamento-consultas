import styled from "styled-components";


export const FooterContainer = styled.footer`

    width: 100%;
    // height: 70px;

    padding: 0 1rem;
   
    // background: ${({ theme }) => theme.colors.background.primary };

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-shadow: ${({ theme }) => theme.boxShadow.top };

`

export const FooterLogo = styled.img`

    // height: 60px;
    width: 130px;
    margin: 0 0 30px ;
`

export const FooterItem = styled.p`

padding: 1rem;
    margin: 0;
`

export const FooterShadow = styled.div`
box-shadow: ${({ theme }) => theme.boxShadow.top };

`