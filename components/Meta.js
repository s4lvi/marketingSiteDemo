import Head from "next/head";

const Meta = () => {
    return (
        
        <>
            <Head>
                <title>Drive | Electric Lease</title>
                <meta name="title" content="Drive | Electric Lease" />
                <meta name="description" content="Electrify your rideshare business with a flexible Electric lease for under $300 week with the Drive Rideshare Program." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.drive.com" />
                <meta property="og:title" content="Drive | Electric Lease" />
                <meta property="og:description" content="Electrify your rideshare business with a flexible Electric lease for under $300 week with the Drive Rideshare Program." />
                <meta property="og:image" content="https://www.drive.com/assets/card.jpg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.drive.com" />
                <meta property="twitter:title" content="Drive | Electric Lease" />
                <meta property="twitter:description" content="Electrify your rideshare business with a flexible Electric lease for under $300 week with the Drive Rideshare Program." />
                <meta property="twitter:image" content="https://www.drive.com/assets/card.jpg" />

                <link rel="icon" type="image/x-icon" href={`${process.env.cdn}/assets/favico.png`} />

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                
            </Head>
        </>
    )
}

export default Meta