import { ReactNode } from "react";
import React from "react";

interface Props {
  children: ReactNode | ReactNode[];
  title?: string;
}

const Container = ({ children, title }: Props) => {
  return (
    <div className="bg-green-600 p-4 border shadow rounded-md">
      {title && <h2 className="text-xl pb-2 text-white">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

export default Container;
