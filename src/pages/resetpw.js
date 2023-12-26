import styles from "@/styles/forgotpassword.module.css";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ResetPasswordSchema } from "@/validations/AuthenticationSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useUserContext } from "@/context/UserContext";
const ForgotPassword = () => {
  const { sendResetPaswordRequest } = useUserContext();
  const [error, setError] = useState("");
  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
    // You can add logic to send a reset password email
    if (data.password !== data.confirmPassword) {
      setError((prev) => "Confirm password needs to match changing password");
    } else {
      sendResetPaswordRequest(data.password, data.confirmPassword);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.square}>
          <FontAwesomeIcon icon={faKey} style={{ fontSize: "5.5em" }} />
          <h1 className={styles.forgotPasswordText}>Reset password</h1>
          <p className={styles.smallText}>
            What would you like your new <br />
            password to be
          </p>
          <br />
          <form>
            <div className={styles.mb_2}>
              <input
                className={`${styles.fullwidth} ${styles.input_style}`}
                type="text"
                placeholder="New password"
                {...register("password")}
              />
            </div>
            {errors.password && (
              <small className="text-red-500">{errors.password.message}</small>
            )}
            <div className={styles.mb_2}>
              <input
                className={`${styles.fullwidth} ${styles.input_style}`}
                type="text"
                placeholder="Confirm new password"
                {...register("confirmPassword")}
              />
            </div>
            {errors.confirmPassword && (
              <small className="text-red-500">
                {errors.confirmPassword.message}
              </small>
            )}
            <div className={`${styles.saven_style}`}>
              <button
                className={`${styles.save_button}`}
                onClick={handleSubmit(onSubmit)}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  // ...
};

export default ForgotPassword;
