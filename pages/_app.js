import '../styles/globals.css';
import NavBar from '../components/navbar';

export default function App({ Component, pageProps}){
    return <>
        <NavBar></NavBar>
        <div className="mt-24">
            <Component {...pageProps}/>
        </div>
    </>
}