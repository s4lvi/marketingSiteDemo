import Image from "next/image"
import {useState} from 'react'

const Banner = () => {
    const [zip, setZip] = useState('')
    const [email, setEmail] = useState('')
    const [showRideShareModal, setShowShareModal] = useState(false)
    const [showEmailModal, setShowEmailModal] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showEmailErrors, setShowEmailErrors] = useState(false)
    const [showZipErrors, setShowZipErrors] = useState(false)

    const changeZip = e => {
        setZip(e.target.value)
    }

    const handleZipSubmission = (e) => {
        e.preventDefault()
        if (isValidZip()) {
            isSDZip()
            setShowZipErrors(false)
        } else {
            setShowZipErrors(true)
        }
    }

    const changeEmail = e => {
        setEmail(e.target.value)
    }

    const handleEmailSubmission = (e) => {
        e.preventDefault()
        if (isValidEmail()) {
            setShowEmailModal(false)
            submitEmail()
            setShowSuccessModal(true)
            setZip('')
        } else {
            setShowEmailErrors(true)
        }
    }

    const openEmailModal = ()=> {
        setShowEmailModal(true);
        setEmail('');
        setShowEmailErrors(false);
    }

    const closeEmailModal = ()=> {
        setShowEmailModal(false);
        setShowEmailErrors(false);
    }

    const isValidEmail = () => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    }

    const isValidZip = () => {
        return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zip)
    }

    const isSDZip = async () => {
        await fetch('/api/validate-zipcode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"zipcode": zip}),
        })
            .then((response) => {
                if (response.status === 200) {
                    ampli.track("zipcode submitted", {"zipcode_type": "SERVICE_AVAILABLE_FORM"});
                    setShowRideShareModal(true)
                } else if(response.status === 404) {
                    ampli.track("zipcode submitted", {"zipcode_type": "SERVICE_UNAVAILABLE_FORM"})
                    openEmailModal();
                } else {
                    console.error(response);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const submitEmail = async () => {
        ampli.track("email submitted", {"email_id" : email});

        await fetch('/api/subscribers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "subscriberEmail": email,
                "subscriberZipcode": zip
            }),
        })
            .then((response) => {
                if (response.status === 200) {
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <section id="banner">
            <div className="text white-text center-text text-larger">
                <h2>An exciting invitation for select rideshare drivers</h2>
                <p>
                    Drive invites qualifying rideshare drivers in San Diego to join our electrifying Rideshare
                    Program. Approved drivers can lease the Electric<sup>®</sup> on a weekly basis with no
                    long-term commitment.
                </p>
            </div>
            <p className='text zip-text center-text'>
                Please enter your zip code to see if Drive is available in your area.
            </p>
            <div id={"zipFormContainer"}>
                <form id={"zipForm"}>
                    <input className={showZipErrors && "form-error"} type={"text"} value={zip} onChange={changeZip} name={"zipForm"} id={"zipFormInput"} placeholder={"Zip code"}/>
                    <div className={"location-icon"} >
                    </div>
                    <button name="zipSubmit" id={"zipFormButton"} onClick={handleZipSubmission}>
                        <Image src={`${process.env.cdn}/assets/banner/arrow.svg`} width={20} height={20} alt={'arrow'} loading={"eager"}/>
                    </button>
                    { showZipErrors &&
                    <p style={{color: "red", fontSize: "12px", margin: "-40px 0 0 0"}}>
                        <Image style={{margin: "-8px 0 0 0"}} src={`${process.env.cdn}/assets/banner/error.svg`} width={4} height={14} alt={'error'} loading={"eager"} />
                        &nbsp;&nbsp;&nbsp;Please enter a valid zipcode.
                    </p>
                    }
                </form>
            </div>
            {
                showRideShareModal &&
                <div className={"zip-modal-container"}>
                    <div className={"zip-modal"}>
                        <div className={"zip-modal-upper"}>
                            <div className={"zip-modal-topbar"}>
                                <div className={"zip-modal-logo"}>
                                    <Image src={`${process.env.cdn}/assets/banner/Logo.svg`} width={145} height={69} alt={'logo'} loading={"eager"} />
                                </div>
                                <div className={"modal-close"} onClick={() => {
                                    setShowRideShareModal(false)
                                    }}>
                                    <Image src={`${process.env.cdn}/assets/banner/close.svg`} width={16} height={16} alt={'close'} loading={"eager"}/>
                                </div>
                            </div>
                            <p className={'modal-text'}>Good news! Drive is live in San Diego, but this offer is only available to RideShare drivers at this time.</p>
                            <p className={'grey-text'}>Login to your RideShare account to learn more and see if you qualify.</p>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                <a href={process.env.fordDriveLink}><button name="uberLoginButton" id={"loginWithUberButton"}>Log in with RideShare</button></a>
                            </div>
                        </div>
                        <div className={"zip-modal-lower"}>
                            <p className={'grey-text modal-qualifiers'}>*Qualified drivers must have:</p>
                            <div className={"qualifiers-container modal-qualifiers"}>
                                <div className={"qualifier"}>
                                    <Image src={`${process.env.cdn}/assets/banner/star.svg`} width={21} height={21} alt={'star'} loading={"eager"}/>
                                    <p>DRIVER RATING</p>
                                    <p className={"rating"}>4.85+</p>
                                </div>
                                <div className={"qualifier"}>
                                    <Image src={`${process.env.cdn}/assets/banner/car.svg`} width={36} height={13} alt={'car'} loading={"eager"}/>
                                    <p>LIFETIME TRIP COUNT</p>
                                    <p className={"rating"}>150+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                showEmailModal &&
                <div className={"zip-modal-container"}>
                    <div className={"zip-modal"}>
                        <div className={"zip-modal-email"}>
                            <div className={"zip-modal-topbar"}>
                                <div className={"zip-modal-logo"}>
                                    <Image src={`${process.env.cdn}/assets/banner/Logo.svg`} width={145} height={69} alt={'logo'} loading={"eager"} />
                                </div>
                                <div className={"modal-close"} onClick={() => {
                                    closeEmailModal();
                                }}>
                                    <Image src={`${process.env.cdn}/assets/banner/close.svg`} width={16} height={16} alt={'close'} loading={"eager"} />
                                </div>
                            </div>
                            <p className={'modal-text'}>Join our mailing list to be the first to know when we are launching near you.</p>
                            <div id={"emailFormContainer"}>
                                <form>
                                    <input className={showEmailErrors && "form-error"} type={"text"} value={email} onChange={changeEmail} name={"emailForm"} id={"emailFormInput"} placeholder={"Enter your email"}/>
                                    <button name="emailSubmit" id={"emailFormButton"} onClick={handleEmailSubmission}>
                                        <Image src={`${process.env.cdn}/assets/banner/arrow.svg`} width={20} height={20} alt={'arrow'} loading={"eager"}/>
                                    </button>
                                    { showEmailErrors &&
                                    <p style={{color: "red", fontSize: "12px", margin: "-40px 0 0 0"}}>
                                        <Image style={{margin: "-8px 0 0 0"}} src={`${process.env.cdn}/assets/banner/error.svg`} width={4} height={14} alt={'error'} loading={"eager"} />
                                        &nbsp;&nbsp;&nbsp;Please enter a valid email.
                                    </p> }
                                </form>
                            </div>
                            <p className={'disclaimer-text'}>By signing up, you agree to Ford’s
                                <a href="https://www.ford.com/help/privacy" target="_blank" rel="noreferrer">Privacy
                                    Policy</a> and <a href="/assets/documents/TC.pdf" target="_blank" rel="noreferrer">Terms of Use</a>
                            </p>
                        </div>
                    </div>
                </div>
            }
            {
                showSuccessModal &&
                <div className={"zip-modal-container"}>
                    <div className={"zip-modal"}>
                        <div className={"zip-modal-success"}>
                            <div className={"zip-modal-topbar"}>
                                <div className={"zip-modal-logo"}>
                                    <Image src={`${process.env.cdn}/assets/banner/Logo.svg`} width={145} height={69} alt={'logo'} loading={"eager"} />
                                </div>
                                <div className={"modal-close"} onClick={() => setShowSuccessModal(false)}>
                                    <Image src={"/assets/banner/close.svg"} width={16} height={16} alt={'close'} />
                                </div>
                            </div>
                            <p className={'modal-text'}>Thank you, We’ll reach out as soon as Drive launches in your area.</p>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}

export default Banner