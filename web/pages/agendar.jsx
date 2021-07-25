import PageWrapper from "../templates/PageWrapper"
import { Flex } from "../components/common/containers"
import { useEffect, useState } from "react"
import AppointmentHourCard from "../components/common/AppointmentHourCard"
import { getAppointments } from "../services/appointmentsClient"

const CalendarPage = () => {

    const [value, setValue] = useState(new Date())
    const [appointments, setAppointments] = useState(null)
    const [renderAppointments, setRenderAppointments] = useState(null)

    useEffect(() => {
        getAppointments()
            .then(res => {
                if (res && res.data) {
                    const groupByDay = {}
                    res.data.forEach((e, i) => {
                        let currentDate = new Date(e.starts_at)
                        // console.log('currentDate: ', currentDate)
                        // console.log('e.starts_at: ', e.starts_at)
                        if (groupByDay[e.starts_at]) {
                            groupByDay[e.starts_at].push(e)
                        } else {
                            groupByDay[e.starts_at] = [e]
                        }
                    })
                    console.log('groupByDay: ', groupByDay)
                    setAppointments(groupByDay)
                }
            })
    }, [])

    // useEffect(() => {
    //     const
    // }, [appointments])

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
                { appointments && Object.keys(appointments).map((key, i) => (
                    <AppointmentHourCard data={appointments[key]} key={`appointment_card_${i}`} />
                ))}
            </Flex>
        </PageWrapper>
    )
}

export default CalendarPage