import { useEffect, useState, lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { store }from "./store"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute";
const Spinner = lazy(() => import("../src/components/Spinner"));
const NotFound = lazy(() => import("../src/components/Error"));
const Login = lazy(() => import("../src/components/Login"));
const Dashboard = lazy(() => import("../src/components/Dashboard"));
const SingleUserDashboard = lazy(
  () => import("../src/components/SingleUserDashboard")
);

function App() {

  return (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>
        <Toaster position={"top-right"} />
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/dashboard/users"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard/user/:id"
              element={
                <PrivateRoute>
                  <SingleUserDashboard />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Suspense>
    </Provider>
  );
}

export default App;
