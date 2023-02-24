import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import queryString from "query-string";
import { signupUser } from "../services/getAllUser";
import Input from "../components/common/Input";
import { BiLockAlt } from "react-icons/bi";
import { useAuthAction, useDispatchAuth } from "../context/AuthProvider";
import { signupForm } from "../service/signupForm";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passwordReg =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const validationSchema = Yup.object({
  name: Yup.string().required("نام اجباری").min(4),
  email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل اجباری"),
  password: Yup.string()
    .required("رمز عبور اجباری")
    .matches(
      passwordReg,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: Yup.string()
    .required("تکرار رمز عبور اجباری")
    .oneOf([Yup.ref("password"), null], "تکرار رمز عبور ناهماهنگ است"),
  phoneNumber: Yup.string()
    .required("شماره همراه اجباری")
    .matches(phoneRegExp, "شماره همراه شما اشتباه است"),
});
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
};

const Signup = () => {
  const Navigates = useNavigate();
  let location = useLocation();
  const query = queryString.parse(location.search);
  const redirect = query.redirect || "/";
  console.log(redirect);

  const setStateProvider = useDispatchAuth();
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnMount: true,
    onSubmit: async (values) => {
      const { name, email, phoneNumber, password } = values;
      const valueUser = {
        name,
        email,
        phoneNumber,
        password,
      };
      try {
        const response = await signupForm(valueUser);
        setStateProvider(response.data);
        toast.success(`your registred ${response.data.name} !`);
        Navigates(redirect);
      } catch (error) {
        if (error.response && error.response.data) {
          toast.error(error.response.data.message);
        }
      }
    },
  });
  return (
    <div>
      <div className="flex min-h-full items-center justify-center  px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-4">
          <div>
            {/* <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color-[#2377ff] de=600" alt="Your Company"> */}
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              <span>ثبت نام</span>
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <Input
                  formik={formik}
                  name="نام"
                  label="نام-"
                  id="name"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#2377ff]  focus:outline-none focus:ring-[#2377ff]  sm:text-sm"
                />
              </div>
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
                  name="شماره تماس"
                  label="شماره تماس-"
                  id="phoneNumber"
                  type="tel"
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
              </div>{" "}
              <div>
                <Input
                  formik={formik}
                  name="تکرار رمز"
                  label="تکرار رمز عبور-"
                  id="confirmPassword"
                  type="confirmPassword"
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
                ثبت نام
              </button>

              <Link to={`/login?redirect=${redirect}`}>
                <p className="text-blue-700 mt-2 text-sm">قبلا وارد شدید؟</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
