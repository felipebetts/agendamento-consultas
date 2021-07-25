import styled from "styled-components";


export const AppointmentHourCardContainer = styled.div`
    margin: 24px;
    padding: 16px;

    width: 100%;
    border-radius: 8px;
    max-width: 500px;

    box-shadow: ${({ theme }) => theme.boxShadow.primary };

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    text-align: left;
`

export const AppointmentHourButton = styled.button`

    cursor: pointer;

    // height: 32px;
    border-radius: 8px;

    padding: 8px;
    margin: 0 16px 0 0;

    background: ${({ theme }) => theme.colors.primary.orange };
    color: ${({ theme }) => theme.colors.text.white };
    border: none;

    transition-duration: 0.2s;

    &:hover {
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        // border: 2px solid red;
        padding: 12px;
    }
`