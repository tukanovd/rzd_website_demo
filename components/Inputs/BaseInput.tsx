import { ChangeEventHandler, useCallback } from "react";
import c from "classnames";
import { Size, SizeType, getSizeClass } from "@utils";
import Subtitle from "./Subtitle";

enum Tags {
  "input" = "input",
  "textarea" = "textarea",
}
type Types = "text" | "password" | "number";
type TagType = keyof typeof Tags;

export interface BaseInput {
  type?: Types;
  tag?: TagType;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  onClick?: () => void;
  size?: SizeType;
  inputStyle?: string;
  subtitleStyle?: string;
  subtitle?: string;
}

const Input = (props: BaseInput) => {
  const {
    type = "text",
    tag = Tags.input,
    value,
    disabled,
    onChange,
    onClick,
    inputStyle,
    subtitleStyle,
    size = Size.m,
    placeholder,
    subtitle,
  } = props;
  const sizeClasses = getSizeClass(size);
  const cssClasses = c("bg-color-primary-white", sizeClasses, inputStyle, {
    "color-disabled": disabled,
  });
  const _subtitleStyle = c(subtitleStyle, {
    "color-disabled": disabled,
  });

  const handleChange: ChangeEventHandler<
    HTMLInputElement & HTMLTextAreaElement
  > = useCallback(
    (event) => {
      onChange && onChange(event.target.value);
    },
    [onChange]
  );

  const handleClick = useCallback(() => {
    onClick && onClick();
  }, [onClick]);

  const Component = tag === Tags.input ? Tags.input : Tags.textarea;

  return (
    <div className="flex flex-col input-place">
      <Component
        // @ts-ignore
        type={type}
        value={value}
        disabled={disabled}
        className={cssClasses}
        onChange={handleChange}
        placeholder={placeholder}
        onClick={handleClick}
      />
      {subtitle && <Subtitle subtitleStyle={_subtitleStyle} text={subtitle} />}
      <style jsx>{`
        input::placeholder {
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
};

Input.displayName = Input;

export default Input;
