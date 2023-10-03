import Head from 'next/head';
import Image from 'next/image';
import styles from './layouts.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function ContentLayout( {children, home} ){
    return (
        <>
            <div className={`container mx-auto`}>
                <main>{children}</main>

                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">← Back to home</Link>
                    </div>
                )}
            </div>
            
        </>
    )
    
}