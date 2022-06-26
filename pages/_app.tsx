import MainLayout from '@/layout/MainLayout'
import AppThemeProvider from '@/provider/AppThemeProvider'
import StateProvider from '@/provider/StateProvider';
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import 'rsuite/dist/rsuite.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  const queryClient = new QueryClient();

  return (
    <StateProvider>
      <AppThemeProvider>
        <QueryClientProvider client={queryClient}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </QueryClientProvider>
      </AppThemeProvider>
    </StateProvider>
  )
}

export default MyApp
