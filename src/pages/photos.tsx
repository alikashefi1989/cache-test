import { forwardRef } from "react"

interface Props { }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Photos = forwardRef((_: Props, ref: any) => {

    return (
        <div id='Photos-ref' ref={ref}>Photos</div>
    )
})

export default Photos