import styled from "styled-components";


export const StyledNav = styled.nav`
    width: 100%;
    height: 58px;
    border-bottom: solid 1px ${({ theme }) => theme.colors.text.neutral200 };

    // box-shadow: ${({ theme }) => theme.boxShadow.bottom };

    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.sm }) {
        display: none;
    }
`

export const NavItem = styled.div`

    cursor: pointer;

    padding: 8px;
    margin: 0 16px;

    border-radius: 8px;


    &:hover {
        background: ${({ theme }) => theme.colors.text.neutral200 };
    }
`