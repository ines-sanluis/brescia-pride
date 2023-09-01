import React, { ReactNode } from "react";
import AppLayout from "./AppLayout";

interface Props {
  children: ReactNode;
  title: string;
}

export default function PageLayout({ children, title}: Props) {
  return (
    <>
      <AppLayout>
        <h1>{title}</h1>
        {children}
      </AppLayout>
      <style jsx>{`
        h1 {
          margin-top: 120px;
        }
      `}</style>
    </>
  );
}
