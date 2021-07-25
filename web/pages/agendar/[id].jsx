import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Button from "../../components/common/Button"
import { Box, Flex } from "../../components/common/containers"
import { Body1, Title1 } from "../../components/common/text"
import { getAppointmentById } from "../../services/appointmentsClient"
import PageWrapper from "../../templates/PageWrapper"
// import Image from 'next/image'
// import cardPic from '../../public/images/loginBackground.jpg'


const AppointmentHour = () => {

    const router = useRouter()

    const { id } = router.query

    const [appointment, setAppointment] = useState(null)

    useEffect(() => {
        if (id) {
            getAppointmentById(id)
                .then(res => {
                    if (res && res.data) {
                        setAppointment({ ...res.data })
                    }
                })
        }
    }, [id])

    useEffect(() => {
        console.log('appointment: ', appointment)
    }, [appointment])

    return (
        <PageWrapper>
            <Flex column>
                <Title1>
                    Sessão de Tarot
                </Title1>
                <Flex
                    padding='16px'
                    // height='600px'
                    width='100%'
                    justifyContent='center'
                >
                    <Flex
                        width='100%'
                        height='100%'
                        margin='0 20px 0 0'
                        justifyContent='flex-end'
                    >
                        <Box
                            margin='5%'
                            width='100%'
                            maxWidth='500px'
                        >
                            <img src="/images/loginBackground.jpg" alt="" width='100%' />
                        </Box>
                    </Flex>
                    <Flex
                        width='100%'
                        margin='0 0 0 20px'
                        justifyContent='flex-start'
                    >
                        <Box
                            margin='5%'
                            width='100%'
                            maxWidth='500px'
                            textAlign='left'
                        >
                            {appointment && (
                                <ul>
                                    <li>
                                        <Body1>
                                            Começa às: {appointment.starts_at}
                                        </Body1>
                                    </li>
                                    <li>
                                        <Body1>
                                            Termina às: {appointment.ends_at}
                                        </Body1>
                                    </li>
                                </ul>
                            )}
                            <Button
                                fullWidth
                                disabled={appointment?.is_booked}
                            >
                                { appointment?.is_booked ? 'Horário esgotado' : 'Agende Já'}
                            </Button>
                        </Box>
                    </Flex>
                    {/* <Box
                        width='200px'
                        margin='10px'
                    >
                        <Box
                            margin='5%'
                            maxWidth='500px'
                            textAlign='left'
                        >
                            
                        </Box>
                    </Box> */}
                </Flex>
            </Flex>
        </PageWrapper>
    )
}

export default AppointmentHour