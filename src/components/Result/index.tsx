import React from "react";
import CardItem from "../CardItem";
import { MerchantType } from "../../common/types";

interface ResultProps {
  merchants: MerchantType[] | undefined;
}

export default function Result({ merchants }: ResultProps) {
  return (
    <>
      {merchants?.map((item, index) => (
        <CardItem {...item} key={index} />
      ))}
    </>
  );
}
