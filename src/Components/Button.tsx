import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  image?: string;
}

export default function Button({
  children,
  className,
  onClick,
  image,
}: IButton) {
  return (
    <button className={className} onClick={onClick}>
      {image}
      {children}
    </button>
  );
}
