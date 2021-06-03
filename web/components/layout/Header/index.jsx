import { HeaderContainer, HeaderLogo } from "./styles"
import { Flex } from '../../common/containers'
import { Title1 } from '../../common/text'
import Button from '../../common/Button'
import { User } from 'phosphor-react'


const Header = () => {
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
                >
                    <User size={24} />
                </Button>
            </Flex>
        </HeaderContainer>
    )
}

export default Header