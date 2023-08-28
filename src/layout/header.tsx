import styled from "@emotion/styled"
import { FC } from "react"
import routes from "../configs/routes"
import PATH from "../enums/path"
import { useLocation, useNavigate } from "react-router-dom"

const Header: FC = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    return (
        <HeaderWrapper>
            {routes.map(({ title, path }: { path: PATH; cmp: FC; title: string; }) => (
                <PathLink
                    key={path}
                    isActive={pathname === path}
                    onClick={() => navigate(path)}
                >
                    {title}
                </PathLink>
            ))}
        </HeaderWrapper>
    )
}

export default Header

const HeaderWrapper = styled.div(() => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'max-content',
    padding: '25px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '15px',
}))

interface PathLinkProps {
    isActive?: boolean
}

const PathLink = styled.div<PathLinkProps>(({ isActive }) => ({
    width: 'max-content',
    height: '25px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: '18px',
    fontWeight: 700,
    color: isActive ? 'blue' : 'white',
    cursor: isActive ? 'default' : 'pointer',
    ':hover': {
        color: 'blue',
    },
}))