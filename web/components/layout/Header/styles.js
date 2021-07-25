import styled from "styled-components";


export const HeaderContainer = styled.header`

    width: 100%;
    height: 90px;

    padding: 0 1rem;
   
    background: ${({ theme }) => theme.colors.background.primary };
    ${(props) => props.open ? 'background: none' : ''}

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: solid 1px ${({ theme }) => theme.colors.text.neutral200 };
    // box-shadow: ${({ theme }) => theme.boxShadow.bottom };

    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;

`

export const HeaderLogo = styled.img`

    height: 60px;
    width: auto;
    margin: 0 10px 0 0;
`

export const HeaderLogoContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;

cursor: pointer;

@media(max-width: ${({ theme }) => theme.breakpoints.sm }) {
    h1 {
        display: none;
    }
}

`

export const HeaderContentContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    .big {
        display: flex;
    align-items: center;
    justify-content: center;
    }
    .small {
        display: none;
    }


    @media(max-width: 576px) {
        h1 {
            display: none;
        }

        .big {
            display: none;
        }
        .small {
            display: block;
        }
    }
`