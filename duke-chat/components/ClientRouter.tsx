"use client";

import { BrowserRouter } from "react-router-dom";

const ClientRouter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default ClientRouter;
