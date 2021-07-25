import { Col, ColItem, Cols, FooterContainer, FooterItem, FooterLogo } from "./styles"


const Footer = () => {
    return (
        <>
            <FooterLogo src='/images/Logo.png' />
            <FooterContainer>
                <Cols>
                    <Col>
                    Copyright &copy; 2021
                    <br/>
                    <br/>
                    <i>Nawi Tarot</i>
                    </Col>
                    <Col>
                        <ColItem>Curso Jardinagem Fácil</ColItem>
                        <ColItem>eBook</ColItem>
                        <ColItem>Produto</ColItem>
                    </Col>
                    <Col>
                        <ColItem>Curso Jardinagem Fácil</ColItem>
                        <ColItem>eBook</ColItem>
                        <ColItem>Produto</ColItem>
                        <ColItem>eBook</ColItem>
                    </Col>
                </Cols>
            </FooterContainer>
        </>
    )
}

export default Footer