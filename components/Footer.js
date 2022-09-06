import Link from "next/link";

export default function Footer({ menu }) {
  const menuShow = menu ? "hidden" : "flex";
  //${menuShow}
  return (
    <div className="relative">



      <div className={`flex justify-between xl:h-footer-height px-2 lg:px-20 xl:px-0 xl:pl-46 xl:pr-28 pt-12 overflow-hidden ${menuShow}`}>
        <div className='xl:ml-20 xl:w-footerDetails xl:h-footerDetails hidden xl:flex flex-col'>
          <Link href="/">
            <a onClick={(e) => { menuSetter("home") }}>
              <img src='/images/footer-section/footer-logo.svg'></img>
            </a>
          </Link>
          <div className='flex xl:mt-10 justify-between'>
            <button><img className='socials' src='/images/footer-section/twitter-icon.svg'></img></button>
            <button><img className='socials' src='/images/footer-section/whatsapp-icon.svg'></img></button>
            <img className='socials' src='/images/footer-section/facebook-icon.svg'></img>
            <img className='socials' src='/images/footer-section/linkedin-icon.svg'></img>
            <img className='socials' src='/images/footer-section/youtube-icon.svg'></img>
          </div>
        </div>

        <div className=' xl:w-footerDetails xl:h-footerDetails flex flex-col'>

          <div className="font-extrabold font-pushpenny xl:text-mid leading-indexMidSection">
            Headquarters
          </div>
          <img className='w-32 lg:w-48 xl:mt-10' src='/images/footer-section/hq-address.svg'></img>
        </div>
        <div className='xl:w-footerDetails xl:h-footerDetails flex flex-col'>

          <div className="lg:font-extrabold font-pushpenny xl:text-mid leading-indexMidSection">
            General Inquiries
          </div>
          <img className=' xl:mt-10' src='/images/footer-section/email-cta.svg'></img>
          <div className=' flex mt-2'>
            <img className='xl:-ml-1' src='/images/footer-section/message-icon.svg'></img>    
            <div className="font-pushpenny text-footerBlue font-normal text-small text-white leading-agencyMid">info@angalafintech.com</div>
          </div>
          <div className='flex mt-2'>
            <img className='xl:-ml-1' src='/images/footer-section/calling-icon.svg'></img>
            <div className="font-pushpenny text-footerBlue font-normal text-small text-white leading-agencyMid">+234 7034145958</div>
          </div>
        </div>
        <div className='hidden w-fit h-footerDetails lg:flex flex-col'>
          <div className="font-extrabold font-pushpenny text-small xl:text-mid leading-indexMidSection">
            Sign up for the newsletter
          </div>
          <form className="flex mt-10">

            <input placeholder="name@company.com" className="px-6 font-normal bg-footerInput font-pushpenny text-smaller xl:w-midTextOne xl:h-urbanTopSubText" type="text" name="name" />
            <input type="submit" value="Subscribe" className="ml-6 font-pushpenny font-normal text-smaller text-white bg-footerSubmit xl:w-footerSubmit xl:h-urbanTopSubText" />

          </form>
        </div>
      </div>

      <div className="mt-2 py-4 lg:hidden">
      <div className=" px-10 h-20 bg-footerInput flex justify-between items-center">
        <div className="font-pushpenny text-small font-normal">© 2022 Arila Business Management.</div>
      </div>
      </div>
      <div className="hidden lg:flex px-10 h-20 bg-footerInput flex justify-between items-center">
        <div className="font-pushpenny text-small font-normal">© 2022 Arila Business Management.</div>
      </div>
    </div>
  )
}