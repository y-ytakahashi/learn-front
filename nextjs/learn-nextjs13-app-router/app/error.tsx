"use client";

import React from "react";
import ErrorComponent from "@/components/error/error";

const Error = ({ error }: { error: Error }) => {
  return <ErrorComponent error={error} />;
};
export default Error;
