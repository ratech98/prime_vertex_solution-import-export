// import { Form } from "react-router-dom"
import IMAGE from "../images/image"
// import { EmailJSResponseStatus } from "emailjs-com";
import emailjs from '@emailjs/browser';
const SERVICE_ID = "";
const TEMPLATE_ID = "";
const PUBLIC_KEY = "";
const ContactUs = () => {
    console.log('submited');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('target value',e.target.value);
        
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
        .then((res)=>{
            console.log('response value',res);
            alert('Message Send Successfully')
        })
        .catch((err)=>{
            console.log('error value',err);
            
            alert('Something went wrong!')
        })
        e.target.reset()
    }
    return(
        <>
            <div className="w-full md:w-4/12 border border-[#194775] rounded-xl px-3 py-10">
                <div className="">
                    <div className="text-[#194775] font-semibold text-xl mb-1">Contact With us</div>
                </div>
                <div>
                    <div className=" ">
                        <form className="py-5" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-5 mb-5">
                                <div className="flex">
                                    <input className="pl-5 pr-10 py-2  rounded-lg w-full focus:outline-none bg-white border border-[#194775] placeholder:text-[#194775] " id="name" name="name" type="type" placeholder="Your Name" autoFocu required/>
                                    <div className="self-center -ml-8">
                                        <img className="w-5" src={IMAGE?.nameIcon} alt=""/>
                                    </div>
                                </div>
                                <div className="flex">
                                    <input className="pl-5 pr-10 py-2 rounded-lg w-full focus:outline-none bg-white border border-[#194775] placeholder:text-[#194775]" id="email" name="email" type="email" placeholder="Mail Address" required/>
                                    <div className="self-center -ml-10">
                                        <img className="w-8" src={IMAGE?.mailIcon} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="flex mb-5">
                                <textarea rows={3} name="message" id="message" className="pl-5 pr-10 bg-white border border-[#194775] placeholder:text-[#194775] py-2 resize-none rounded-lg w-full focus:outline-none" type="type" placeholder="Your Message"/>
                                <div className=" mt-2 -ml-10">
                                    <img className="w-7" src={IMAGE?.mesageIcon} alt=""/>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button className="text-white rounded-md font-semibold bg-[#194775] px-5 py-2 flex" type="submit" placeholder="Your Message">
                                    Send Message
                                    <div className="self-center">
                                        <img className="w-7 ml-3" src={IMAGE?.RightLongArrow} alt=""/>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUs 