import Head from "next/head";

const Meta = () => {
    return (
        
        <>
            <Head>
                <title>Ford Drive | Mustang Mache-E Lease</title>
                <meta name="title" content="Ford Drive | Mustang Mache-E Lease" />
                <meta name="description" content="Electrify your rideshare business with a flexible Mustang Mach-E lease for under $300 week with the Uber Ford Drive Rideshare Program." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.forddrive.com" />
                <meta property="og:title" content="Ford Drive | Mustang Mache-E Lease" />
                <meta property="og:description" content="Electrify your rideshare business with a flexible Mustang Mach-E lease for under $300 week with the Uber Ford Drive Rideshare Program." />
                <meta property="og:image" content="https://www.forddrive.com/assets/card.jpg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.forddrive.com" />
                <meta property="twitter:title" content="Ford Drive | Mustang Mache-E Lease" />
                <meta property="twitter:description" content="Electrify your rideshare business with a flexible Mustang Mach-E lease for under $300 week with the Uber Ford Drive Rideshare Program." />
                <meta property="twitter:image" content="https://www.forddrive.com/assets/card.jpg" />

                <link rel="icon" type="image/x-icon" href={`${process.env.cdn}/assets/favico.png`} />

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
                type="text/javascript"
                charSet="UTF-8"
                data-domain-script="f8a6ceab-c855-48d3-b170-11cc316ffa27"
                defer />
                
            </Head>
        </>
    )
}

export default Meta