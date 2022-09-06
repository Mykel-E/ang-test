import Link from 'next/link'

export default function Urban({ menu }) {
    const menuShow = menu ? "hidden" : "initial";


    return (
        <div className={`${menuShow} flex-col h-fit z-0 items-start`}>
            <div className='flex h-28 z-40 z-0 w-full px-10 bg-black'></div>
            <div className='lg:hidden  pl-2 mt-2 text-big font-pushpenny font-bold'>
                Accelerating financial ease-on the go
            </div>
            <div className='hidden lg:flex leading-urbanHighlight pl-10 mt-20 text-urbanHighlight text-bigger font-pushpenny font-extra-bold  w-urbanHighlightText h-urbanHighlightText'>
                Accelerating financial ease-on the go
            </div>
            <div className='flex flex-col -mt-20 lg:hidden'>
                <div className='flex pl-2 flex-col h-fit'>
                    <div className=' text-urbanMid font-pushpenny text-urbanSubHighlight font-normal mt-28'>
                        With Payrail Urban, maintenance fees are no business of yours.
                        We would house your account and ensure that your data and funds
                        are well protected at all times at no cost whatsoever.
                    </div>
                    <div className='mt-2 h-urbanTopSubText text-urbanMid text-urbanTopSubText font-bold'>
                        No Minimum balance. No Transaction fees. No Account opening fee
                    </div>
                </div>
                <div className='mt-2'>
                    <img src='/images/urban-page/urban-phone.png'></img>
                </div>
            </div>
            <div className='hidden lg:flex justify-between'>
                <div className='flex pl-10 flex-col h-fit'>
                    <div className='w-urbanTopText text-urbanMid font-pushpenny text-urbanSubHighlight font-normal mt-20 h-urbanTopText'>
                        With Payrail Urban, maintenance fees are no business of yours.
                        We would house your account and ensure that your data and funds
                        are well protected at all times at no cost whatsoever.
                    </div>
                    <div className='mt-20 w-businessMidSectionText h-urbanTopSubText text-urbanMid text-urbanTopSubText font-medium'>
                        No Minimum balance. No Transaction fees. No Account opening fee

                    </div>
                </div>
                <div className='-mt-28'>
                    <img src='/images/urban-page/urban-phone.png'></img>
                </div>
            </div>

            


            <div className=' lg:flex flex flex-col lg:p-20 items-center lg:items-start lg:w-urbanMidSection lg:h-urbanMidSection rounded-third m-auto bg-urbanGray'>
                <div className='lg:leading-urbanMidSectionHeading ml-10 lg:ml-0 text-big lg:text-urbanBig font-pushpenny font-bold lg:w-urbanMidSectionHeading h-urbanMidSectionHeading'>
                 The safety of your money is our priority
                </div>

                <div className='flex lg:flex-row flex-col ml-10 lg:-ml-20 xl:ml-0 -mt-20 lg:mt-0 pb-4'>
                    <div className='flex flex-col  lg:h-urbanCollage lg:justify-between'>
                        <div>
                            <div className='flex items-center w-urbanMidSubSection h-urbanTopSubText'>
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 6.73828C7 5.08143 8.34315 3.73828 10 3.73828H14C15.6569 3.73828 17 5.08143 17 6.73828V11.9883H21C21.4142 11.9883 21.75 12.3241 21.75 12.7383C21.75 13.1525 21.4142 13.4883 21 13.4883H17V18.7383C17 20.3951 15.6569 21.7383 14 21.7383H10C8.34315 21.7383 7 20.3951 7 18.7383V13.4883H3C2.58579 13.4883 2.25 13.1525 2.25 12.7383C2.25 12.3241 2.58579 11.9883 3 11.9883H7V6.73828Z" fill="#89163B" fill-opacity="" />
                                </svg>
                                <div className='font-medium ml-4 font-pushpenny text-mid md:text-big'>
                                    Optimized Functionality
                                </div>

                            </div>
                            <div className=' ml-10 lg:ml-10 md:w-urbanMidSubSectionTwo font-normal font-pushpenny w-60 text:smaller lg:text-small'>
                                Payrail Urban helps you automate
                                your subscription bills <br></br> enabling
                                you to have a stress free life.
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center w-urbanMidSubSection h-urbanTopSubText'>

                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 6.73828C7 5.08143 8.34315 3.73828 10 3.73828H14C15.6569 3.73828 17 5.08143 17 6.73828V11.9883H21C21.4142 11.9883 21.75 12.3241 21.75 12.7383C21.75 13.1525 21.4142 13.4883 21 13.4883H17V18.7383C17 20.3951 15.6569 21.7383 14 21.7383H10C8.34315 21.7383 7 20.3951 7 18.7383V13.4883H3C2.58579 13.4883 2.25 13.1525 2.25 12.7383C2.25 12.3241 2.58579 11.9883 3 11.9883H7V6.73828Z" fill="#89163B" fill-opacity="" />
                                </svg>
                                <div className='font-medium ml-4 font-pushpenny text-mid lg:text-big'>
                                    Personalized Notifications
                                </div>

                            </div>
                            <div className=' ml-10 lg:ml-10 lg:w-urbanMidSubSectionTwo font-normal font-pushpenny w-60 text:smaller lg:text-small'>
                                Have access to financial services whether or not
                                you are connected to the internet data.
                                Buy airtime, pay bills, request for loans,
                                make transfers all with a code.
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center w-urbanMidSubSection h-urbanTopSubText'>

                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 6.73828C7 5.08143 8.34315 3.73828 10 3.73828H14C15.6569 3.73828 17 5.08143 17 6.73828V11.9883H21C21.4142 11.9883 21.75 12.3241 21.75 12.7383C21.75 13.1525 21.4142 13.4883 21 13.4883H17V18.7383C17 20.3951 15.6569 21.7383 14 21.7383H10C8.34315 21.7383 7 20.3951 7 18.7383V13.4883H3C2.58579 13.4883 2.25 13.1525 2.25 12.7383C2.25 12.3241 2.58579 11.9883 3 11.9883H7V6.73828Z" fill="#89163B" fill-opacity="" />
                                </svg>
                                <div className='font-medium ml-4 font-pushpenny text-mid lg:text-big'>
                                    Contactless transactions
                                </div>

                            </div>
                            <div className=' ml-10 lg:ml-10 lg:w-urbanMidSubSectionTwo font-normal font-pushpenny w-60 text:smaller lg:text-small'>
                                Pay. Get paid.
                                Gift loved ones. Share. Join
                                over 1 million people who use
                                the Payrail Business app.
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center w-urbanMidSubSection h-urbanTopSubText'>

                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 6.73828C7 5.08143 8.34315 3.73828 10 3.73828H14C15.6569 3.73828 17 5.08143 17 6.73828V11.9883H21C21.4142 11.9883 21.75 12.3241 21.75 12.7383C21.75 13.1525 21.4142 13.4883 21 13.4883H17V18.7383C17 20.3951 15.6569 21.7383 14 21.7383H10C8.34315 21.7383 7 20.3951 7 18.7383V13.4883H3C2.58579 13.4883 2.25 13.1525 2.25 12.7383C2.25 12.3241 2.58579 11.9883 3 11.9883H7V6.73828Z" fill="#89163B" fill-opacity="" />
                                </svg>
                                <div className='font-medium ml-4 font-pushpenny text-mid lg:text-big'>
                                    Split bill payment
                                </div>

                            </div>
                            <div className=' ml-10 lg:ml-10 lg:w-urbanMidSubSectionTwo font-normal font-pushpenny w-60 text:smaller lg:text-small'>
                                No more disputes over the bill.
                                You can now know who pays next because all
                                expenses are backed up and synced across the group so each
                                member can monitor them.
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center  w-urbanMidSubSection h-urbanTopSubText'>

                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 6.73828C7 5.08143 8.34315 3.73828 10 3.73828H14C15.6569 3.73828 17 5.08143 17 6.73828V11.9883H21C21.4142 11.9883 21.75 12.3241 21.75 12.7383C21.75 13.1525 21.4142 13.4883 21 13.4883H17V18.7383C17 20.3951 15.6569 21.7383 14 21.7383H10C8.34315 21.7383 7 20.3951 7 18.7383V13.4883H3C2.58579 13.4883 2.25 13.1525 2.25 12.7383C2.25 12.3241 2.58579 11.9883 3 11.9883H7V6.73828Z" fill="#89163B" fill-opacity="" />
                                </svg>
                                <div className='font-medium ml-4 font-pushpenny text-mid lg:text-big'>
                                    USSD/offline banking
                                </div>

                            </div>
                            <div className=' ml-10 lg:ml-10 lg:w-urbanMidSubSectionTwo font-normal font-pushpenny w-60 text:smaller lg:text-small'>
                                Have access to financial services whether or not
                                you are connected to the internet data.
                                Buy airtime, pay bills, request for loans,
                                make transfers all with a code.

                            </div>
                        </div>
                    </div>

                    <img className='mt-10 lg:mt-0 lg:ml-4 xl:ml-20' src='/images/urban-page/urban-collage.png'></img>
                </div>

            </div>

            <div className='lg:hidden flex flex-col border mt-10 rounded-third px-2 py-4 w-nineFifth m-auto bg-businessCtaBox border border-businessCtaBox '>
            <div className="flex flex-col ">
                    <div className='font-medium w-urbanCta h-urbanCta  font-pushpenny text-big leading-urbanCta'>
                        Sign up to enjoy
                        stress free banking
                    </div>
                    <div className='pt-6 font-normal text-small leading-urbanCtaDesc'>
                        We are bringing in a solution that features ease,
                        convenience, and security from fraud, businesses can
                        jump on this train and improve their chances of
                        success.

                    </div>
                </div>

                <div className="">
                    <button className="mt-10 h-10 w-32 justify-center items-center flex rounded-second bg-agencyButton text-smaller font-pushpenny text-businessCtaButton">
                        Start here
                        <img src="/images/business-page/business-button-arrow.png"></img>
                    </button>
                </div>
            </div>

            <div className="hidden lg:flex flex items-center mt-20 m-auto z-10 px-14 justify-between h-businessHighlight w-urbanMidSection rounded-third bg-businessCtaBox border border-businessCtaBox">
                <div className="flex flex-col h-businessMidSectionSubTextThree w-businessCta">
                    <div className='font-medium w-urbanCta h-urbanCta  font-pushpenny text-big leading-urbanCta'>
                        Sign up to enjoy
                        stress free banking
                    </div>
                    <div className='pt-6 font-normal text-urbanMid leading-urbanCtaDesc w-businessCta h-urbanCtaDesc'>
                        We are bringing in a solution that features ease,
                        convenience, and security from fraud, businesses can
                        jump on this train and improve their chances of
                        success.

                    </div>
                </div>
                <div className="w-2/5 flex justify-center">
                    <button className="mt-10 h-10 w-32 justify-center items-center flex rounded-second bg-agencyButton text-smaller font-pushpenny text-businessCtaButton">
                        Start here
                        <img src="/images/business-page/business-button-arrow.png"></img>
                    </button>
                </div>
            </div>
        </div>
    )
}