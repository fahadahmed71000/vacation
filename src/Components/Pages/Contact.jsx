import React from 'react';
import PhonePausedIcon from '@mui/icons-material/PhonePaused';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
        <div className="section flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="left flex flex-col lg:w-1/2 p-4 lg:p-8">
            <div className="main-content">
              <h1 className="font-bold text-2xl lg:text-3xl">
                Get in <span className="text-[#3FA2F6]">touch</span>
              </h1>
              <p className="pt-3 text-base lg:text-lg">
                For time requires a quick but smooth quiver. Football season employee or, to decorate that does not flatter the net.
              </p>
              <form className="pt-6 space-y-4 lg:space-y-6">
                <input className="border-b-2 w-full p-2" type="text" placeholder="Contact name" />
                <input className="border-b-2 w-full p-2" type="text" placeholder="Street" />
                <div className="flex flex-col lg:flex-row gap-4">
                  <input className="border-b-2 w-full p-2" type="text" placeholder="City" />
                  <input className="border-b-2 w-full p-2" type="number" placeholder="Postcode" />
                </div>
                <input className="border-b-2 w-full p-2" type="number" placeholder="Contact Phone" />
                <input className="border-b-2 w-full p-2" type="text" placeholder="E-mail" />
                <input className="border-b-2 w-full p-2" type="text" placeholder="Message" style={{ height: '100px' }} />
                <button className="w-full mt-6 bg-[#4475F2] text-white py-2 rounded-lg">Submit</button>
              </form>
              <div className="cardsection mt-6 lg:mt-8 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 bg-white p-4 rounded-lg text-sm">
                <div className="card flex items-center gap-4">
                  <PhonePausedIcon />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>111 111 111</p>
                  </div>
                </div>
                <div className="card flex items-center gap-4">
                  <MailOutlineIcon />
                  <div>
                    <p className="font-semibold">E-MAIL</p>
                    <a href="mailto:info@company.com" className="text-blue-500">info@company.com</a>
                  </div>
                </div>
                <div className="card flex items-center gap-4">
                  <MailOutlineIcon />
                  <div>
                    <p className="font-semibold">Helpdesk</p>
                    <a href="https://helpdesk.com" className="text-blue-500" target="_blank" rel="noopener noreferrer">https://helpdesk.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="right lg:w-1/2 p-4 lg:p-8 mt-6 lg:mt-0">
            <iframe
              className="w-full h-96 lg:h-[950px] rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231562.13335862698!2d66.80688988671876!3d24.926675499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338caa5ac57cb%3A0x2c4b1fc512ab6bb!2sAptech%20Gulshan-e-Iqbal!5e0!3m2!1sen!2s!4v1724233528495!5m2!1sen!2s"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
