import { Route, Routes } from "react-router-dom";

import AuthLayout from "@features/ui/AuthLayout";
import Home from "@pages/home";
import Login from "@pages/login";
import NotFound from "@pages/not-found";
import SignUp from "@pages/sign-up";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
