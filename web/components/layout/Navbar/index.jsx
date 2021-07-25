import { useRouter } from "next/router"
import { NavItem, StyledNav } from "./styles"


const Navbar = () => {

    const router = useRouter()

    return (
        <StyledNav>
            <NavItem
                onClick={() => router.push('/')}
            >
                Início
            </NavItem>
            <NavItem
                onClick={() => router.push('/horarios')}
            >
                Agendar
            </NavItem>
            <NavItem
                onClick={() => router.push('/horarios')}
            >
                Curiosidades
            </NavItem>
            <NavItem
                onClick={() => router.push('/horarios')}
            >
                Experiências
            </NavItem>
        </StyledNav>
    )
}

export default Navbar