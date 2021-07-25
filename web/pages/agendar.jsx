import PageWrapper from "../templates/PageWrapper"
import { Flex } from "../components/common/containers"
import { useState } from "react"
import AppointmentHourCard from "../components/common/AppointmentHourCard"

const CalendarPage = () => {

    const [value, setValue] = useState(new Date())

    return (
        <PageWrapper>
            <Flex
                width='100%'
                // margin='5%'
                padding='5%'
                column
                // wrap='wrap'
                // alignItems='flex-start'
            >
                <AppointmentHourCard />
                <AppointmentHourCard />
                <AppointmentHourCard />
                <AppointmentHourCard />
                <AppointmentHourCard />
                <AppointmentHourCard />
                <AppointmentHourCard />
                <AppointmentHourCard />
            </Flex>
        </PageWrapper>
    )
}

export default CalendarPage