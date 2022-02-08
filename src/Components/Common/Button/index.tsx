import React from 'react';
import 'Components/Common/Button/scss/Button.scss';
interface ButtonProps {
  color: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ color, text }) => {
  return <button className={`button--${color}`}>{text}</button>;
};

export default Button;
