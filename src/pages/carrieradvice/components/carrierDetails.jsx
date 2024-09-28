import React from "react";
import { useParams } from "react-router-dom";

export const CarrierDetails = () => {
  const { id } = useParams();
  return <div className="py-56">CcarrierDetails{id}</div>;
};
