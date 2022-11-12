import Image from "next/image"
import { ampli } from "../src/ampli"

const Hero = () => {
    
    const uberLoginButtonClicked = () => {
        ampli.track("uber login clicked", {"uber_login_button_location": "MainPage"})
    }

    return (
        <section id={"hero"}>
            <div className="login_button right-text">
                <a id="fordDriveLink" href={process.env.fordDriveLink}>
                    <button className="button-a" onClick={uberLoginButtonClicked}>Uber Login</button>
                </a>
            </div>
            <div className="logo white-text">
                <div className={"img"}><Image src={`${process.env.cdn}/assets/hero/logo.svg`} layout={"fill"} alt={"Ford Drive"} loading={"eager"}/></div>
            </div>
            <div className="hero_text white-text center-text">
                <h1 className={"noLease"}>Electrify your business</h1>
                <h1 className={"lease"}>Electrify your business with a Mustang Mach-E<sup>®</sup> lease</h1>
                <p>
                    With flexible leases under $300 a week, Ford Drive’s 2021-2022 Mach-E<sup>®</sup> program lets you drive your transportation business forward without the hassle of ownership.
                </p>
            </div>
        </section>
    )
}

export default Hero