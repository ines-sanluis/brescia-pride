import React from "react";
import Car from "../Car";
import { cars, extraMusic } from "../../utils/constants";

export default function Cars() {
  return (
    <>
      {cars.map((car, index) => (
        <Car
          key={index}
          number={(index + 1).toString()}
          title={car.title}
          desc={car.desc}
        />
      ))}
      <Car
        key={extraMusic.title}
        number="+"
        title={extraMusic.title}
        desc={extraMusic.desc}
        />
    </>
  );
}
