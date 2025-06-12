// import Layout from "@/components/layout/Layout";
// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

// pages/_app.tsx
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/Layout';
import '@/styles/globals.css'; // chemin correct


export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
