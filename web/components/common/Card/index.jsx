import { CardContainer } from "./styles"


const Card = ({ children, width, login }) => {
    return (
        <CardContainer width={width} login={login}>
            { children }
        </CardContainer>
    )
}

export default Card