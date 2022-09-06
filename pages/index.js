import Head from 'next/head'
import Link from 'next/link'
import Cell from '../components/Cell';

export default function Home({ menu }) {
  const menuShow = menu ? "hidden" : "initial";
  //${menuShow}
  let cells = []

  for(let i=0; i<380; i++) {
    cells.push(<div className='cell'></div>)
  }

 
  return (
    <div className={`${menuShow}`}>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Angala Fintech" />
        <meta name="description" content="Angala fintech website" />
        <link rel="apple-touch-icon" href="/images/logo.svg" />
        <title>Angala Fintech</title>
      </Head>


      <section className={`${menuShow} h-96 lg:h-120 flex lg:px-10 lg:py-8 bg-cover bg-center bg-hero-pattern overflow-hidden`}>

        <div className="flex justify-between h-ninth mt-24 w-full">
          <div className="hidden lg:flex flex-col items-start w-third">
            <div id='holder' className="
                    w-full h-fourth 
                    rounded-lg
                    border border-white relative
                      "
            >
              {cells}
              <div className='content absolute'>
              <div className=' follower rounded-lg bg-cover bg-center bg-hero-pattern-pic-1 '>
              </div>
              </div>
            </div>
            <img className="mt-3.5 ml-0" src="/images/hero-section-left/divider.svg"></img>

            <img className="mt-3.5 -ml-3" src="/images/hero-section-left/comp.svg"></img>
          </div>
          <div className=" block justify-center w-third">

            <div className='mt-14 md:mt-2 text-big lg:text-bigger lg:mt-40 ml-20 md:ml-72 lg:ml-20 text-white font-pushpenny font-bold xl:text-hero-highlight md:text-urbanBig lg:leading-urbanHighlight '>Bridging</div>
            <div className='text-white text-big ml-10 md:ml-60 lg:ml-5 xl:ml-10 font-pushpenny font-bold xl:text-hero-highlight lg:text-bigger md:text-urbanBig lg:leading-urbanHighlight '>Financial</div>
            <div className='text-white text-big ml-10 md:ml-72 lg:ml-5 xl:ml-10 font-pushpenny font-bold xl:text-hero-highlight lg:text-bigger md:text-urbanBig lg:leading-urbanHighlight '>Gaps</div>
          </div>
          <div className="hidden lg:flex flex-col justify-end w-third">
          <div id='holder' className="
                    w-full h-fourth 
                    rounded-lg
                    border border-white relative
                      "
            >
              {cells}
              <div className='content absolute'>
              <div className=' follower rounded-lg bg-cover bg-center bg-hero-pattern-pic-2 '>
              </div>
              </div>
            </div>

            <img className="-ml-6" src="/images/hero-section-right/by-bridging.svg"></img>
          </div>
        </div>

      </section>


      <div className={` flex flex-col items-center lg:h-midsection py-14 overflow-hidden overflow-hidden ${menuShow}`}>


        <div className='font-bold flex text-center text-big lg:text-urbanBig font-pushpenny lg:text-urbanHighlight lg:leading-indexMid'>
          We integrate plans <br></br> for small business owners.
        </div>
        <img className='mt-10 ' src='/images/index-page/mid-section-divider.svg'></img>





        <div id='mid-section-image-holder' className='mt-20 lg:min-w-5/6 lg:flex-row items-center flex-col h-fit flex px-4'>

          <div className=" mid-section-first w-fit items-center inline-flex">

            <div id='child-one' className=' z-20 bg-white h-midh w-midw bg-cover bg-center bg-mid-section-image-one'>
              <div className='hidden md:absolute lg:relative md:flex'>
                <img id='pos-hovered' src='/images/mid-section/index-pos-hovered.png'></img>
              </div>
              <div className='hidden lg:flex'>
                <img id='agency-banking' src='/images/mid-section/agency-banking.svg'></img>
              </div>
              <div className='ml-6 mt-52 self-center font-extrabold font-pushpenny text-mid font-indexMidSection'>
                Agency Banking
              </div>
              <div className='flex md:hidden justify-center w-full'>
                <Link href="/agency">
                  <a >
                    <img className='-ml-4 cursor-pointer' src='/images/mid-section/learn-more.svg'></img>
                  </a>
                </Link>
              </div>
            </div>

            <div id='child-two' className='hidden z-10 md:flex flex-col'>
              <div className='mt-32 w-midIndexOne font-normal text-small leading-indexSmall'>
                Payrail Agency Banking enables <br></br> business owners
                to generate <br></br> more revenues by bringing<br></br> banking services
                closer to their <br></br> consumers. Our low transaction <br></br> cost and
                a high-network <br></br> infrastructure is the simple <br></br> solution all
                businesses need.
              </div>
              <Link href="/agency">
                <a>
                  <img className='-ml-4 cursor-pointer' src='/images/mid-section/learn-more.svg'></img>
                </a>
              </Link>
            </div>

          </div>

          <div id='mid-section-image-two' className="mt-10 lg:mt-0 mid-section-first w-fit items-center inline-flex">

            <div id='child-one' className='z-20 bg-white h-midh w-midw bg-cover bg-center bg-mid-section-image-two'>
              <div className='hidden md:absolute lg:relative md:flex'>
                <img id='girl-hovered' src='/images/index-page/girl-hovered.png'></img>
              </div>
              <div className='hidden lg:flex'>
                <img id='simplifying' src='/images/mid-section/image-two-hovered-text.svg'></img>
              </div>

              <div className='ml-6 mt-40 lg:mt-52 self-center font-extrabold font-pushpenny text-mid w-midTextOne h-businessMidSectionSubText font-indexMidSection'>
                Simplifying modern commerce
              </div>
              <div className='flex mt-4 md:hidden justify-center w-full'>
                <Link href="/business">
                  <a >
                    <img className='-ml-4 cursor-pointer' src='/images/mid-section/learn-more.svg'></img>
                  </a>
                </Link>
              </div>
            </div>

            <div id='child-two' className='hidden z-10 md:flex flex-col'>
              <div className='mt-60 w-midIndexTwo font-normal text-indexsmaller leading-urbanCtaDesc'>
                Payrail Business is helping solopreneurs <br></br>
                and small businesses grow into an all- <br></br>
                inclusive banking service that works.
              </div>
              <Link href="/business">
                <a>
                  <img className='-ml-4 cursor-pointer' src='/images/mid-section/learn-more.svg'></img>
                </a>
              </Link>
            </div>

          </div>

          <div id='mid-section-image-three' className="mt-10 lg:mt-0 mid-section-first w-fit items-center inline-flex">

            <div id='child-one' className='z-20 bg-white h-midh w-midw bg-cover bg-center bg-mid-section-image-three'>

              <div className='hidden md:absolute lg:relative md:flex'>
                <img id='phone-hovered' src='/images/index-page/phone-hovered.png'></img>

              </div>

              <div className='hidden lg:flex'>
                <img id='accelerating' src='/images/mid-section/accelerating.svg'></img>
              </div>

              <div className='ml-6 mt-40 lg:mt-52 self-center font-extrabold font-pushpenny text-mid w-midTextOne h-businessMidSectionSubText font-indexMidSection'>

                Accelerating financial ease-on the go
              </div>

              <div className='flex mt-4 md:hidden justify-center w-full'>
                <Link href="/urban">
                  <a >
                    <img className='-ml-4 cursor-pointer' src='/images/mid-section/learn-more.svg'></img>
                  </a>
                </Link>
              </div>
            </div>

            <div id='child-two' className=' hidden z-10 md:flex flex-col'>
              <div className='mt-32 w-midIndexThree font-normal text-smaller leading-urbanCtaDesc'>
                With Payrail Urban, maintenance fees are <br></br>
                no business of yours. We would house <br></br>
                your account and ensure that your data <br></br>
                and funds are well protected at all times <br></br>
                at no cost whatsoever.
                <br></br>
                <br></br>
                No Minimum balance. No Transaction <br></br>
                fees. No Account opening fee

              </div>
              <Link href="/urban">
                <a>
                  <img className='-ml-4 cursor-pointer' src='/images/mid-section/learn-more.svg'></img>
                </a>
              </Link>
            </div>

          </div>

        </div>
      </div>

      <div className={`flex flex-col xl:h-baseh lg:w-basew bg-cover bg-center bg-base-section-background lg:px-48 lg:py-40 py-20 ${menuShow}`}>
        <div className='flex xl:flex-row flex-col justify-between'>
          <div className=' h-base-man-sitting w-ninth m-auto xl:m-initial xl:w-base-man-sitting rounded-third bg-center bg-cover bg-man-sitting'></div>

          <div className='flex flex-col ml-4 lg:ml-20 lg:mt-20 xl:mt-0'>
            <div className='text-white font-pushpenny font-bold text-big lg:text-urbanBig leading-indexMid'>
              Get a Loan
            </div>
            <div className='font-normal lg:w-base-man-sitting mt-10 text-white lg:text-urbanMid lg:leading-agencyMid font-pushpenny'>
              An immediate solution to emergencies with our instant
              short-term loan.
              <br></br>
              <br></br>
              Zero paperwork, no embarrassment, just little interest.
              <br></br>
              <br></br>
              Payrail Overdrafts are short-term loans you can request
              for anytime as long as you use your Payrail account regularly.
            </div>
            <div className='font-medium leading-indexMid mt-6 text-big font-pushpenny text-indexOrange'>How overdrafts work</div>
            <div className='flex mt-6'>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 6.73828C7 5.08143 8.34315 3.73828 10 3.73828H14C15.6569 3.73828 17 5.08143 17 6.73828V11.9883H21C21.4142 11.9883 21.75 12.3241 21.75 12.7383C21.75 13.1525 21.4142 13.4883 21 13.4883H17V18.7383C17 20.3951 15.6569 21.7383 14 21.7383H10C8.34315 21.7383 7 20.3951 7 18.7383V13.4883H3C2.58579 13.4883 2.25 13.1525 2.25 12.7383C2.25 12.3241 2.58579 11.9883 3 11.9883H7V6.73828Z" fill="#ffffff" />
              </svg>

              <div className='font-pushpenny ml-4 text-white w-indexDesc font-normal text-urbanMid leading-agencyMid'>
                Sign up on Payrail and update your
                account with your BVN (Bank Verification Number)
                and a valid ID card.
              </div>

            </div>
            <div className='flex mt-4 '>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 6.73828C7 5.08143 8.34315 3.73828 10 3.73828H14C15.6569 3.73828 17 5.08143 17 6.73828V11.9883H21C21.4142 11.9883 21.75 12.3241 21.75 12.7383C21.75 13.1525 21.4142 13.4883 21 13.4883H17V18.7383C17 20.3951 15.6569 21.7383 14 21.7383H10C8.34315 21.7383 7 20.3951 7 18.7383V13.4883H3C2.58579 13.4883 2.25 13.1525 2.25 12.7383C2.25 12.3241 2.58579 11.9883 3 11.9883H7V6.73828Z" fill="#ffffff" />
              </svg>

              <div className='font-pushpenny ml-4 text-white w-indexDesc font-normal text-urbanMid leading-agencyMid'>
                Use your account regularly - buy airtime, pay bills, make transfers etc.
              </div>

            </div>
            <div className='flex mt-4'>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 6.73828C7 5.08143 8.34315 3.73828 10 3.73828H14C15.6569 3.73828 17 5.08143 17 6.73828V11.9883H21C21.4142 11.9883 21.75 12.3241 21.75 12.7383C21.75 13.1525 21.4142 13.4883 21 13.4883H17V18.7383C17 20.3951 15.6569 21.7383 14 21.7383H10C8.34315 21.7383 7 20.3951 7 18.7383V13.4883H3C2.58579 13.4883 2.25 13.1525 2.25 12.7383C2.25 12.3241 2.58579 11.9883 3 11.9883H7V6.73828Z" fill="#ffffff" />
              </svg>

              <div className='font-pushpenny ml-4 text-white w-indexDesc font-normal text-urbanMid leading-agencyMid'>
                In no time, we’ll offer you your first overdraft!
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row border border-white rounded-second px-20 py-12 mt-20 justify-between'>
          <div className=' flex flex-col'>

            <div className='xl:hidden'>
              <img className='m-auto mt-4 ' src='/images/index-page/smiling-woman.png'></img>
            </div>

            <div className='text-white font-pushpenny mt-10 xl:mt-0 font-bold text-urbanBig leading-indexMid'>
              Lending
            </div>
            <div className='font-normal mt-2 text-white font-pushpenny text-urbanMid leading-agencyMid'>
              With Angala’s lending platform, MSMEs can access loans <br></br>
              without limitations or barriers. With a few easy steps,
              and a <br></br> matter of minutes, loans are approved and disbursed
              to <br></br> qualified customers- for business expansion purposes,
              meeting <br></br> day-to-day business requirements, enhancing cash
              flow, <br></br> purchasing raw materials, buying or upgrading
              equipment/ <br></br>machinery, hiring, and training staff, etc.

            </div>


            <div className='font-pushpenny lg:mt-0 mt-4 font-medium text-indexOrange text-urbanMid leading-agencyMid'>
              Get in touch with us today
            </div>
          </div>
          <div className=' hidden xl:block'>
            <img className='ml-10 mt-8' src='/images/index-page/smiling-woman.png'></img>
          </div>
        </div>

        <div className='flex xl:flex-row pl-4 flex-col mt-20 lg:mt-40 justify-between'>

          <div className='xl:hidden md:m-auto md:w-ninth'>
            <img className='ml-10 md:ml-0 md:w-full' src='/images/index-page/people.png'></img>
          </div>


          <div className=' flex lg:mt-10 xl:mt-0 items-center lg:items-start flex-col'>
            <div className='text-white font-pushpenny font-bold text-big lg:text-urbanBig leading-indexMid'>
              Angala Insurtech
            </div>

            <div className='text-white font-pushpenny font-medium text-urbanMid leading-indexMid'>Reinventing the way You experience insurance</div>

            <div className='font-pushpenny text-white font-normal leading-agencyMid text-urbanMid'>
              We are an emerging micro-insurance company offering digital insurance <br></br>
              solutions to low-income individuals, small, micro, and medium-sized <br></br>
              enterprises operating in the agriculture, trade, healthcare, logistics, ICT, <br></br>
              FMCG, and other critical economic sectors.

            </div>
            <div className="w-2/5 flex">
              <button className="mt-10 h-10 w-32 justify-center items-center flex rounded-second bg-agencyButton text-smaller font-pushpenny text-businessCtaButton">
                Learn more
                <img src="/images/business-page/business-button-arrow.png"></img>
              </button>
            </div>

          </div>
          <div className='hidden xl:block'>
            <img className='ml-10' src='/images/index-page/people.png'></img>
          </div>
        </div>

      </div>

    </div>
  )
}
