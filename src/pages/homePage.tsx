import { source_sans_3, playfair_display } from "@/app/fonts";
import { Header } from "@/components/header";
import Image from "next/image"


export function SectionOne(){
    return (
        <div className="w-full bg-home-banner xsm:bg-cover bg-no-repeat bg-center flex flex-col">
            <Header />
            <div className="mx-auto my-0 xsm:w-1/2 sm:w-1/4 text-center">
                <p className={playfair_display.className + " font-bold justify-between p-4 xsm:text-base sm:text-xl lg:text-2xl xl:text-4xl italic-must tracking-tight"}>We are the</p>
                <p className={source_sans_3.className + " font-semibold justify-between p-4 xsm:text-3xl sm:text-4xl lg:text-5xl xl:text-7xl tracking-tight"}>Digital Litigation Partners</p>
            </div>
            <div className={source_sans_3.className + " mx-auto my-0"}>
                <button className="border-2 border-white hover:opacity-80 text-white font-bold py-3 px-12 rounded-full">
                    LEARN MORE
                </button>
            </div>
            <div className="mx-auto my-0 pt-12 pb-12">
                <Image
                src="/arrow.svg"
                alt="arrow"
                width={36}
                height={36}
                priority
                />
            </div>
        </div>
    )
}

export function SectionTwo(){
    return (
        <div className="w-full bg-home-sec xsm:bg-cover bg-no-repeat bg-center flex flex-col">
  
        </div>
    )
}

export function SectionThree(){
    return (
        <div className="w-full bg-home-rd xsm:bg-cover bg-no-repeat bg-center flex flex-col relative">
            <div className="w-1/2 h-1/2 absolute top-0 left-0 ">
                <Image className=" "
                    src="/dlp-laptop.png"
                    alt="laptop"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{width:'100%',height:'auto'}}
                    // layout="fill"
                    // objectFit="contain"
                    priority
                />
            </div>
            <div className="mx-auto my-0 lg:mb-32 xsm:mb-0 lg:w-3/4 xsm:w-full flex lg:flex-row xsm:flex-col justify-center">
                <div className="lg:w-1/2 xsm:w-3/4 lg:mx-0 lg:my-0 xsm:mx-auto xsm:my-36 lg:mt-0 flex flex-row items-end space-x-3 justify-center">
                    <Image 
                        src="/wordpress-logo.svg"
                        alt="wordpress"
                        width={80}
                        height={80}
                        priority
                    />
                    <Image 
                        src="/react-logo.svg"
                        alt="react"
                        width={80}
                        height={80}
                        priority
                    />
                    <Image 
                        src="/gatsby-logo.svg"
                        alt="gatsby"
                        width={80}
                        height={80}
                        priority
                    />
                </div>
                <div className="lg:w-1/2 xsm:w-3/4 lg:mx-0 lg:my-0 xsm:mx-auto xsm:my-14 lg:mt-52 flex flex-col">
                    <p className={source_sans_3.className + " font-bold italic-must text-6xl lg:text-left xsm:text-center"}>Web <label className={playfair_display.className + " font-blod italic-must text-6xl"}>design</label></p>
                    <p className={source_sans_3.className + " font-bold text-4xl lg:text-left xsm:text-center"}>and development</p>
                    <p className={source_sans_3.className + " font-normal text-md mt-5 lg:text-left xsm:text-center"}>Donec sed eros augue. Aliquam aliquet velit eget massa luctus, quis consectetur ex interdum. Cras nibh enim, vulputate nec turpis ac, tincidunt molestie nibh. Aliquam a cursus felis. Sed vestibulum id quam feugiat efficitur. Etiam rhoncus pretium quam at cursus. Donec ac porttitor neque. In venenatis at lectus non tempus.</p>
                    <div className={source_sans_3.className + " mt-12 lg:text-left xsm:text-center"}>
                        <button className="border-2 border-white hover:opacity-80 text-white font-bold py-3 px-12 rounded-full">
                            LEARN MORE
                        </button>
                    </div>
                </div>
            </div>
            <div className="mx-auto my-0 sm:w-3/4 xsm:w-full flex lg:flex-row xsm:flex-col justify-center">
                <div className="lg:w-1/2 xsm:w-3/4 lg:mx-0 lg:my-4 xsm:mx-auto xsm:my-14 flex flex-col">
                    <p className={source_sans_3.className + " font-bold italic-must text-6xl lg:text-right xsm:text-center"}>Search <label className={playfair_display.className + " font-blod italic-must text-6xl"}>engine</label></p>
                    <p className={source_sans_3.className + " font-bold text-6xl lg:text-right xsm:text-center"}>optimization</p>
                    <p className={source_sans_3.className + " font-normal text-md mt-5 lg:text-right xsm:text-center"}>Donec sed eros augue. Aliquam aliquet velit eget massa luctus, quis consectetur ex interdum. Cras nibh enim, vulputate nec turpis ac, tincidunt molestie nibh. Aliquam a cursus felis. Sed vestibulum id quam feugiat efficitur. Etiam rhoncus pretium quam at cursus. Donec ac porttitor neque. In venenatis at lectus non tempus.</p>
                    <div className={source_sans_3.className + " mt-12 lg:text-right xsm:text-center"}>
                        <button className="border-2 border-white hover:opacity-80 text-white font-bold py-3 px-12 rounded-full">
                            LEARN MORE
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/2 xsm:w-3/4 lg:mx-0 lg:my-0 xsm:mx-auto xsm:my-14 xsm:mb-0 lg:mt-0 items-end space-x-3 justify-center text-right xsm:flex lg:block">
                    <Image className="lg:float-right xsm:float-none"
                        src="/dlp-phone.png"
                        alt="phone"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{width:'90%',height:'auto'}}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}