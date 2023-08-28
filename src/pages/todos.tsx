import { forwardRef } from "react"

interface Props { }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Todos = forwardRef((_: Props, ref: any) => {

    return (
        <div id='Todos-ref' ref={ref}>Todos</div>
    )
})

export default Todos