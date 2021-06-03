import { Box, Flex } from "../components/common/containers"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"


const PageWrapper = ({ children }) => {
    return (
        <Flex
            column
            width='100%'
            height='100%'
            minHeight='100vh'
            justifyContent='space-between'
        >
            <Box width='100%'>
                <Header />
                { children }
            </Box>
            <Box width='100%'>
                <Footer />
            </Box>
        </Flex>
    )
}

export default PageWrapper