import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Home } from "@mui/icons-material";
import { SupervisorAccount } from "@mui/icons-material";
import { Chat } from "@mui/icons-material";
import { BusinessCenter } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";
import "./Header.css";
import HeaderOptions from "./HeaderOptions";
import { useDispatch } from "react-redux";
import { logout } from "./features/counter/userSlice";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();

  const LogoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />

          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={Home} title="Home" />
        <HeaderOptions Icon={SupervisorAccount} title="My Network" />
        <HeaderOptions Icon={BusinessCenter} title="Jobs" />
        <HeaderOptions Icon={Chat} title="Messaging" />
        <HeaderOptions Icon={Notifications} title="Notifications" />
        <HeaderOptions avatar="cat.png" title="Me" onClick={LogoutOfApp} />
      </div>
    </div>
  );
}

export default Header;
