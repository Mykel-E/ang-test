import Link from 'next/link'

export default function Agency({ menu }) {
    const menuShow = menu ? "hidden" : "flex";
    //${menuShow}


    return (
        <div className={`${menuShow} flex-col items-center`}>
            <div className="w-full h-28 lg:h-36 bg-black"></div>
            <div className="xl:h-agencyTop mt-2 flex flex-col w-full pl-4 lg:pl-20">
                <div className="h-3/6 flex  justify-between xl:pl-10 ">
                    <div className="flex  flex-col xl:justify-between mt-2 lg:mt-12 xl:h-4/5">
                        <img className='mt-20 lg:mt-0' src="/images/agency-page/agency-banking.png"></img>
                        <img className='hidden lg:flex mt-6 xl:mt-0' src="/images/agency-page/reinventing.png"></img>
                        <img className='hidden lg:flex mt-6 xl:mt-0' src="/images/agency-page/we-are.png"></img>
                    </div>
                    <div className="">
                        <img className=" ml-10 lg:ml-20 xl:ml-0 lg:-mt-10" src="/images/agency-page/agency-phone-and-card.png"></img>
                    </div>
                </div>
                <img className=' lg:hidden mt-6 -ml-2' src="/images/agency-page/reinventing.png"></img>
                <img className='lg:hidden mt-6 -ml-2' src="/images/agency-page/we-are.png"></img>

                <div className='lg:hidden h-fit bg-agencyGray rounded-third flex-col -ml-2 mr-2 py-4 mt-6 pl-2 '>
                    <div className='font-pushpenny font-black text-urbanBig xl:w-businessMidSectionImage xl:h-agencyMidHeading'>
                        Your branchless Next-door Banking
                    </div>
                    <div className=" h-fit w-full">
                        <img className="m-auto" src="/images/agency-page/agency-midsection-image.png"></img>
                    </div>

                    <div className='font-pushpenny  font-normal text-urbanMid leading-agencyMid mt-16'>
                        Avoid transaction delays and failures,
                        increase customer relationships;
                        Increase profit per transaction.
                    </div>
                    <div className=' mt-4 w-urbanTopText font-extrabold text-small text-agencyOrange'>
                        More Transactions. More Commissions
                    </div>
                    <div className='mt-4 font-normal text-mid leading-agencyMid font-pushpenny '>
                        As a Payrail Agent, you have the power and
                        control to make as much money as you can by
                        providing financial services in your community
                        easily within the app, and also get your Mastercard
                        debit card almost instantly.
                    </div>
                </div>

                <div className="hidden lg:flex h-3/6 xl:px-10 flex justify-start">
                    <div className=" w-5/6 xl:w-ninth relative bg-agencyGray rounded-third xl:h-full xl:justify-between flex pb-10 pl-10">
                        <div className=" flex flex-col mt-4 justify-between h-4/5">
                            <div className='font-pushpenny font-black text-urbanBig xl:w-businessMidSectionImage xl:h-agencyMidHeading'>
                                Your branchless Next-door Banking
                            </div>

                            <div className='font-pushpenny font-normal text-urbanMid leading-agencyMid mt-4 w-businessMidSectionText h-urbanCtaDesc'>
                                Avoid transaction delays and failures, increase customer relationships; Increase profit per transaction.
                            </div>
                            <div className=' mt-4 w-urbanTopText font-extrabold text-small text-agencyOrange'>
                                More Transactions. More Commissions
                            </div>
                            <div className='mt-4 font-normal text-mid leading-agencyMid font-pushpenny w-businessMidSectionText h-midIndexThree'>
                                As a Payrail Agent, you have the power and
                                control to make as much money as you can by
                                providing financial services in your community
                                easily within the app, and also get your Mastercard
                                debit card almost instantly.
                            </div>
                        </div>
                        <div className="h-agencyMidPic w-agencyMidPic">
                            <img className="mt-20 ml-10" src="/images/agency-page/agency-midsection-image.png"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border lg:hidden flex flex-col items-center py-4 w-full mt-6 bg-black'>
                <div className="flex justify-between px-1">
                    <img src="/images/agency-page/agency-middle-top.png"></img>
                </div>

                <div className="flex justify-between px-2 mt-10">
                    <div className="flex flex-col mt-2">
                        <img src="/images/agency-page/agency-middle-heading.png"></img>
                        <img className="mt-4" src="/images/agency-page/agency-middle-listpoints.png"></img>
                    </div>
                    <div>
                        <img src="images/agency-page/agency-middle-phone.png"></img>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex flex flex-col items-center pt-20 bg-black h-agencyBottom w-full mt-40">
                <div className="flex justify-between">
                    <img src="/images/agency-page/agency-middle-top.png"></img>
                </div>

                <div className="flex justify-between mt-60">
                    <div className="flex flex-col mt-20">
                        <img src="/images/agency-page/agency-middle-heading.png"></img>
                        <img className="mt-20" src="/images/agency-page/agency-middle-listpoints.png"></img>
                    </div>
                    <div>
                        <img src="images/agency-page/agency-middle-phone.png"></img>
                    </div>
                </div>

                <div className="w-ninth h-72 bg-agencyMidGray flex flex-col items-center rounded-third">
                    <img className="mt-10" src="/images/agency-page/agency-footer-heading.png"></img>
                    <img className="mt-6" src="/images/agency-page/agency-footer-cta.png"></img>
                    <button className="mt-10 h-10 w-32 rounded-second bg-agencyButton text-smaller font-pushpenny text-white">Get Started</button>
                </div>
            </div>

        </div>
    )
}