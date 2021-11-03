import type {AppProps} from 'next/app'
import '../public/css/local-styles.css'

const MyApp = ({Component, pageProps}: AppProps) => {
    return <Component {...pageProps} />
}

export default MyApp
