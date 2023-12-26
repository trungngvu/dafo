import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/g,
      "Please enter a valid email address"
    )
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .required("Password is required"),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/g,
      "Please enter a valid email address"
    )
    .email("Please enter a valid email address")
    .required("Please enter your email address"),
});

export const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .required("Password is required"),
});
