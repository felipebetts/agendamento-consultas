import { CardContainer } from "./styles"


const Card = ({ children, width }) => {
    return (
        <CardContainer width={width}>
            { children }
        </CardContainer>
    )
}

export default Card