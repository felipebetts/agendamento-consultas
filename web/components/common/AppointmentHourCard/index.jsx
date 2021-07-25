import { Box } from "../containers"
import { AppointmentHourCardContainer, AppointmentHourButton } from "./styles"

const AppointmentHourCard = ({

}) => {
    return (
        <AppointmentHourCardContainer>
            <Box
                margin='0 0 30px'
            >
                Segunda-feira, 19 de outubro
            </Box>
            <AppointmentHourButton>
                11:00
            </AppointmentHourButton>
        </AppointmentHourCardContainer>
    )
}

export default AppointmentHourCard