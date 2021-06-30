import styled from "styled-components";


export const TopbarIconButton = styled.button`

background: none;
border: none;
cursor: pointer;

padding: 8px 24px 8px 0;

    ${(props) => props.last ? `
        border-right: solid 1px ${ props.theme.colors.text.neutral600 };
    ` : ''}
`

export const ProfilePicCircle = styled.div`

display: flex;
align-items: center;
justify-content: center;

    margin: 0;
    padding: 2px;

    height: 44px;
    width: 44px;

    border-radius: 50%;
    border: 1.5px solid ${({ theme }) => theme.colors.grayscale.divider };
    
    overflow: hidden;
    
    img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
`