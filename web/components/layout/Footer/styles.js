import styled from "styled-components";


export const FooterContainer = styled.footer`

    width: 100%;
    // height: 70px;

    padding: 1rem;
   
    background: ${({ theme }) => theme.colors.primary.orange };
    color: #efefef;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    // box-shadow: ${({ theme }) => theme.boxShadow.top };
    // border-top: solid 1px ${({ theme }) => theme.colors.text.neutral200 };
`

export const FooterLogo = styled.img`

    // height: 60px;
    width: 130px;
    margin: 0 0 30px;
`

export const FooterItem = styled.p`

padding: 1rem;
    margin: 0;
`

export const FooterShadow = styled.div`
box-shadow: ${({ theme }) => theme.boxShadow.top };

`

export const Cols = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Col = styled.div`
    font-size: 17px;
    font-weight: 600;
    // color: rgba(6, 17, 5, 0.767);
    margin: 80px;
    margin-top: 30px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
    text-align: left;

    @media(max-width:${({ theme }) => theme.breakpoints.md }) {
        width: 250px   
    }
`

export const ColItem = styled.div`

    margin-bottom: 20px;
    cursor: pointer;

    &:hover {
        color: rgb(79, 204, 68);
    }
    
`