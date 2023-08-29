import styled from "@emotion/styled"

const Loading = () => {
    return <LoadingWrapper>Loading ...</LoadingWrapper>
}

export default Loading

const LoadingWrapper = styled.div(() => ({
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    opacity: 0.5,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
    fontWeight: 800,
    color: 'black',
}))