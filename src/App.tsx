import { FC } from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Layout from "./layout/layout"
import { Routes, Route } from "react-router-dom";
import routes from "./configs/routes"
import PATH from "./enums/path";

interface AppProps { }

const queryClient = new QueryClient()

const App: FC<AppProps> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {routes.map(({ path, cmp: Cmp, title }: { path: PATH; cmp: FC; title: string; }) => (
          <Route id={title} key={path} path={path} element={<Layout><Cmp /></Layout>} />
        ))}
      </Routes>
    </QueryClientProvider>
  )
}

export default App