import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl shadow-md bg-[#FFFEFD] dark:bg-[#242124] overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
