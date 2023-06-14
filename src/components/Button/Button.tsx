import React from "react";
import './ButtonStyle.css';
export interface ButtonProps {
  label: string;
  big: boolean;
}

const Button = (props: ButtonProps) => {
  return <button className={props.big ? "bigSize" : ''} >{props.label}</button>;
};

export default Button;