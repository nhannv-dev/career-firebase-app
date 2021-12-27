import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./HeaderOption.css";

const HeaderOption = (props: PropsType) => {
  const user = useSelector(selectUser);

  return (
    <div className="headerOption" onClick={props.onClick}>
      {props.Icon && <props.Icon className="headerOption__icon" />}
      {props.avatar && (
        <Avatar className="headerOption__icon" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption__title">{props.title}</h3>
    </div>
  );
};

interface PropsType {
  avatar?: boolean;
  Icon?: any;
  title: string;
  onClick?: () => void;
}

export default HeaderOption;
