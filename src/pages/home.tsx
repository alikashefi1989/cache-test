import { forwardRef } from "react"

interface Props { }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home = forwardRef((_: Props, ref: any) => {

    return (
        <div id='Home-ref' ref={ref}></div>
    )
})

export default Home