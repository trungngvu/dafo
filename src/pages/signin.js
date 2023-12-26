import styles from "@/styles/signin.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { SignInSchema } from "@/validations/AuthenticationSchema";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "@/utils/api";
import { useUserContext } from "@/context/UserContext";
import toast from "react-hot-toast";

const initialData = {
  email: "",
  password: "",
};

const SignIn = () => {
  const { user, handleLogin, isLogin } = useUserContext();
  const methods = useForm({
    resolver: yupResolver(SignInSchema),
    defaultValues: initialData,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
    handleLogin(data);
  };

  return (
    <div className="flex flex-row h-[100vh]">
      <div className={`${styles.w60}`}>
        <div className={styles.form_login}>
          <h1>Sign in to Dafo</h1>
          <div className={`${styles.icons} ${styles.my_3}`}>
            <FaFacebookF className={styles.border_icon} />
            <FaGoogle className={styles.border_icon} />
          </div>
          <p className={`${styles.text_secondary} ${styles.mb_2}`}>
            or use your email account
          </p>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.mb_2}>
                <input
                  className={`${styles.fullwidth} ${styles.input_style}`}
                  type="text"
                  {...register("email")} // Connect input to react-hook-form
                  placeholder="Email"
                />
                {errors.email && (
                  <small className={styles.text_error}>
                    {errors.email.message}
                  </small>
                )}
              </div>
              <div className={styles.mb_2}>
                <input
                  className={`${styles.fullwidth} ${styles.input_style}`}
                  type="password"
                  {...register("password")} // Connect input to react-hook-form
                  placeholder="Password"
                />
                {errors.password && (
                  <small className={styles.text_error}>
                    {errors.password.message}
                  </small>
                )}
              </div>
              <button
                className={`${styles.btn_style} ${styles.fullwidth} ${styles.mb_2}`}
                type="submit"
              >
                Sign in
              </button>
            </form>
          </FormProvider>
          <div className={`${styles.text_right}`}>
            <Link href="/forgetpw">Forgot password?</Link>
          </div>
        </div>
      </div>
      <div className={`${styles.w40} ${styles.bg_black}`}>
        <div className={styles.content_signup}>
          <h1>Hello friend</h1>
          <p className={`${styles.my_3} ${styles.text_secondary}`}>
            Enter personal details and start your journey
          </p>
          <button className={`${styles.btn_style} ${styles.mb_2}`}>
            <Link href="/signup">Sign up</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
