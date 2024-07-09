"use client";
import { NextUIProvider } from "@nextui-org/react";

const LayoutUi = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default LayoutUi;
