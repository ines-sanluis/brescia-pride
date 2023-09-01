import React from "react";
import Icon from "../Icon";

interface Props {
  backgroundColor: string;
  color: string;
  name: string;
  desc?: string;
}

export default function BatteryIcon({
  backgroundColor,
  color,
  name,
  desc
}: Props) {
  return (
    <Icon
      color={color}
      backgroundColor={backgroundColor}
      name={name}
      desc={desc}
    >
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M20 8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2h2v-4h-2V8zM5 15V9h3l4 6H5z"></path></svg>
    </Icon>
  );
}
