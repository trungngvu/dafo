/* eslint-disable react-hooks/exhaustive-deps */
import { useUserContext } from "@/context/UserContext";
import styles from "@/styles/signin.module.css";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
const initialData = {
  username: "",
  email: "",
  password: "",
};
const SignUp = () => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(initialData);
  const validates = useRef(true);
  const { handleSignup } = useUserContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    if (password.length < 8) {
      return false;
    }

    const hasUpperCase = /[A-Z]/.test(password);

    const hasLowerCase = /[a-z]/.test(password);

    const hasDigit = /\d/.test(password);

    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    return hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tmpKey = Object.keys(data);
    tmpKey.forEach((key) => {
      if (data[key] === "") {
        setError((prevError) => ({
          ...prevError,
          [key]: `Vui lòng nhập ${key}`,
        }));
        validates.current = false;
      } else {
        if (key === "email" && !isEmailValid(data.email)) {
          setError((prevError) => ({
            ...prevError,
            email: "Vui lòng nhập đúng định dạng email",
          }));
          validates.current = false;
        }
        if (key === "password" && !isPasswordValid(data.password)) {
          setError((prevError) => ({
            ...prevError,
            password:
              "Vui lòng nhập mật khẩu có ít nhất 8 ký tự, bao gồm chữ in hoa, chữ thường, chữ số và ký tự đặc biệt",
          }));
          validates.current = false;
        }
      }
    });
    if (validates.current === true) {
      handleSignup(data.email, data.password, data.username);
    }
  };
  return (
    <div className="flex flex-row h-[100vh]">
      <div className={`${styles.w40} ${styles.bg_black}`}>
        <div className={styles.content_signup}>
          <h1>Welcome Back</h1>
          <p className={`${styles.my_3} ${styles.text_secondary}`}>
            To keep connected please login with your personal info
          </p>
          <button className={`${styles.btn_style} ${styles.mb_2}`}>
            <Link href="/signin">Sign in</Link>
          </button>
        </div>
      </div>
      <div className={`${styles.w60}`}>
        <div className={styles.form_login}>
          <h1>Create Account</h1>
          <div className={`${styles.icons} ${styles.my_3}`}>
            <FaFacebookF className={styles.border_icon} />
            <FaGoogle className={styles.border_icon} />
          </div>
          <p className={`${styles.text_secondary} ${styles.mb_2}`}>
            or use your emails for register
          </p>
          <div className={styles.mb_2}>
            <input
              className={`${styles.fullwidth} ${styles.input_style}`}
              type="text"
              name="username"
              defaultValue={data.username}
              placeholder="Username"
              onChange={handleChange}
            />
            {error.username && (
              <small className={styles.text_error}>{error.username}</small>
            )}
          </div>
          <div className={styles.mb_2}>
            <input
              className={`${styles.fullwidth} ${styles.input_style}`}
              type="text"
              name="email"
              defaultValue={data.email}
              placeholder="Email"
              onChange={handleChange}
            />
            {error.email && (
              <small className={styles.text_error}>{error.email}</small>
            )}
          </div>
          <div className={styles.mb_2}>
            <input
              className={`${styles.fullwidth} ${styles.input_style}`}
              type="password"
              name="password"
              defaultValue={data.password}
              placeholder="Password"
              onChange={handleChange}
            />
            {error.password && (
              <small className={styles.text_error}>{error.password}</small>
            )}
          </div>
          <button
            className={`${styles.btn_style} ${styles.fullwidth} ${styles.mb_2}`}
            onClick={handleSubmit}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
