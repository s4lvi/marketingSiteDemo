import Image from "next/image"

const Footer = () => {


    return (
        <section id="footer">
            <div className="logo white-text">
                <div className={"img"}><Image src={`${process.env.cdn}/assets/footer/logo.svg`} width={139} height={71} layout={"responsive"} alt={"drive logo"} loading={"eager"}/></div>
            </div>
            <div className="footer_links white-text">
                <div><a href="" target="_blank" rel="noreferrer">Terms & Conditions</a></div>
                <div><a href="#" >Cookie Settings</a></div>
                <div><a href="" target="_blank" rel="noreferrer">Privacy</a></div>
            </div>
            <div className="copy white-text">
                &copy; Ford Drive. All Rights Reserved.
            </div>
        </section>
    )
}

export default Footer