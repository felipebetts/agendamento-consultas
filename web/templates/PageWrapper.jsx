import { Box, Flex } from "../components/common/containers"
import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import Drawer from 'rc-drawer'
import { useContext } from "react"
import { DrawerContext } from '../contexts/DrawerContext'
import { Blur, DrawerList } from "../components/layout/Drawer/styles"

const PageWrapper = ({ children }) => {

    const { open, setOpen } = useContext(DrawerContext)


    return (
        <>
            <Drawer width='20vw' placement='right' handler={false} open={open} onClose={() => setOpen(!open)}>
                <DrawerList>
                    testee
                    {/* <img src='/images/Logo.png' /> */}
                </DrawerList>
            </Drawer>
            <Blur open={open}>
                <Flex
                    column
                    width='100%'
                    height='100%'
                    minHeight='100vh'
                    justifyContent='space-between'
                >
                    <Box width='100%'>
                        <Header />
                        <Navbar />
                        {children}
                    </Box>
                    <Box width='100%'>
                        <Footer />
                    </Box>
                </Flex>
            </Blur>
        </>
    )
}

export default PageWrapper