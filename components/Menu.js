import { useEffect, useState } from "react"
import Link from "next/link";
import {useRouter} from "next/router"

export default function Menu({ isMenu, menuSetter }) {
    const [currentPage, setCurentPage] = useState()
    const showMenu = isMenu ? "flex" : "hidden";
    const router = useRouter()
    console.log(router.pathname)

    useEffect(() => {
        setCurentPage(router.pathname)
    }, [router.pathname])

    return (
        <div className={`absolute z-30 bg-black items-center flex-col h-screen w-full pt-6 md:overflow-hidden ${showMenu}`}>
            <nav className="z-50 h-content flex justify-end px-2 md:px-14 w-full">                
                <svg onClick={menuSetter} className=" animate-menuTransitionTwo z-50 cursor-pointer " width="120" height="57" viewBox="0 0 120 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.55346 36.2562V22.0562H4.13346L9.33346 31.5762L14.5535 22.0562H16.0735V36.2562H14.4335V25.1762L9.97346 33.2962H8.65346L4.19346 25.1762V36.2562H2.55346ZM23.3141 36.5562C22.5541 36.5562 21.8541 36.4229 21.2141 36.1562C20.5874 35.8896 20.0408 35.5162 19.5741 35.0362C19.1074 34.5429 18.7474 33.9696 18.4941 33.3162C18.2407 32.6496 18.1141 31.9162 18.1141 31.1162C18.1141 30.3296 18.2341 29.6096 18.4741 28.9562C18.7274 28.2896 19.0741 27.7096 19.5141 27.2162C19.9674 26.7229 20.4941 26.3429 21.0941 26.0762C21.6941 25.7962 22.3474 25.6562 23.0541 25.6562C23.7341 25.6562 24.3608 25.7829 24.9341 26.0362C25.5208 26.2896 26.0274 26.6429 26.4541 27.0962C26.8808 27.5496 27.2074 28.0896 27.4341 28.7162C27.6741 29.3429 27.7941 30.0229 27.7941 30.7562V31.4162H19.7741C19.8274 32.1629 20.0008 32.8162 20.2941 33.3762C20.6008 33.9362 21.0074 34.3696 21.5141 34.6762C22.0208 34.9829 22.6074 35.1362 23.2741 35.1362C23.9274 35.1362 24.4941 35.0029 24.9741 34.7362C25.4674 34.4562 25.8874 34.0496 26.2341 33.5162L27.5941 34.1362C27.3274 34.6429 26.9808 35.0762 26.5541 35.4362C26.1274 35.7962 25.6341 36.0696 25.0741 36.2562C24.5274 36.4562 23.9408 36.5562 23.3141 36.5562ZM23.0541 27.0162C22.5074 27.0162 22.0074 27.1496 21.5541 27.4162C21.1141 27.6829 20.7408 28.0562 20.4341 28.5362C20.1408 29.0029 19.9474 29.5496 19.8541 30.1762H26.1141C26.0608 29.5496 25.8941 29.0029 25.6141 28.5362C25.3341 28.0562 24.9741 27.6829 24.5341 27.4162C24.0941 27.1496 23.6008 27.0162 23.0541 27.0162ZM29.6794 36.2562V25.9362H31.1194L31.1994 27.5762C31.5061 26.9896 31.9461 26.5229 32.5194 26.1762C33.1061 25.8162 33.7794 25.6362 34.5394 25.6362C35.3261 25.6362 36.0127 25.8229 36.5994 26.1962C37.1861 26.5696 37.6327 27.1029 37.9394 27.7962C38.2594 28.4762 38.4194 29.2829 38.4194 30.2162V36.2562H36.8194V30.3162C36.8194 29.2896 36.5927 28.4962 36.1394 27.9362C35.6994 27.3762 35.0661 27.0962 34.2394 27.0962C33.6661 27.0962 33.1527 27.2296 32.6994 27.4962C32.2594 27.7496 31.9127 28.1096 31.6594 28.5762C31.4061 29.0296 31.2794 29.5496 31.2794 30.1362V36.2562H29.6794ZM44.9442 36.5562C44.0642 36.5562 43.3042 36.3629 42.6642 35.9762C42.0242 35.5896 41.5309 35.0429 41.1842 34.3362C40.8376 33.6162 40.6642 32.7629 40.6642 31.7762V25.9362H42.2642V31.7962C42.2642 32.4762 42.3709 33.0629 42.5842 33.5562C42.8109 34.0496 43.1242 34.4296 43.5242 34.6962C43.9376 34.9629 44.4242 35.0962 44.9842 35.0962C45.5442 35.0962 46.0242 34.9629 46.4242 34.6962C46.8376 34.4296 47.1509 34.0496 47.3642 33.5562C47.5909 33.0629 47.7042 32.4762 47.7042 31.7962V25.9362H49.3042V31.7762C49.3042 32.7362 49.1242 33.5762 48.7642 34.2962C48.4042 35.0162 47.8976 35.5762 47.2442 35.9762C46.5909 36.3629 45.8242 36.5562 44.9442 36.5562Z" fill="white" />
                    <circle cx="91.9205" cy="28.7562" r="27.5797" stroke="white" />
                    <circle cx="91.9202" cy="28.7562" r="20.8201" fill="#89163B" />
                    <path d="M85.5303 21.4697C85.2374 21.1768 84.7626 21.1768 84.4697 21.4697C84.1768 21.7626 84.1768 22.2374 84.4697 22.5303L85.5303 21.4697ZM98.4696 36.5302C98.7624 36.8231 99.2373 36.8231 99.5302 36.5302C99.8231 36.2373 99.8231 35.7624 99.5302 35.4696L98.4696 36.5302ZM84.4697 22.5303L98.4696 36.5302L99.5302 35.4696L85.5303 21.4697L84.4697 22.5303Z" fill="#F3F3F3" />
                    <path d="M84.4697 35.4697C84.1768 35.7626 84.1768 36.2374 84.4697 36.5303C84.7626 36.8232 85.2374 36.8232 85.5303 36.5303L84.4697 35.4697ZM99.5302 22.5304C99.8231 22.2376 99.8231 21.7627 99.5302 21.4698C99.2373 21.1769 98.7624 21.1769 98.4696 21.4698L99.5302 22.5304ZM85.5303 36.5303L99.5302 22.5304L98.4696 21.4698L84.4697 35.4697L85.5303 36.5303Z" fill="#F3F3F3" />
                </svg>
            </nav>
            <div className=" w-full xl:flex sm:flex-col xl:flex-row h-max mt-20 xl:mt-40 xl:items-start xl:justify-between px-10 ">
                <div className="xl:w-2/5 flex justify-between flex-col md:flex-row xl:flex xl:flex-col  -mt-10 md:mt-0 h-60 md:h-20 xl:h-96 animate-menuTransitionFive">
                    <Link href={"/"}>
                    <a style={{color:`${currentPage === "/" ? "rgba(249, 180, 11, 1)" : "white"}`}} onClick={menuSetter} className={` underline font-pushpennyBook text-5xl md:text-big xl:text-6xl menu-heading`}>Home</a>
                    </Link>
                    <Link href="/agency">
                    <a style={{color:`${currentPage === "/agency"? "rgba(249, 180, 11, 1)" : "white"}`}} onClick={menuSetter} className={`underline font-pushpennyBook text-5xl md:text-big xl:text-6xl menu-heading`}>Agency</a>
                    </Link>
                    <Link href="/business">
                    <a style={{color:`${currentPage === "/business"? "rgba(249, 180, 11, 1)" : "white"}`}} onClick={menuSetter} className={`underline font-pushpennyBook text-5xl md:text-big xl:text-6xl menu-heading`}>Business</a>
                    </Link>
                    <Link href={"/urban"}>
                    <a style={{color:`${currentPage === "/urban"? "rgba(249, 180, 11, 1)" : "white"}`}} onClick={menuSetter} className={`underline font-pushpennyBook text-5xl md:text-big xl:text-6xl menu-heading `}>Urban</a>
                    </Link>
                </div>
                <div className="mt-10 md:mt-0 xl:w-3/5 h-max flex justify-between xl:justify-end animate-menuTransitionThree">
                    <div className="w-2/5  font-pushpennyBook h-60 flex self-end text-white flex-col">
                        <h3 className="text-mid font-pushpennyBook">General inquiries</h3>
                        <h3 className="text-small font-pushpennyBook mt-10">If it's easier, email us?</h3>
                        <div className="flex w-60 justify-between mt-2 items-center">
                            <img className="h-4 w-4 cursor-pointer" src="/images/menu/message.png"></img>
                            <h3 className="text-small font-pushpennyBook">info@angalafintech.com</h3>                          
                        </div>
                        <div className="flex w-60 justify-between mt-2 items-center">
                            <img className="h-4 w-4 cursor-pointer" src="/images/menu/calling.png"></img>
                            <h3 className="text-small font-pushpennyBook">+234 7034145958</h3>                          
                        </div>
                        
                    </div>
                    <img className="hidden md:flex" src="/images/menu/menu-open-image.png"></img>
                </div>
            </div>

            <div className="animate-menuTransition mt-10 h-40 flex flex-col px-10 w-full animate-menuTransitionFour">
                <div className="w-52 cursor-pointer h-10">
                <img className="w-full h-full" src="/images/menu/Payrail-dot-co.png"></img>
                </div>
                <div className="flex justify-between w-64 mt-2">
                    <img className="cursor-pointer" src="/images/footer-section/twitter-icon.svg"></img>
                    <img className="cursor-pointer" src="/images/footer-section/whatsapp-icon.svg"></img>
                    <img className="cursor-pointer" src="/images/footer-section/facebook-icon.svg"></img>
                    <img className="cursor-pointer" src="/images/footer-section/linkedin-icon.svg"></img>
                    <img className="cursor-pointer" src="/images/footer-section/youtube-icon.svg"></img>
                </div>
            </div>
        </div>
    )
}