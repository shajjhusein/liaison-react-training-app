import React from "react";
import DemoState from "./DemoState";

interface Props {
  name?: string;
}

export default function Demo(props: Props) {
  return <DemoState></DemoState>;
}
