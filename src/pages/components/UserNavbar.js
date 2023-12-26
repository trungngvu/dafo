import { useUserContext } from "@/context/UserContext";
import Image from "next/image";
import React from "react";
import {
  IoSettingsOutline,
  IoPersonOutline,
  IoNotificationsOutline,
  IoSearch,
  IoCartOutline,
} from "react-icons/io5";
import { useStateContext } from "@/context/StateContext";
import Cart from "./Cart";
import { Autocomplete, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "next/link";

const UserNavBar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <>
      <div className="flex flex-row gap-3 ">
        <IoNotificationsOutline className="w-[30px] h-[30px]" />
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart((prevShowCart) => !prevShowCart)}
        >
          <IoCartOutline />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
        <IoSettingsOutline className="w-[30px] h-[30px]" />
        <Link href="/profile">
          <IoPersonOutline className="w-[30px] h-[30px]" />
        </Link>
      </div>
      {showCart && <Cart />}
    </>
  );
};
export default UserNavBar;
