import { forwardRef } from "react"

interface Props { }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Albums = forwardRef((_: Props, ref: any) => {

    return (
        <div id='Albums-ref' ref={ref}>Albums</div>
    )
})

export default Albums