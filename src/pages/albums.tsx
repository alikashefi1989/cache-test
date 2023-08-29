import { forwardRef } from "react"
import { useQuery } from '@tanstack/react-query'
import styled from "@emotion/styled"
import useCrudService from "../service/crud"
import API_URI from "../enums/api-uri"
import AlbumModel from "../models/album"
import getData from "../utils/get-data"
import Loading from "../component/loading"
import Error from "../component/error"

interface Props { }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Albums = forwardRef((_: Props, ref: any) => {

    const { getAll } = useCrudService<AlbumModel, unknown, unknown>()

    const { status, data, refetch } = useQuery({
        queryKey: ['albums'],
        queryFn: () => getData<AlbumModel>(API_URI.ALBUMS, getAll),
        staleTime: Infinity,
    })

    if (status === 'loading') return <Loading />
    if (status === 'error' || !Array.isArray(data)) return <Error onRetry={refetch} />

    return (
        <PageWrapper id='Albums-ref' ref={ref}>
            {data.map((item: AlbumModel) => (
                <AlbumItem key={item.id}>
                    {Object.keys(item).map((key: string) => (
                        <div key={key}>
                            <span>{key}</span>
                            <span> : </span>
                            <span>{(item)[key as keyof typeof item]}</span>
                        </div>
                    ))}
                </AlbumItem>
            ))}
        </PageWrapper>
    )
})

export default Albums

const PageWrapper = styled.div(() => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'max-content',
    paddingInline: '20px',
    paddingBlock: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '25px'
}))

const AlbumItem = styled.div(() => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'max-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '3px',
}))