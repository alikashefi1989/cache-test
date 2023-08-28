import { FC, FunctionComponentElement, cloneElement, useLayoutEffect, useRef } from "react"
import styled from "@emotion/styled"
import { Global } from '@emotion/react';
import Header from "./header";
import { useLocation } from "react-router-dom";

interface ChildrenProps {
    ref: React.MutableRefObject<HTMLDivElement | undefined>
}

interface LayoutProps {
    children: FunctionComponentElement<ChildrenProps>;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement>()
    useView(ref)

    return (
        <>
            <Global
                styles={{
                    body: {
                        margin: 0,
                        padding: 0,
                    }
                }}
            />
            <LayoutWrapper id='main-layout'>
                <Header />
                {cloneElement(children, { ref: ref })}
            </LayoutWrapper>
        </>
    )
}

export default Layout

const LayoutWrapper = styled.div(() => ({
    boxSizing: 'border-box',
    width: '100%',
    height: '100vh',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
}))

const useView = (ref: React.MutableRefObject<HTMLDivElement | undefined>) => {
    const { pathname } = useLocation()

    console.log('useView', pathname, ref.current?.id) // get and save

    useLayoutEffect(() => {
        console.log('useLayoutEffect', pathname, ref.current?.id) // get anf set
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])
}