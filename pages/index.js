import '../styles/global.css';
import '../styles/landing-page.css';
import Sidebar from '../components/sidebar/Sidebar';
import Body from '../components/body/Body';
import Head from 'next/head';

const LandingPage = () => {
    return (
        <div className="LandingPage">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
            </Head>
            <Sidebar className="LandingPage__sidebar" />
            <Body className="LandingPage__body" />
        </div>
    )
}
export default LandingPage;