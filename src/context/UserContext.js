import React, { createContext, use, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { getShowingProduct, login, signup } from "@/utils/api";
import { useRouter } from "next/router";
import { resetPassword } from "@/utils/api";
const Context = createContext();

const UserContext = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [resetPasswordEmail, setResetPasswordEmail] = useState("");
  const handleLogin = async (data) => {
    try {
      const user = await login(data);
      await sessionStorage.setItem("user", user.user._id);
      await setIsLogin(true);
      await toast.success("welcome" + user.user._id);
      await router.back();
    } catch (e) {
      toast.error("Wrong account. Try again");
    }
  };
  const checkIsLogin = () => {
    return isLogin;
  };
  const handleSignup = async (email, password, username) => {
    try {
      const newUser = await signup(email, password);
      await sessionStorage.setItem("user", newUser?.userID);
      await setIsLogin(true);
      await toast.success("welcome " + newUser?.userID);
      await router.back();
    } catch (e) {
      toast.error("Error. Try again");
    }
  };
  const logout = () => {
    if (isLogin) {
      sessionStorage.removeItem("user");
      setUser({});
      setIsLogin((prevLogin) => !prevLogin);
      toast.success("Log out successfully");
    }
  };

  const getEmailFromUser = (email) => {
    setResetPasswordEmail(email);
  };
  const sendResetPaswordRequest = (password, confirmPassword) => {
    resetPassword(resetPasswordEmail, password, confirmPassword, (data) => {
      if (data.success === false) {
        toast.error(data.msg);
      } else {
        toast.success(data.msg);
        router.push("/signin");
      }
    });
  };
  return (
    <Context.Provider
      value={{
        user,
        checkIsLogin,
        handleLogin,
        handleSignup,
        logout,
        getEmailFromUser,
        sendResetPaswordRequest,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default UserContext;
export const useUserContext = () => useContext(Context);
