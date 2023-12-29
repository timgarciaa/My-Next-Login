import React from "react";

type Props = {
  children?: React.ReactNode;
};

function Card({ children }: Props) {
  return <div className="rounded bg-slate-50 p-5 text-black">{children}</div>;
}

export default Card;
