import { FC } from "react"
import styled from "@emotion/styled"

interface ErrorProps {
    onRetry: () => void
}

const Error: FC<ErrorProps> = ({ onRetry }) => {
    return <ErrorWrapper>
        <Info>oops!</Info>
        <Info>error occurred :(</Info>
        <RetryBtn
            onClick={onRetry}
        >
            Retry
        </RetryBtn>
    </ErrorWrapper>
}

export default Error

const ErrorWrapper = styled.div(() => ({
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    opacity: 0.5,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
    fontWeight: 800,
    color: 'black',
}))

const RetryBtn = styled.div(() => ({
    boxSizing: 'border-box',
    width: '150px',
    height: '50px',
    borderRadius: '5px',
    backgroundColor: '#ff6363',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    cursor: 'pointer',
    ':hover': {
        backgroundColor: '#fa0202',
        color: 'black',
    }
}))

const Info = styled.h1(() => ({
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
}))