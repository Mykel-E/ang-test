import { useState, useEffect } from "react"

export default function Business({ menu }) {
    const menuShow = menu ? "hidden" : "initial";
    const [image, setImage] = useState()
    const [timeSlide, setTimeSlide] = useState(true)
    const [currentTab, setCurrentTab] = useState(0)
    let num = 0

    const imagePaths = [
        '/images/business-page/business-page-hand.png',
        '/images/business-page/business-page-girl.png',
        '/images/business-page/man-in-suit.png'
    ]

    const imageSet = (imageUrl, num) => {
        setCurrentTab(num)
        setTimeSlide(false)
        setImage(imageUrl)
    }

    const startSlide = () => {
        setCurrentTab(0)
        setTimeSlide(true)
    }
    const autoSwitcher = () => {
        if (num == 2) {
            num = 0
            setCurrentTab(num)
            setImage(imagePaths[num])
            console.log(num)
            return
        }
        num = num + 1
        setCurrentTab(num)
        setImage(imagePaths[num])
        console.log(num)
    }






    useEffect(() => {
        if (timeSlide) {
            const switcher = setInterval(autoSwitcher, 5000)
            return () => clearInterval(switcher)
        }
    }, [timeSlide])


    return (
        <div className={`${menuShow}`}>
            <div className="flex flex flex-col h-96 xl:h-120 px-10 bg-cover bg-center bg-businessHeading overflow-hidden">
                <div className=" mt-32 xl:mt-48 text-big text-white font-pushpenny xl:w-businessHighlight xl:font-bold xl:text-bigger xl:leading-urbanHighlight">
                    Simplifying modern commerce
                </div>
                <div className=" mt-6 text-smaller xl:h-businessSubHighlight xl:w-businessSubHighlight font-normal font-pushpenny xl:text-urbanMid xl:leading-agencyMid text-white">
                    Payrail Business is helping solopreneurs and small businesses
                    grow into an all-inclusive banking service that works.
                </div>
            </div>

            <div className="flex flex-col items-center h-fit pb-28 -mt-16">
                <div className="flex flex-col lg:flex-row w-full xl:h-120 pl-1 xl:pl-10 justify-between">
                    <div className="lg:hidden  z-30 bg-cover bg-center bg-businessMidPattern flex justify-center">
                        <div className={"mt-16 w-businessMidSectionImage xl:h-businessMidSectionImage"}>
                            <img src={image}></img>
                        </div>
                    </div>
                    <div className=" lg:w-businessMidSectionText lg:mt-20 flex flex-col py-10 h-fit">
                        <div onMouseOut={startSlide} onMouseOver={(e) => { imageSet('/images/business-page/business-page-hand.png', 0) }} className="business-subject border-b flex md:items-center lg:items-start flex-col pb-6 h-fit">
                            <div style={{ color: `${currentTab == 0 ? "#F9B40B" : "rgba(0, 0, 0, 0.25)"}` }} className={`business-sub w-5/6 items-center font-medium text-big lg:text-mid lg:font-bold xl:font-medium xl:text-big md:justify-center lg:justify-start flex font-pushpenny`}>
                                <div className="text-marker w-businessTextMarker h-businessTextMarker bg-cover bg-center ">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 6.73828C7 5.08143 8.34315 3.73828 10 3.73828H14C15.6569 3.73828 17 5.08143 17 6.73828V11.9883H21C21.4142 11.9883 21.75 12.3241 21.75 12.7383C21.75 13.1525 21.4142 13.4883 21 13.4883H17V18.7383C17 20.3951 15.6569 21.7383 14 21.7383H10C8.34315 21.7383 7 20.3951 7 18.7383V13.4883H3C2.58579 13.4883 2.25 13.1525 2.25 12.7383C2.25 12.3241 2.58579 11.9883 3 11.9883H7V6.73828Z" fill={`${currentTab == 0 ? "#F9B40B" : "rgba(0, 0, 0, 0.25)"}`} />
                                    </svg>
                                </div>
                                Payment gateway
                            </div>
                            <div className="business-description hidden ml-10 w-businessMidSectionSubText h-businessMidSectionSubText font-normal text-small font-pushpenny">
                                We do not discriminate against credit cards
                                hence we accept payments in many currencies.
                            </div>
                        </div>
                        <div onMouseOut={startSlide} onMouseOver={(e) => { imageSet('/images/business-page/business-page-girl.png', 1) }} className="business-subject md:items-center lg:items-start border-b flex flex-col pb-6 h-fit">
                            <div style={{ color: `${currentTab == 1 ? "#F9B40B" : "rgba(0, 0, 0, 0.25)"}` }} className={`business-sub w-11/12 items-center justify-between md:justify-center lg:text-mid lg:font-bold xl:font-medium xl:text-big lg:justify-start text-businessTextDefault font-medium text-big flex font-pushpenny`}>
                                <div className="text-marker w-businessTextMarker h-businessTextMarker bg-cover bg-center ">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 6.73828C7 5.08143 8.34315 3.73828 10 3.73828H14C15.6569 3.73828 17 5.08143 17 6.73828V11.9883H21C21.4142 11.9883 21.75 12.3241 21.75 12.7383C21.75 13.1525 21.4142 13.4883 21 13.4883H17V18.7383C17 20.3951 15.6569 21.7383 14 21.7383H10C8.34315 21.7383 7 20.3951 7 18.7383V13.4883H3C2.58579 13.4883 2.25 13.1525 2.25 12.7383C2.25 12.3241 2.58579 11.9883 3 11.9883H7V6.73828Z" fill={`${currentTab == 1 ? "#F9B40B" : "rgba(0, 0, 0, 0.25)"}`} />
                                    </svg>
                                </div>
                                Time Wasted = zero
                            </div>
                            <div className="business-description hidden ml-10 w-businessMidSectionSubTextTwo h-businessMidSectionSubTextTwo font-normal text-small font-pushpenny">
                                The recurring payments and subscription-based
                                payment plans ensure that you drive revenue and
                                expand effortlessly.
                            </div>
                        </div>
                        <div onMouseOut={startSlide} onMouseOver={(e) => { imageSet('/images/business-page/man-in-suit.png', 2) }} className="business-subject border-b md:items-center lg:items-start flex flex-col pb-6 h-fit">
                            <div style={{ color: `${currentTab == 2 ? "#F9B40B" : "rgba(0, 0, 0, 0.25)"}` }} className={`business-sub w-5/6 items-center justify-between md:justify-center lg:text-mid lg:font-bold xl:font-medium xl:text-big lg:justify-start text-businessTextDefault font-medium text-big flex font-pushpenny`}>
                                <div className="text-marker w-businessTextMarker h-businessTextMarker bg-cover bg-center ">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7 6.73828C7 5.08143 8.34315 3.73828 10 3.73828H14C15.6569 3.73828 17 5.08143 17 6.73828V11.9883H21C21.4142 11.9883 21.75 12.3241 21.75 12.7383C21.75 13.1525 21.4142 13.4883 21 13.4883H17V18.7383C17 20.3951 15.6569 21.7383 14 21.7383H10C8.34315 21.7383 7 20.3951 7 18.7383V13.4883H3C2.58579 13.4883 2.25 13.1525 2.25 12.7383C2.25 12.3241 2.58579 11.9883 3 11.9883H7V6.73828Z" fill={`${currentTab == 2 ? "#F9B40B" : "rgba(0, 0, 0, 0.25)"}`} />
                                    </svg>
                                </div>
                                For every business
                            </div>
                            <div className="business-description hidden ml-10 w-businessMidSectionSubTextThree h-businessMidSectionSubTextThree font-normal text-small font-pushpenny">
                                Whether you are a startup or the most experienced solopreneur,
                                Payrail business has a solution for you. Through our app,
                                you can get insight into your business’ revenue and run your business
                                from anywhere in the world.
                            </div>
                        </div>
                    </div>
                    <div className=" hidden w-8/12 h-full z-30 bg-cover bg-center bg-businessMidPattern lg:flex justify-center">
                        <div className={"mt-16 w-businessMidSectionImage h-businessMidSectionImage"}>
                            <img src={image}></img>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center mt-10 w-full pb-4 pr-1 lg:m-auto xl:z-10 lg:px-14 xl:justify-between lg:h-businessHighlight lg:w-urbanMidSection rounded-third bg-businessCtaBox border border-businessCtaBox">
                    <div className="flex flex-col lg:h-businessMidSectionSubTextThree lg:w-businessCta">
                        <div className='lg:hidden font-bold font-pushpenny text-small text-center'>
                            Sign up for free.
                            Manage money with ease

                        </div>
                        <div className='hidden lg:block font-bold w-businessCta h-urbanCta  font-pushpenny text-mid lg:text-big leading-urbanCta'>
                            Sign up for free. <br></br>
                            Manage money with ease

                        </div>
                        <div className='text-smaller px-2 lg:px-0 lg:pt-6 font-normal lg:text-urbanMid lg:leading-urbanCtaDesc lg:w-businessCta lg:h-urbanCtaDesc'>
                            We are bringing in a solution that features ease,
                            convenience, and security from fraud, businesses can
                            jump on this train and improve their chances of
                            success.

                        </div>
                    </div>
                    <div className="w-2/5 lg:ml-0 flex justify-start">
                        <button className=" mt-10 h-10 w-32 justify-center items-center flex rounded-second bg-agencyButton text-smaller font-pushpenny text-businessCtaButton">
                            Start here
                            <img src="/images/business-page/business-button-arrow.png"></img>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}