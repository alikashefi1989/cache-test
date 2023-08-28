import { forwardRef } from "react"

interface Props { }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Users = forwardRef((_: Props, ref: any) => {

    return (
        <div id='Users-ref' ref={ref}>Users</div>
    )
})

export default Users