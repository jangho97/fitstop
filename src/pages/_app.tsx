// src/pages/_app.tsx

import type { AppProps } from 'next/app'
import '../styles/globals.css' // Tailwind CSS 연결

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
