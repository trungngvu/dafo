import styles from "@/styles/forgotpassword.module.css";
import Link from "next/link";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ForgotPasswordSchema } from "@/validations/AuthenticationSchema";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


const ForgotPassword = () => {
  const methods = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const { register, handleSubmit, formState: { errors } } = methods;

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
    // You can add logic to send a reset password email
  };

// ...

return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.square}>
        <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: '6em' }} />

          <h1 className={styles.forgotPasswordText}>Check in your mail</h1>
          <p className={styles.smallText}>
            We just emailed you with the{" "}
            <br />
            instructions to reset your password
          </p>
          <Link href="/resetpw">Change password</Link>
        </div>
      </div>
    </div>
  );
  
  // ...
  
  
  
  
};

export default ForgotPassword;
