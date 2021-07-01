import styled from "styled-components";


export const AppointmentHourCardContainer = styled.div`
    margin: 24px;
    padding: 16px;

    width: 100%;
    border-radius: 8px;

    box-shadow: ${({ theme }) => theme.boxShadow.primary };

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const AppointmentHourButton = styled.button`

    height: 32px;
    border-radius: 16px;

    padding: 8px;

    background: ${({ theme }) => theme.colors.primary.orange };
    color: ${({ theme }) => theme.colors.text.white };
    border: none;

`