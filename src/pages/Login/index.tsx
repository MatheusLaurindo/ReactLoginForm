import React from "react";
import 'material-icons/iconfont/material-icons.css';
import { style } from './style';

interface ILogin {
  username?: string;
  password?: string;
}

export const Login = ({ username, password }: ILogin) => {
  const {
    container,
    subContainer,
    totem,
    icon,
    form,
    titleDiv,
    title,
    formFlex,
    flexCol,
    label,
    input,
    button
  } = style;

  return (
    <div className={container}>
      <div className={subContainer}>
        <span className={totem}>
          <span className={icon} style={{fontSize: "45px"}}>person</span>
        </span>
        <form className={form}>
          <div className={titleDiv}>
            <h1 className={title}>Login</h1>
          </div>
          <div className={formFlex}>
            <div className={flexCol}>
              <label className={label}>
                Username
              </label>
              <input className={input} type="text" />
            </div>
            <div className={flexCol}>
              <label className={label}>
                Password
              </label>
              <input
                className={input}
                type="password"
              />
            </div>
            <button className={button}>
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
