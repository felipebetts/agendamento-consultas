import styled from "styled-components";


export const Background = styled.div`

display: flex;
justify-content: center;
align-items: center;

min-height: 100vh;
min-width: 100vw;

background-image: url('/images/loginBackground.jpg');

background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
`

export const PurpleCoat = styled.div`

    height: 100%;
    width: 100%;


    background: ${({ theme }) => theme.colors.primary.purple };
    // opacity: 0.2;

`

export const Logo = styled.img`

    // margin: 10px;
    width: 150px;

`

export const CheckIconContainer = styled.div`

    margin: 17px 0 9px;
    color: ${({ theme }) => theme.colors.status.success };

`