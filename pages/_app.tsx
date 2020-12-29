import type { AppProps } from 'next/app';

function SandboxApp({Component, pageProps}:AppProps) {
  return <Component {...pageProps} />;
}

export default SandboxApp