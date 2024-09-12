import React from 'react';
import L1 from '../../public/assets/l1.png';
import L2 from '../../public/assets/l2.png';
import L3 from '../../public/assets/l3.png';

const Review = () => {
  return (
    <div className="flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-wide text-[#12141D]">
            Honest reviews from our customers
          </h1>
        </div>

        {/* Reviews */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          {/* Card 1 */}
          <div className="card text-[#12141D] flex flex-col items-center w-full lg:w-1/3 p-4 border rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <img src={L1} alt="Reviewer 1" className="w-12 h-12 rounded-full" />
              <h1 className="font-bold">Mila McSabbu</h1>
            </div>
            <p className="text-center font-medium">
              We test and compare the best project management software for collaborating with a team, hitting deadlines.
            </p>
          </div>

          {/* Card 2 */}
          <div className="card text-[#12141D] flex flex-col items-center w-full lg:w-1/3 p-4 border rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <img src={L2} alt="Reviewer 2" className="w-12 h-12 rounded-full" />
              <h1 className="font-bold">Robert Fox</h1>
            </div>
            <p className="text-center font-medium">
              Project management skimping on core features. It's strong at enabling with collaboration on visual materials.
            </p>
          </div>

          {/* Card 3 */}
          <div className="card text-[#12141D] flex flex-col items-center w-full lg:w-1/3 p-4 border rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <img src={L3} alt="Reviewer 3" className="w-12 h-12 rounded-full" />
              <h1 className="font-bold">Jenny Wilson</h1>
            </div>
            <p className="text-center font-medium">
              Project to be a team's best option for project management, but when all the stars align, it's a powerful tool.
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="pt-12 flex justify-center">
          <iframe
            className="w-full lg:w-[70rem] h-64 lg:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231562.13335862698!2d66.80688988671876!3d24.926675499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338caa5ac57cb%3A0x2c4b1fc512ab6bb!2sAptech%20Gulshan-e-Iqbal!5e0!3m2!1sen!2s!4v1724233528495!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Review;
