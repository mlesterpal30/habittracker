import { createBrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import BasketballDetailedStats from "./components/BasketballDetailedStats"
import CodingDetailedStats from "./components/CodingDetailedStats"
import StudyingDetailedStats from "./components/StudyingDetailedStats"
import ClearingDetailedStats from "./components/ClearingDetailedStats"
import ReadingDetailedStats from "./components/ReadingDetailedStats"
import ExerciseDetailedStats from "./components/ExerciseDetailedStats"


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/basketball-detailed-stats",
        element: <BasketballDetailedStats />,
    },                          
    {
        path: "/coding-detailed-stats",
        element: <CodingDetailedStats />,
    },
    {
        path: "/studying-detailed-stats",
        element: <StudyingDetailedStats />,
    },
    {
        path: "/clearing-detailed-stats",
        element: <ClearingDetailedStats />,
    },
    {
        path: "/reading-detailed-stats",
        element: <ReadingDetailedStats />,
    },
    {
        path: "/exercise-detailed-stats",
        element: <ExerciseDetailedStats />,
    },
])

export default router