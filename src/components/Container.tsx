import { ReactNode } from "react";
import React from "react";

interface Props {
  children: ReactNode | ReactNode[];
  title?: string;
}

const Container = ({ children, title }: Props) => {
  return (
    <div className="bg-blue-500 p-9 border-4 border-stone-600 rounded shadow-lg	shadow-slate-400 ">
      {title && (
        <h2 className="text-xl pb-2 text-amber-50 font-mono underline decoration-amber-50 font-medium">
          {title}
        </h2>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Container;
