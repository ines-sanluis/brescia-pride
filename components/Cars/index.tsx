import React from "react";
import Car from "../Car";
import { cars } from "../../utils/constants";

export default function Cars() {
  return (
    <>
      {cars.map((car, index) => (
        <Car
          key={index}
          number={car.title === "Appel" ? "+" : (index + 1).toString()}
          title={car.title}
          desc={car.desc}
          instagram={car.tag}
        />
      ))}
    </>
  );
}
