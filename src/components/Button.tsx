import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  image?: string;
  type?: "submit" | "button";
}

export default function Button({
  children,
  className,
  onClick,
  image,
  type,
}: IButton) {
  return (
    <button className={className} onClick={onClick} type={type}>
      {image}
      {children}
    </button>
  );
}
