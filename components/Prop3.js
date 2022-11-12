import Image from "next/image"

const Prop3 = () => {
    return (
        <section id="prop3">
            <div className="machEimageSm">
                <div className={"img"}>
                    <Image src={`${process.env.cdn}/assets/3-prop/sm.png`} width={1344} height={1181} layout={"responsive"} alt={"mach-e"} unoptimized={true} loading={"eager"}/>
                </div>
            </div>
            <div className="machEimageMd">
                <div className={"img"}>
                    <Image src={`${process.env.cdn}/assets/3-prop/md.webp`} width={1926} height={1235} layout={"responsive"} alt={"mach-e"} unoptimized={true} loading={"eager"}/>
                </div>
            </div>
            <div className="heading white-text">
                <h3>The Award-Winning Mustang</h3>
                <div className={"img"}>
                    <Image src={`${process.env.cdn}/assets/3-prop/Mach-E-lockup%203.webp`} width={2508} height={615} layout={"responsive"} alt={"mach-e"} unoptimized={true} loading={"eager"}/>
                </div>
            </div>
            <div className="trophies white-text">
                <div className="trophy1">
                    <div className={"img"}>
                        <Image src={`${process.env.cdn}/assets/3-prop/trophy.svg`} width={40} height={40} layout={"fixed"} alt={"trophy"} loading={"eager"}/>
                    </div>
                    <p>2021 Car & Driver EV of the Year</p>
                </div>
                <div className="trophy2">
                    <div className={"img"}>
                        <Image src={`${process.env.cdn}/assets/3-prop/trophy.svg`} width={40} height={40} layout={"fixed"} alt={"trophy"} loading={"eager"}/>
                    </div>
                    <p>2021 North American Utility Vehicle of the Year</p>
                </div>
                <div className="trophy3">
                    <div className={"img"}>
                        <Image src={`${process.env.cdn}/assets/3-prop/trophy.svg`} width={40} height={40} layout={"fixed"}  alt={"trophy"} loading={"eager"}/>
                    </div>
                    <p>2021 IIHA Top Safety Pick</p>
                </div>
            </div>
            <div className={"bullets white-text"}>
                <p>5-seater &nbsp;&nbsp;•&nbsp;&nbsp; 266 hp &nbsp;&nbsp;•&nbsp;&nbsp; Rear-wheel drive &nbsp;&nbsp;•&nbsp;&nbsp; Ford Co-Pilot360™ driver-assist
                    technology &nbsp;&nbsp;•&nbsp;&nbsp; 230-mile EPA-est. range</p>
            </div>
        </section>
    )
}

export default Prop3