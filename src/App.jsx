import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import Providers from "./providers/Providers"
import RootLayout from "./components/RootLayout/RootLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import Career from "./pages/Career"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

// Uncomment and import these components when you're ready to use them
// import Dashboard from "./pages/Dashboard"
// import CreatePost from "./pages/CreatePost"
// import UpdatePost from "./pages/UpdatePost"
// import PrivateRouteAuth from "./components/PrivateRoute/PrivateRouteAuth"
// import PrivateRouteAdmin from "./components/PrivateRoute/PrivateRouteAdmin"

const publicRoutes = [
  { index: true, element: <Home /> },
  { path: "about", element: <About /> },
  { path: "career", element: <Career /> },
  { path: "projects", element: <Projects /> },
  { path: "contact", element: <Contact /> },
]

// Route Guards
// const privateRoutes = [
//   { path: "dashboard", element: <Dashboard /> },
// ]

// const adminRoutes = [
//   { path: "create-xp", element: <CreateXP /> },
//   { path: "update-xp/:xpId", element: <UpdateXP /> },
//   { path: "update-xp/:xpId/delete", element: <DeleteXP /> },
// ]

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/en" replace />,
  },
  {
    path: "/:lang",
    element: <RootLayout />,
    children: [
      ...publicRoutes,
      // Uncomment these route configurations when you're ready to use them
      // {
      //   element: <PrivateRouteAuth />,
      //   children: privateRoutes,
      // },
      // {
      //   element: <PrivateRouteAdmin />,
      //   children: adminRoutes,
      // },
      { path: "*", element: <NotFound /> },
    ],
  },
])

function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}

export default App
