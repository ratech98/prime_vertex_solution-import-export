import IMAGE from "../images/image"
import ContactUs from "../properties/contactUs"

const Contact = () => {

  const myStyle ={
    background:`url(/contactUsGroup.png)`,
    backgroundPosition:'right',
    backgroundSize: 'fit',
    height: '100%',
    // Object: 'cover',
    backgroundRepeat:'no-repeat',
}

    return (
      <>
        <div className="px-5">
          <div className="flex flex-col items-center justify-center pt-28">
            <div className="px-5 md:w-3/6">              
              <p className="text-3xl text-center font-extrabold py-3">Get in Touch</p>
              <p className="text-center text-gray-500 pb-3">Reach out to PRIME VERTEX SOLUTION for expet logistics and supply chain consultation.
                We are here to assist with all your shipping needs.
              </p>
            </div>
          </div>
          <div id="contact" className="pt-16">
              <div className="">
                  <div className={` py-10 px-5 bg-red-400`} style={myStyle}>
                      <div className="md:ml-20">
                          <ContactUs/>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </>
    ) 
  }  
  export default Contact