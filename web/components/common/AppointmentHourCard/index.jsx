import { useEffect, useState } from "react"
import { Box, Flex } from "../containers"
import { AppointmentHourCardContainer, AppointmentHourButton } from "./styles"
import { months, weekDays } from '../../../utils/dates'
import { useRouter } from "next/router"

const AppointmentHourCard = ({
    data
}) => {

    const router = useRouter()

    const [weekDay, setWeekDay] = useState('Loading')
    const [month, setMonth] = useState('Loading')
    const [day, setDay] = useState('Loading')
    const [startingTimes, setStartingTimes] = useState(null)

    useEffect(() => {
        let date = new Date(data[0].starts_at)

        const thisWeekDay = weekDays[date.getDay()]
        setWeekDay(thisWeekDay)

        const thisMonth = months[date.getMonth()]
        setMonth(thisMonth)

        const thisDay = date.getDate()
        setDay(thisDay)

        // const thisHour = data.getHours()
        // setHour(thisHour)

        // let thisMinute = data.getMinutes()
        // if (thisMinute < 10) {
        //     thisMinute = '0' + thisMinute.toString()
        // }
        // setMinutes(thisMinute)

        const hoursAndMinutes = data.map((e, i) => {
            const thisDate = new Date(e.starts_at)

            let thisHour = thisDate.getHours()
            if (thisHour < 10) {
                thisHour = '0' + thisHour.toString()
            }

            let thisMinute = thisDate.getMinutes().toString()
            if (thisMinute < 10) {
                thisMinute = '0' + thisMinute.toString()
            }
            const concatenatedHours = thisHour.toString() + ':' + thisMinute
            return concatenatedHours
        })

        setStartingTimes(hoursAndMinutes)

        console.log('Date.now(): ', Date.now())
        // console.log('data: ', data)
        // console.log('hoursAndMinutes: ', hoursAndMinutes)
    }, [data])

    return (
        <AppointmentHourCardContainer>
            <Box
                margin='0 0 30px'
            >
                {weekDay}, {day} de {month}
            </Box>
            <Flex
                width='100%'
                wrap='wrap'
                justifyContent='flex-start'
            >
                { data && startingTimes && data.map((e, i) => (
                    <AppointmentHourButton
                        onClick={() => {
                            console.log('e: ', e)
                            router.push({
                                pathname: '/agendar/[id]',
                                query: { id: e.id }
                            })
                        }} 
                    >
                        {startingTimes[i]}
                    </AppointmentHourButton>
                ))}
            </Flex>
        </AppointmentHourCardContainer>
    )
}

export default AppointmentHourCard