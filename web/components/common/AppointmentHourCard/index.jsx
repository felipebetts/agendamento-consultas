import { AppointmentHourCardContainer, AppointmentHourButton } from "./styles"

const AppointmentHourCard = ({

}) => {
    return (
        <AppointmentHourCardContainer>
            <div style={{
                margin: '0 0 30px'
            }}>
                Segunda-feira, 19 de outubro
            </div>
            <AppointmentHourButton>
                11:00
            </AppointmentHourButton>
        </AppointmentHourCardContainer>
    )
}

export default AppointmentHourCard