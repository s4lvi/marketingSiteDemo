import Image from "next/image"

const Hero = () => {


    return (
        <section id={"hero"}>
            <div className="login_button right-text">
            </div>
            <div className="logo white-text">
                <div className={"img"}><Image src={`${process.env.cdn}/assets/hero/logo.svg`} layout={"fill"} alt={"Drive"} loading={"eager"}/></div>
            </div>
            <div className="hero_text white-text center-text">
                <h1 className={"noLease"}>Electrify your business</h1>
                <h1 className={"lease"}>Electrify your business with a Electric<sup>®</sup> lease</h1>
                <p>
                    With flexible leases under $300 a week, Drive’s 2021-2022 Electric<sup>®</sup> program lets you drive your transportation business forward without the hassle of ownership.
                </p>
            </div>
        </section>
    )
}

export default Hero