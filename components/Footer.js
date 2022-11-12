import Image from "next/image"
import { ampli } from "../src/ampli";

const Footer = () => {

    const opt = () => {
        window.OneTrust.ToggleInfoDisplay();
        ampli.track("cookie settings link clicked");
    }

    const fordLinkClicked = () => {
        ampli.track("ford.com link clicked");
    }

    const privacyLinkClicked = () => {
        ampli.track("privacy link clicked");
    }

    const termConditionClicked = () => {
        ampli.track("terms and conditions link clicked");
    }

    return (
        <section id="footer">
            <div className="logo white-text">
                <div className={"img"}><Image src={`${process.env.cdn}/assets/footer/logo.svg`} width={139} height={71} layout={"responsive"} alt={"drive logo"} loading={"eager"}/></div>
            </div>
            <div className="footer_links white-text">
                <div><a href="" onClick={termConditionClicked} target="_blank" rel="noreferrer">Terms & Conditions</a></div>
                <div><a href="#" onClick={opt}>Cookie Settings</a></div>
                <div><a href="" target="_blank" rel="noreferrer" onClick={privacyLinkClicked}>Privacy</a></div>
            </div>
            <div className="copy white-text">
                &copy; Ford Drive. All Rights Reserved.
            </div>
        </section>
    )
}

export default Footer