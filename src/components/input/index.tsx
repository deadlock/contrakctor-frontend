import React, { ChangeEvent, forwardRef } from "react";

import { ReactComponent as IconError } from "../../assets/svg/error.svg";

import "./input.scss";

import { ForwardedRef } from "react";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id?: string;
  value?: string;
  defaultValue?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  errorMessage?: string;
  maxLength?: number;
  innerRef?: ForwardedRef<HTMLInputElement>;
  disabled?: boolean;
  onChange?(event: ChangeEvent<HTMLInputElement>): void;
  onKeyPress?(event: React.KeyboardEvent<HTMLInputElement>): void;
}

export const CustomInput: React.FC<InputProps> = (props: InputProps) => {
  const {
    id,
    value,
    defaultValue,
    name,
    label,
    errorMessage,
    placeholder,
    maxLength,
    innerRef,
    disabled,
    type,
    onChange,
    onKeyPress,
  } = props;

  return (
    <div className="input-wrapper">
      {label && (
        <label htmlFor="input" className="label">
          {label}
        </label>
      )}
      <div className="inner-input-wrapper">
        <input
          id={id}
          name={name || "input"}
          className={[
            "input",
            errorMessage && "--error",
            disabled && "--disabled",
          ].join(" ")}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          placeholder={placeholder || ""}
          maxLength={maxLength}
          ref={innerRef}
          onKeyPress={onKeyPress}
          disabled={disabled}
          type={type}
        />
      </div>
      {errorMessage && (
        <div className="error-wrapper">
          <span className="error-inner-wrapper">
            <IconError className="error-icon" />
            <p className="error-text">{errorMessage}</p>
          </span>
        </div>
      )}
    </div>
  );
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <CustomInput {...props} innerRef={ref} />
  )
);

Input.displayName = "Input";

export default Input;
