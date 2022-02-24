import React from "react";
import { useUser } from "../GetUser/GetUser";
import Item from "./Item";

export default function ListUser() {
  const { isLoading, error, data } = useUser();
  if (isLoading) return "Is Loading";
  if (error) return "error";
  return (
    <div className="wrapper">
      {data?.length > 0 &&
        data?.map((card, index) => {
          return <Item key={index} card={card}></Item>;
        })}
    </div>
  );
}
