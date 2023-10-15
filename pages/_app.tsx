import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from 'store/store'
import GlobalStyles from '../styles/GlobalStyles'
import { ThemeProvider } from 'components/theme-provider'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>  
            <GlobalStyles/>
            <Provider store={store}>
                <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                >
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        </>
    )
}
