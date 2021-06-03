import { HeaderContainer, HeaderLogo } from "./styles"
import { Flex } from '../../common/containers'
import { Title1 } from '../../common/text'
import Button from '../../common/Button'
import { User, List } from 'phosphor-react'
import { useRouter } from "next/router"


const Header = () => {

    const router = useRouter()

    return (
        <HeaderContainer>
            <Flex>
                <HeaderLogo src='/images/Logo.png' />
                <Title1 textColor='orange'>
                    Nawi Tarot
                </Title1>
            </Flex>
            <Flex>
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
            </Flex>
        </HeaderContainer>
    )
}

export default Header