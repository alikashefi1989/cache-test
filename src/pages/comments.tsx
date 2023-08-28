import { forwardRef } from "react"

interface Props { }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Comments = forwardRef((_: Props, ref: any) => {

    return (
        <div id='Comments-ref' ref={ref}>Comments</div>
    )
})

export default Comments