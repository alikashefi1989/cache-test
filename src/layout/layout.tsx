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
    const wrapperRef = useRef<HTMLDivElement>(null)
    const ref = useRef<HTMLDivElement>()
    useView(wrapperRef)

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
            <LayoutWrapper id='main-layout' ref={wrapperRef}>
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
    minHeight: '100vh',
    padding: 0,
    margin: 0,
    paddingTop: '75px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
}))

const useView = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    const { pathname } = useLocation()

    console.log('useView', pathname, ref.current?.scrollHeight) // get and save

    useLayoutEffect(() => {
        console.log('useLayoutEffect', pathname, ref.current?.scrollHeight) // get anf set
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])
}