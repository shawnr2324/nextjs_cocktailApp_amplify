import '../../styles/globals.css';
import NavBar from '../components/navbar';
import { Amplify, API } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

export default function App({ Component, pageProps}){
    return <>
        <NavBar></NavBar>
        <div className="mt-24">
            <Component {...pageProps}/>
        </div>
    </>
}