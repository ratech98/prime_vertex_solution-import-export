import { Link } from "react-router-dom"
import IMAGE from "../images/image"
// import ima from '../../assets/svgFiles/rightSmallArrow.svg'

const footer = () => {
    return(
        <>
            <div className='bg-blue-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 z-0 lg:grid-cols-4 p-5 text-gray-600'>
                <div className="pl-5">
                    <div className="inline-block z-0k mb-3">
                        <div className="flex z-0">
                            <img className="z-0 -mr-3" src={IMAGE?.bite} alt=""/>
                            <p className="text-[#002F52] z-10 self-end font-semibold">QUICK LINKS</p>
                        </div>
                    </div>
                    <ul className={`*:mb-3`}>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Home</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>About Us</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Meet Our Team</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Help & FAQs</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="pl-5">
                    <div className="inline-block mb-3">
                        <div className="flex">
                            <img className="z-0 -mr-3" src={IMAGE?.bite} alt=""/>
                            <p className="text-[#002F52] z-10 self-end font-semibold">CATEGORY</p>
                        </div>
                    </div>
                    <ul className={`*:mb-3`}>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Commited To Quality</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Why Us</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Offer</Link></li>
                    </ul>
                </div>
                <div className="pl-5">
                    <div className="inline-block mb-3">
                        <div className="flex">
                            <img className="z-0 -mr-3" src={IMAGE?.bite} alt=""/>
                            <p className="text-[#002F52] z-10 self-end font-semibold">SUPPORT</p>
                        </div>
                    </div>
                    <ul className={`*:mb-3`}>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Support Center</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Contact Us</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Feed Back</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Account</Link></li>
                        </ul>
                </div>
                <div className="pl-5">
                    <div className="inline-block mb-3">
                        <div className="flex gap-3">
                            <img src={IMAGE?.pv} alt=""/>
                            <p className="text-[#002F52] text-xl font-bold">Prime Vertex Solutions</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="mb-5">
                                Subscribe to our upcoming latest article and news resources. 
                            </p>
                            <div className="">
                                <input className="bg-transparent  border border-gray-700 rounded-lg w-full px-3 py-2 " placeholder="Enter Mail"/>
                                <button type="submit" className="bg-[#F7722D] rounded-full w-full text-white p-2 mt-5">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue-50 flex flex-col items-center justify-center">
                <div className="w-10/12 ">
                    <div className="w-full h-[1px] bg-gray-400"></div>
                    <ul className="flex justify-center py-3 gap-3">
                        <li>
                            <button className="border bg-orange-600 hover:border-white rounded-full p-2">
                                <img className="size-5" src={IMAGE?.Insta} alt=""/>
                            </button>
                        </li>
                        <li>
                            <button className="border bg-orange-600 hover:border-white rounded-full p-2">
                                <img className="size-5" src={IMAGE?.WebIcon} alt=""/>
                            </button>
                        </li>
                        <li>
                            <button className="border bg-orange-600 hover:border-white rounded-full p-2">
                                <img className="size-5" src={IMAGE?.Twitter} alt=""/>
                            </button>
                        </li>
                        <li>
                            <button className="border bg-orange-600 hover:border-white rounded-full p-2">
                                <img className="size-5" src={IMAGE?.Youtube} alt=""/>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default footer