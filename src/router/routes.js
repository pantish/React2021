import About from "../pages/About";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import PostsIdPage from "../pages/PostsIdPage";

export const privateRoute = [
    {path: '/about', element: <About/>, exact: true},
    {path: '/posts', element: <Posts/>, exact: true},
    {path: '/posts/:id', element: <PostsIdPage/>, exact: true}
]

export const publicRoute = [
    {path: '/login', element: <Login/>, exact: true},
]