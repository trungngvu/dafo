import styles from "@/styles/forgotpassword.module.css";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotPasswordSchema } from "@/validations/AuthenticationSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "@/context/UserContext";
import { useRouter } from "next/router";
const ForgotPassword = () => {
  const { getEmailFromUser } = useUserContext();
  const methods = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues: { email: "" },
  });
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
    router.push("/resetpw");
    getEmailFromUser(data.email);
  };
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.square}>
          <FontAwesomeIcon icon={faLock} style={{ fontSize: "5.5em" }} />
          <h1 className={styles.forgotPasswordText}>Forgot password?</h1>
          <p className={styles.smallText}>
            Enter your email and we'll send you <br />a link to reset your
            password
          </p>{" "}
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.mb_2}>
              <input
                className={`${styles.fullwidth} ${styles.input_style}`}
                type="text"
                placeholder="Email"
                {...register("email")}
              />
            </div>
            <div className={`${styles.button_wrapper}`}>
              <div className={`${styles.cancel_style}`}>
                <button
                  className={`${styles.cancel_button}`}
                  onClick={handleSubmit(onSubmit)}
                >
                  <Link href="/signin">Cancel</Link>
                </button>
              </div>

              <div className={`${styles.save_style}`}>
                <button className={`${styles.save_button}`} type="submit">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  // ...
};

export default ForgotPassword;
