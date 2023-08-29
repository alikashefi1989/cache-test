import { AxiosResponse } from "axios"

const getData = async<DataModel>(apiUri: string, fetcher: (apiUri: string) => Promise<AxiosResponse<Array<DataModel>, unknown>>) => {
    try {
        const res = await fetcher(apiUri)
        return res.data
    } catch (error) {
        return new Error
    }
}

export default getData