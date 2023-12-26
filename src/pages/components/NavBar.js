import Image from "next/image";
import React from "react";
import {
  IoSettingsOutline,
  IoPersonOutline,
  IoNotificationsOutline,
  IoSearch,
  IoCartOutline,
} from "react-icons/io5";
import { useRouter } from "next/router";
import { useStateContext } from "@/context/StateContext";
import Cart from "./Cart";
import { Autocomplete, TextField, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "next/link";
import { useUserContext } from "@/context/UserContext";
import UserNavBar from "./UserNavbar";
const NavBar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const router = useRouter();
  const [searchValue, setSearchValue] = React.useState("");
  const { checkIsLogin } = useUserContext();
  const options = ["The Godfather", "Pulp Fiction"];

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim() !== "") {
      const params = new URLSearchParams();
      params.append("name", searchValue);
      const queryString = params.toString();
      router.push({
        pathname: "/",
        search: `?${queryString}`,
      });
    }
  };

  return (
    <div className="items-center navbar-container">
      <Link href="/">
        <Image src="/logo.png" width={80} height={80} />
      </Link>

      <form onSubmit={handleSearchSubmit}>
        <Autocomplete
          id="search-autocomplete"
          freeSolo
          options={options}
          value={searchValue}
          onChange={handleSearchChange}
          sx={{ width: 400 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search"
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <IoSearch
                    onClick={handleSearchSubmit}
                    className="cursor-pointer"
                  />
                ),
                sx: {
                  borderRadius: "32px", // Set the border radius here
                },
              }}
            />
          )}
        />
      </form>

      {(checkIsLogin() && <UserNavBar />) || (
        <div className="flex flex-row gap-2">
          <Link href={"/signin"} className="signin">
            Sign in
          </Link>
          <Link
            href={"/signup"}
            className="py-[10px] hover:underline hover:decoration-solid"
          >
            Sign up
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
