import Meta from "./Meta";
import Hero from "./Hero";
import Banner from "./Banner";
import Up3 from "./Up3";
import Prop3 from "./Prop3";
import Footer from "./Footer";
import { useEffect } from "react";
import {ampli} from '../src/ampli'

const Landing = () => {
    useEffect(() => {
        const onPageLoad = () => {
            const loadTime = performance.getEntriesByType('navigation')[0].loadEventStart;
            ampli.track("application started", {"load_time": loadTime});
        };
        if (document.readyState === 'complete') {
            onPageLoad();
        } else {
            window.addEventListener('load', onPageLoad);
            return () => window.removeEventListener('load', onPageLoad);
        }
      }, []);
    return (
        <>
            <Meta />
            <Hero />
            <Banner />
            <Up3 />
            <Prop3 />
            <Footer />
        </>
    )
}

export default Landing