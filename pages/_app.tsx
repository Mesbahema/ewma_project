import MainLayout from '@/layout/MainLayout'
import AppThemeProvider from '@/provider/AppThemeProvider'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppThemeProvider>
  )
}

export default MyApp
