import {createBrowserRouter,RouterProvider,Navigate,} from "react-router-dom";
import "./App.css";

import { RegistrationOTP } from "./components-Auth/RegistrationOTP";
import { PasswordResetSuccess } from "./components-Auth/passwordResetSuccess";
import { ResetPassword } from "./components-Auth/resetpassword";
import { Login } from "./components-Auth/Login";
import { ForgotPassword } from "./components-Auth/ForgotPassword";

const router = createBrowserRouter([
  {
    path:"/login",
    element:<Login/>
  },
  {
    path: "/RegistrationOTP",
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
    path:"/forgot-password",
    element:<ForgotPassword/>
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
