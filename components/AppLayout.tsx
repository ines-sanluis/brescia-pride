import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import { title } from "../utils/constants";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

export default function AppLayout({ children }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta http-equiv="Content-Language" content="it"></meta>
        <meta
          name="description"
          content={title}
        />
        <meta charSet='UFT-8' />
        <meta name='viewport' content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}


