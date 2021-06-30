import { BellSimple, SignOut, User } from "phosphor-react"
// import { logout } from "../../../services/authService"
import { Box, Flex } from "../../common/containers"
import { Body2 } from "../../common/text"
import { ProfilePicCircle, TopbarIconButton } from "./styles"
import { useRouter } from 'next/router'
import { UserContext } from "../../../contexts/UserContext"
import { useContext } from "react"
import Button from "../../common/Button"
// import { useAlert } from "react-alert"
// import { AlertMessageTemplate } from "../../../configs/alertConfig"
// import { useContext } from "react"
// import { UserContext } from '../../../contexts/UserContext'

import { logout } from '../../../services/authClient'


const Topbar = () => {

    const router = useRouter()
    // const alert = useAlert()

    const { user } = useContext(UserContext)

    const handleLogout = () => {
        const didLogout = logout()
        if (didLogout) {
            // alert.success(<AlertMessageTemplate>Logout realizado com sucesso!</AlertMessageTemplate>)
            router.push('/login')
        } else {
            // alert.error(<AlertMessageTemplate>Não foi possível realizar o logout</AlertMessageTemplate>)
        }
    }

    if (user && user !== 'none') {
        return (
            <Flex
                width='100%'
                justifyContent='flex-end'
            >
                <TopbarIconButton>
                    <BellSimple size={24} weight="thin" />
                </TopbarIconButton>
                <TopbarIconButton
                    last
                onClick={() => handleLogout()}
                >
                    <SignOut size={24} weight="thin" />
                </TopbarIconButton>
                <Box
                    margin='0 16px'
                >
                    <Body2
                        padding='0 24px'
                    >
                        {user.name}
                    </Body2>
                </Box>
                <ProfilePicCircle>
                    <img src="https://github.com/felipebetts.png" alt="" />
                </ProfilePicCircle>
            </Flex>
        )
    }

    return (
        <Flex
            width='100%'
            justifyContent='flex-end'
        >
            <TopbarIconButton>
                <BellSimple size={24} weight="thin" />
            </TopbarIconButton>
            <TopbarIconButton
                last
            // onClick={() => handleLogout()}
            >
                <SignOut size={24} weight="thin" />
            </TopbarIconButton>
            <Box
                margin='0 16px'
            >
                <Button
                    tertiary
                    onClick={() => router.push('/login')}
                >
                    Entrar
                </Button>
            </Box>
            <ProfilePicCircle>
                <User size={24} weight='thin' />
            </ProfilePicCircle>
        </Flex>
    )
}

export default Topbar