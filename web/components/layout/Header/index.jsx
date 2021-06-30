import { HeaderContainer, HeaderContentContainer, HeaderLogo, HeaderLogoContainer } from "./styles"
import { Box, Flex } from '../../common/containers'
import { Title1 } from '../../common/text'
import Button from '../../common/Button'
import { User, List } from 'phosphor-react'
import { useRouter } from "next/router"
import Link from 'next/link'
import { useContext, useEffect } from "react"
import { UserContext } from "../../../contexts/UserContext"
import Topbar from "../Topbar"


const Header = () => {

    const router = useRouter()

    const { user } = useContext(UserContext)

    useEffect(() => {
        console.log('user: ', user)
    }, [user])

    return (
        <HeaderContainer>
            <HeaderLogoContainer>
                <HeaderLogo src='/images/Logo.png' />
                <Title1 textColor='orange'>
                    Nawi Tarot
                </Title1>
            </HeaderLogoContainer>
            <HeaderContentContainer>
                <div className='big'>
                    {/* <Box margin='0 10px'>
                        <Link href='/'>
                            Minha Área
                        </Link>
                    </Box>
                    <Box margin='0 10px'>
                        <Link href='/'>
                            Minha Área
                        </Link>
                    </Box>
                    <Box margin='0 10px'>
                        <Link href='/'>
                            Minha Área
                        </Link>
                    </Box> */}
                    <Topbar />
                </div>
                <div className='small'>
                    <Button
                        tertiary
                        margin='0 10px'
                        onClick={() => router.push('/login')}
                    >
                        <User size={24} />
                    </Button>
                    <Button
                        tertiary
                        margin='0 10px'
                    >
                        <List size={24} />
                    </Button>
                </div>
            </HeaderContentContainer>
        </HeaderContainer>
    )
}

export default Header