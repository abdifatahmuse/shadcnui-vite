import { useEffect } from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../app/auth/login";
import Dashboard from "../app/dashboard/Dashboard";
import DefaultLayout from "../layouts/DefualtLayout";

export const Routers = () => {
  useEffect(() => {
    //   first

    return () => {
      // second
    };
  }, []);

  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      {/* <Route path="register" element={<Register />} /> */}

      <Route element={<DefaultLayout />}>
        <Route index element={<Dashboard />} />
        <Route index element={<> </>} />
        {/* <Route path=":city" element={<City />} />
        <Route path="trending" element={<Trending />} /> */}
      </Route>
    </Routes>
  );
};
