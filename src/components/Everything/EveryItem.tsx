import React from "react";

interface EverythingProps {
  itemName: string;
  itemValue: number;
}

const EveryItem = ({ itemName, itemValue }: EverythingProps) => {
  return (
    <article className="bg-blue-400 w-40 flex justify-between p-1">
      <h3 className="font-bold text-stone-900">{itemName}</h3>
      <span className="bg-sky-900 text-amber-50 px-3 rounded-sm">
        {itemValue}
      </span>
    </article>
  );
};

export default EveryItem;
