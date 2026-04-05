import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import PostJob from "../Pages/PostJob";
import MyJobs from "../Pages/MyJobs";
import SalaryEstimated from "../Pages/SalaryEstimated";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../components/Login";
import JobDetails from "../Pages/JobDetails";
import Register from "../components/Register";
// import ProtectedRoute from "./ProtectedRoute"; // not needed anymore

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        // element: <ProtectedRoute element={<Home />} />, removed protection
        element: <Home />, // ✅ direct access
      },
      { path: "/login", element: <Login /> },
      { path: "/sign-up", element: <Register /> },
      {
        path: "/post-job",
        // element: <ProtectedRoute element={<PostJob />} />, removed protection
        element: <PostJob />, // ✅ direct access
      },
      {
        path: "/my-job",
        // element: <ProtectedRoute element={<MyJobs />} />, removed protection
        element: <MyJobs />, // ✅ direct access
      },
      {
        path: "/salary",
        // element: <ProtectedRoute element={<SalaryEstimated />} />, removed protection
        element: <SalaryEstimated />, // ✅ direct access
      },
      {
        path: "edit-job/:id",
        // element: <ProtectedRoute element={<UpdateJob />} />, removed protection
        element: <UpdateJob />, // ✅ direct access
        loader: ({ params }) => fetch(`https://job-finder-backend-etod.onrender.com/all-jobs/${params.id}`),
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
      },
    ],
  },
]);

export default router;
