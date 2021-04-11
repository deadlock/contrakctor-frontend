import React, { memo } from "react";
import "./button.scss";

type ButtonTypes = "primary" | "cancel";
interface ButtonProps {
  id: string;
  buttonTitle: string;
  icon?: string;
  disabled?: boolean;
  width?: string;
  onClick: () => void;
  type?: ButtonTypes;
}

export const Button: React.FC<ButtonProps> = memo((props) => {
  const { width = "172px", buttonTitle, id, type, onClick, disabled } = props;
  return (
    <button
      id={id}
      style={{ width: width }}
      className={["primary", type === "cancel" && "cancel"].join(" ")}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {buttonTitle}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
