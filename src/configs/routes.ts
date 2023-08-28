import { FC } from "react"
import PATH from "../enums/path"
import Home from "../pages/home"
import Albums from "../pages/albums"
import Comments from "../pages/comments"
import Photos from "../pages/photos"
import Posts from "../pages/posts"
import Todos from "../pages/todos"
import Users from "../pages/users"

const routes: Array<{
    path: PATH,
    cmp: FC,
    title: string
}> = [
        {
            path: PATH.HOME,
            cmp: Home,
            title: 'home'
        },
        {
            path: PATH.albums,
            cmp: Albums,
            title: 'albums'
        },
        {
            path: PATH.comments,
            cmp: Comments,
            title: 'comments'
        },
        {
            path: PATH.photos,
            cmp: Photos,
            title: 'photos'
        },
        {
            path: PATH.posts,
            cmp: Posts,
            title: 'posts'
        },
        {
            path: PATH.todos,
            cmp: Todos,
            title: 'todos'
        },
        {
            path: PATH.users,
            cmp: Users,
            title: 'users'
        },
    ]

export default routes