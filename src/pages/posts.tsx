import { forwardRef } from "react"

interface Props { }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Posts = forwardRef((_: Props, ref: any) => {

    return (
        <div id='Posts-ref' ref={ref}>Posts</div>
    )
})

export default Posts