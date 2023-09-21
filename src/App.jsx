import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gallery from "./Gallery.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Home from "./Home.jsx";
import { UserAuthContextProvider } from "./context/UserAuthContext.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import AuthPage from "./AuthPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/authenticated",
    element: (
      <ProtectedRoute>
        <AuthPage />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <>
      <div className="flex  flex-col justify-center items-center">
        <UserAuthContextProvider>
          <RouterProvider router={router} />
        </UserAuthContextProvider>
      </div>
    </>
  );
}

export default App;
