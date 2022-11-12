import '../styles/globals.css';
import {ampli} from '../src/ampli'

ampli.load({ environment: 'production' });


function MyApp({ Component, pageProps }) {
   return <Component {...pageProps} />
}

export default MyApp
