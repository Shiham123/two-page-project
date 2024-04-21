import {createBrowserRouter} from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import ErrorPage from "../page/ErrorPage"
import HomePage from "../page/HomePage"
import ProtectionPage from "../page/ProtectionPage"

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{index: true, element: <HomePage />},
			{path: "/protection", element: <ProtectionPage />},
		],
	},
])

export default router
