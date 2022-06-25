import MainLayout from '@/layout/MainLayout'
import AppThemeProvider from '@/provider/AppThemeProvider'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
        jssStyles?.parentElement?.removeChild(jssStyles);
    }
}, []);
  return (
    <AppThemeProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppThemeProvider>
  )
}

export default MyApp
