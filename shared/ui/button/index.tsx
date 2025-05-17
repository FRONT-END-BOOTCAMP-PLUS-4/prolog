"use client";
// package
import { CSSProperties, ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
// slice
import styles from "./Button.module.scss";

type ButtonProps = {
  variants?: "basic" | "active" | "theme" | "disabled" | "red" | "purple";
  style?: CSSProperties;
  size?: "small" | "medium" | "large";
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> & {};

/**
 * @Desc
 * 
 * variants: "basic" | "active" | "theme" | "disabled" | "red" | "purple"
 * 
 * size: "small" | "medium" | "large"
 * 
 * style: 커스텀 스타일을 적용할 수 있습니다
 * 
 * asChild: 버튼의 스타일을 유지하고, 태그를 변경할수 있습니다
*/

export default function Button(props: ButtonProps) {
  const {
    variants = "basic",
    style,
    size = "medium",
    asChild = false,
    children = "button",
    ...defaultProps
  } = props;

  const typeClass = styles[`button__${variants}`];
  const sizeClass = styles[`button__${size}`];
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={`${styles.button} ${typeClass} ${sizeClass}`}
      style={style}
      disabled={variants === "disabled"}
      {...defaultProps}
    >
      {children}
    </Component>
  );
}
