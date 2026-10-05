import {createBrowserRouter,RouterProvider,Navigate,} from "react-router-dom";
import "./App.css";

import { RegistrationOTP } from "./components-Login/RegistrationOTP";
import { PasswordResetSuccess } from "./components-Login/passwordResetSuccess";
import { ResetPassword } from "./components-Login/resetpassword";
import { Login } from "./components-Login/Login";
import { ForgotPassword } from "./components-Login/ForgotPassword";

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
