import { useState, lazy } from "react";
import { Logo, BackGround } from "../../assets";
import { Formik, FormikHelpers } from "formik";
import { Link, Navigate } from "react-router-dom";
import { authSuccess, userLoaded } from "../../reducers/auth";
import { AppDispatch, RootState } from "../../store";
import { useAppDispatch, useAppSelector } from "../../hooks";
import * as yup from "yup";
import toast from "react-hot-toast";
export type Login = {
  email: string;
  password: string;
};
const Spinner = lazy(() => import("../Spinner"));

const Index = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const { isAuthenticated, user, newUser } = useAppSelector(
    (state: RootState) => state.auth
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [passwordState, setPasswordState] = useState<boolean>(true);
  const [disabled, setDisabled] = useState<boolean>(false);
  const LoginValidation = yup.object().shape({
    email: yup
      .string()
      .email("Please provide a valid email address")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least at 8 characters")
      .required("Password is required"),
  });
  if (isAuthenticated) {
    return <Navigate to="/dashboard/users" />;
  }
  return (
    <div className=" lg:flex  justify-between items-center block  w-screen min-h-screen ">
      <div className=" hidden  lg:w-2/4 lg:bg-[#fff] lg:h-screen lg:flex lg:justify-center lgitems-center lg:flex-col lg:px-[4rem]">
        <img
          src={Logo}
          alt="LendSquare"
          className=" w-[130px] h-[36px] object-contain"
        />
        <div className="mt-[5rem] w-full h-[70vh] ">
          <img
            src={BackGround}
            className="w-full h-full object-cover"
            alt="Pablo Sign in"
          />
        </div>
      </div>
      <div className="w-full lg:w-2/4  flex  items-center  bg-[#fff]  px-[1rem] lg:px-[4rem] h-screen shadow-[0_15px_90px_0px_rgba(0,0,0,0.3)]">
        <div className="w-full my-0 mx-auto max-w-[500px]">
          <h1 className=" text-center lg:text-left font-bold text-[2rem] lg:text-[2.5rem] text-[#213F7D]">
            Welcome!
          </h1>
          <p className="text-center lg:text-left  text-[#545F7D] text-base lg:text-lg my-2 font-normal">
            Enter details to login.
          </p>
          <Formik
            validationSchema={LoginValidation}
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (
              values: Login,
              { resetForm }: FormikHelpers<Login>
            ) => {
              const { email, password } = values;
              setLoading(true);
              if (
                email  &&
                password
              ) {
                dispatch(authSuccess());
                dispatch(userLoaded());
                toast.success("Login Successful");
                resetForm();
              } else {
                toast.error("Invalid Login details");
              }
              setTimeout(() => {
                setLoading(false);
              }, 1000);
            }}
          >
            {(props) => (
              <form
                className="mt-[1rem] lg:mt-[3rem]"
                onSubmit={props.handleSubmit}
              >
                <input
                  className={
                    props.touched.email && props.errors.email
                      ? `w-full border-2 text-sm lg:text-base my-3 lg:my-4 text-[#545F7D]  border-[#E4033B] p-3 rounded-md outline-none placeholder:text-[#545F7D] placeholder:text-sm placeholder:opacity-[.6] `
                      : `w-full border-2 text-sm lg:text-base my-3 lg:my-4 text-[#545F7D] border-[rgba(84, 95, 125, 0.15)] p-3 rounded-md outline-none placeholder:text-[#545F7D] placeholder:text-sm placeholder:opacity-[.6]`
                  }
                  aria-label="email"
                  placeholder="Email"
                  type="email"
                  id="email"
                  value={props.values.email}
                  onBlur={props.handleBlur("email")}
                  onChange={props.handleChange("email")}
                />

                <span className="block my-2 text-[#E4033B] text-xs lg:text-sm">
                  {props.touched.email && props.errors.email}
                </span>

                <div
                  className={
                    props.touched.password && props.errors.password
                      ? `relative my-3 lg:my-4 w-full border-2 border-[#E4033B] text-[#545F7D] p-3 rounded-md outline-none placeholder:text-[#545F7D] placeholder:text-sm placeholder:opacity-[.6] flex justify-betweeen items-center  `
                      : `relative my-3 lg:my-4 w-full border-2 border-[rgba(84, 95, 125, 0.15)] text-[#545F7D] p-3 rounded-md outline-none placeholder:text-[#545F7D] placeholder:text-sm placeholder:opacity-[.6] flex justify-betweeen items-center  `
                  }
                >
                  <input
                    aria-label="password"
                    className="w-full text-sm lg:text-base border-none outline-none placeholder:text-[#545F7D] placeholder:text-sm placeholder:opacity-[.6]"
                    id="password"
                    placeholder="Password"
                    type={passwordState ? "password" : "text"}
                    value={props.values.password}
                    onBlur={props.handleBlur("password")}
                    onChange={props.handleChange("password")}
                  />
                  <span
                    className={"text-xs uppercase text-[#39CDCC] cursor-pointer "}
                    onClick={() => setPasswordState(!passwordState)}
                  >
                    {passwordState ? "show" : "hide"}
                  </span>
                </div>
                <span className="block my-2 text-[#E4033B] text-xs lg:text-sm">
                  {props.touched.password && props.errors.password}
                </span>

                <Link
                  to="/forgot-password-email"
                  className=" my-3 text-xs uppercase text-[#39CDCC]"
                >
                  Forgot password?
                </Link>

                <div className=" w-full">
                  {loading ? (
                    <div>
                      <Spinner toggle={false} />
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={disabled}
                      className="w-full bg-[#39CDCC] text-[#fff] text-sm lg:text-base  p-3 mt-5 rounded-lg cursor-pointer hover:bg-transparent hover:text-[#39CDCC] hover:border hover:border-[#39CDCC]"
                    >
                      LOG IN
                    </button>
                  )}
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Index;
