import { Link } from "react-router-dom"
import IMAGE from "../images/image"
// import ima from '../../assets/svgFiles/rightSmallArrow.svg'

const footer = () => {
    return(
        <>
            <div className='bg-[#1E1E1E] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 z-0 lg:grid-cols-4 p-5 px-10 text-gray-600'>
                <div className="pl-5 flex flex-col justify-center">
                    <div className="inline-block z-0k mb-3">
                        <div className="flex z-0">
                            {/* <img className="z-0 -mr-3" src={IMAGE?.bite} alt=""/> */}
                            <p className="text-[#fff] z-10 self-end font-semibold">Company</p>
                        </div>
                    </div>
                    <ul className={`*:mb-3`}>
                        <li className="">
                            <Link className="flex gap-2" to={'/'}>
                                <img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>
                                Home
                            </Link>
                        </li>
                        <li className="">
                            <Link className="flex gap-2" to={'/'}>
                                <img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>
                                About Us</Link>
                        </li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Meet Our Team</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Help & FAQs</Link></li>
                        <li className="">
                            <Link className="flex gap-2" to={'/'}>
                            <img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>
                            Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="pl-5 flex flex-col justify-center">
                    <div className="inline-block mb-3">
                        <div className="flex">
                            {/* <img className="z-0 -mr-3" src={IMAGE?.bite} alt=""/> */}
                            <p className="text-[#fff] z-10 self-end font-semibold">Services</p>
                        </div>
                    </div>
                    <ul className={`*:mb-3`}>
                        <li className="">
                            <Link className="flex gap-2" to={'/'}>
                            <img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>
                            Services</Link>
                        </li>
                        <li className="">
                            <Link className="flex gap-2" to={'/'}>
                            <img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>
                            Consultation</Link>
                        </li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Offer</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Offer</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Offer</Link></li>
                    </ul>
                </div>
                <div className="pl-5 flex flex-col justify-center">
                    <div className="inline-block mb-3">
                        <div className="flex">
                            {/* <img className="z-0 -mr-3" src={IMAGE?.bite} alt=""/> */}
                            <p className="text-[#fff] z-10 self-end font-semibold">Solution</p>
                        </div>
                    </div>
                    <ul className={`*:mb-3`}>
                        <li className="">
                            <Link className="flex gap-2" to={'/'}>
                            <img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>
                            Shipping Consultation</Link>
                        </li>
                        <li className="">
                            <Link className="flex gap-2" to={'/'}>
                                <img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>
                                Suppy Chain Management</Link>
                        </li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Feed Back</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Account</Link></li>
                        <li className=""><Link className="flex gap-2" to={'/'}><img className="size-3 self-center " src={IMAGE?.SmallArrow} alt=""/>Account</Link></li>
                        </ul>
                </div>
                <div className="pl-5">
                    <div className="inline-block mb-3">
                        <div className="flex gap-3">
                            <img src={IMAGE?.logo} alt=""/>
                            <p className="text-[#fff] self-center text-xl font-bold">Prime Vertex Solutions</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="mb-5">
                                Subscribe to our newsletter for the latest updates in logistics and supply chain solutions. 
                            </p>
                            <div className="flex flex-col gap-3">
                                <input className="bg-transparent border border-gray-700 rounded-full w-full px-3 py-2 h-fit self-center " placeholder="Enter Mail"/>
                                <button type="submit" className="bg-[#1A4876] rounded-full w-full text-white p-2 self-center">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#1E1E1E] flex flex-col items-center justify-center ">
                <div className="w-11/12 ">
                    <div className="w-full h-[1px] bg-gray-400"></div>
                    <div className="flex flex-col lg:flex-row flex-col-reverse">
                        <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col">
                            <span className="text-sm text-gray-500 ">© 2024 <a href="https://www.bestlabzglobal.com/" className="hover:underline">PRIME VERTEX SOLUTION</a>. All rights reserved.
                            </span>
                            <span className="text-sm text-gray-500 "> <a href="https://www.bestlabzglobal.com/" className="hover:underline">Leading the way in logistics innovation.</a>
                            </span>
                        </div>
                        <div className="w-full self-center mx-auto max-w-screen-xl p-4 flex flex-co gap-5">
                            <span className="text-sm text-gray-500 "><a href="https://www.bestlabzglobal.com/" className="hover:underline">Terms Of Service</a></span>
                            <span className="text-sm text-gray-500 "><a href="https://www.bestlabzglobal.com/" className="hover:underline">Privacy Policy</a></span>
                        </div>
                        <div className="flex py-2 gap-3 self-center">
                            <div className="p-2 rounded-full hover:bg-blue-50 border-2 bg-blue-100">
                                <svg className="fill-[#1A4876]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20px" height="20px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"/></svg>                            
                            </div>
                            <div className="p-2 rounded-full hover:bg-blue-50 border-2 bg-blue-100">
                                <svg className="fill-[#1A4876]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20px" height="20px">    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"/></svg>                            </div>
                            <div className="p-2 rounded-full hover:bg-blue-50 border-2 bg-blue-100">
                                <svg className="fill-[#1A4876]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20px" height="20px">    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"/></svg>
                            </div>
                            <div className="p-2 rounded-full hover:bg-blue-50 border-2 bg-blue-100">
                                <svg className="fill-[#1A4876]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20px" height="20px">    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"/></svg>                            
                            </div>
                            <div className="p-2 rounded-full hover:bg-blue-50 border-2 bg-blue-100">
                                <svg className="fill-[#1A4876]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20px" height="20px">    <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z"/></svg>                            
                            </div>
                        </div>
                    </div>
                    {/* <ul className="flex justify-center py-3 gap-3">
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
                    </ul> */}
                </div>
            </div>
        </>
    )
}

export default footer