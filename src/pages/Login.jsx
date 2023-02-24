import { useFormik } from "formik";
import * as Yup from "yup";
import queryString from "query-string";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../components/common/Input";
import { BiLockAlt } from "react-icons/bi";
import { useDispatchAuth } from "../context/AuthProvider";
import { loginForm } from "../service/loginForm";
const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string().email("پسوند @ ندارد").required("ایمیل اجباری"),
  password: Yup.string()
    .required("رمز شما اجباری")
    .min(8, "must be 8 cheaters"),
});
const Login = () => {
  const Navigates = useNavigate();
  let location = useLocation();
  const query = queryString.parse(location.search);
  const redirect = query.redirect || "/";
  console.log(redirect);

  const setAuth = useDispatchAuth();
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    onSubmit: async (values) => {
      const { email, password } = values;
      const valueUser = {
        email,
        password,
      };

      try {
        const { data } = await loginForm(valueUser);
        toast.success(`welcome ${data.name} !`);
        setAuth(data);
        Navigates(redirect);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    },
  });
  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              <span>ورود به اکانت</span>
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <Input
                  formik={formik}
                  name="ایمیل"
                  label="ایمیل-"
                  id="email"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#2377ff]  focus:outline-none focus:ring-[#2377ff]  sm:text-sm"
                />
              </div>
              <div>
                <Input
                  formik={formik}
                  name="رمز"
                  label="رمز-"
                  id="password"
                  type="password"
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#2377ff]  focus:outline-none focus:ring-[#2377ff]  sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <span
                  href="#"
                  className="font-medium text-[#2377ff]  hover:text-[#2377ff] "
                >
                  رمز رو فراموش کردی ؟
                </span>
              </div>
              <div className="flex items-center ">
                <Input formik={formik} id="remember" type="checkbox" />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-900 cursor-pointer mr-1"
                >
                  بخاطر پسپار !{" "}
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#2377ff]  py-2 px-4 text-sm font-medium text-white hover:bg-[#2377ffe4] focus:outline-none focus:ring-2 focus:ring-[#2377ff]  focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {!formik.isValid && <BiLockAlt className="text-xl" />}
                </span>
                Sign in
              </button>

              <Link to={`/signup?redirect=${redirect}`}>
                <p className="text-blue-700 mt-2 text-sm">
                  قبلا ثبت نام نشدید؟
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
