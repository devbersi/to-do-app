import '../../styles/globals.scss';
import { AppProps } from "next/app";
import { Header } from '../components/Header';
import { ListProvider } from '../context/listContext';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ListProvider>
      <Header/>
      <Component {...pageProps} />
      </ListProvider>
    </>
  )
}

export default MyApp;
