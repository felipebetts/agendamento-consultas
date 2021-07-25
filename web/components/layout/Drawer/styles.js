import styled from "styled-components";


export const DrawerList = styled.div`

    // width: 100%;
    height: 200%;
    // background: #fff;
    color: ${({ theme }) => theme.colors.text.neutral600 };

    z-index: 5;

`
export const DrawerListItem = styled.div`

    cursor: pointer;

    width: 100%;

    padding: 8px 16px;

    &:hover {
        background: ${({ theme }) => theme.colors.text.neutral200 };
    }
`

export const Blur = styled.div`
    height: 100%;
    width: 100%;

    ${(props) => props.open ? 'background: rgba(0, 0, 0, 0.2);' : 'background: none;'}
    
    // z-index: 100;

`