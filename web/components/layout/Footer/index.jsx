import { FooterContainer, FooterItem, FooterLogo } from "./styles"
import { Flex } from '../../common/containers'


const Footer = () => {
    return (

        <FooterContainer>
            <FooterLogo src='/images/Logo.png' />
            {/* <Flex
                width='100%'
                justifyContent='space-evenly'
            >
                <Flex
                    column
                    width='15%'
                    textAlign='left'
                    alignItems='flex-start'
                    >
                    <FooterItem>topissimo</FooterItem>
                    <FooterItem>top</FooterItem>
                    <FooterItem>top</FooterItem>
                </Flex>
                <Flex
                    column
                    width='15%'
                    textAlign='left'    
                    alignItems='flex-start'
                    >
                    <FooterItem>top</FooterItem>
                    <FooterItem>top</FooterItem>
                    <FooterItem>top</FooterItem>
                </Flex>
                <Flex
                    column
                    width='15%'
                    textAlign='left'    
                    alignItems='flex-start'
                    >
                    <FooterItem>top</FooterItem>
                    <FooterItem>top</FooterItem>
                    <FooterItem>top</FooterItem>
                </Flex>
            </Flex> */}
        </FooterContainer>
    )
}

export default Footer