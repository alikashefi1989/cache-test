import { FC } from "react"
import Layout from "./layout/layout"
import { Routes, Route } from "react-router-dom";
import routes from "./configs/routes"
import PATH from "./enums/path";

interface AppProps { }

const App: FC<AppProps> = () => {
  return (
    <Routes>
      {routes.map(({ path, cmp: Cmp, title }: { path: PATH; cmp: FC; title: string; }) => (
        <Route id={title} key={path} path={path} element={<Layout><Cmp /></Layout>} />
      ))}
    </Routes>
  )
}

export default App