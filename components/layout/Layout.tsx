// import Header from "./Header";
// import Footer from "./Footer";

// const Layout: React.FC = ({ children }: any) => {
//   return (
//     <>
//       <Header />
//       <main className="min-h-screen">{children}</main>
//       <Footer />
//     </>
//   );
// }

// export default Layout;

import Header from "./Header";
import Footer from "./Footer";

import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
