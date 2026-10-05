import {createBrowserRouter,RouterProvider,Navigate,} from "react-router-dom";
import "./App.css";

import { RegistrationOTP } from "./components-Auth/RegistrationOTP";
import { PasswordResetSuccess } from "./components-Auth/passwordResetSuccess";
import { ResetPassword } from "./components-Auth/resetpassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegistrationOTP />,
  },
  {
    path:"/password-reset-success",
    element:<PasswordResetSuccess/>,
  },
  {
    path:"/reset-password",
    element:<ResetPassword/>
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
