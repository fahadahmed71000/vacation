import { useState } from 'react';
import Logo from '../../public/assets/logo.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhonePausedIcon from '@mui/icons-material/PhonePaused';

function Footer() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscription = () => {
    // Handle subscription logic here
    setIsSubscribed(true);
  };

  return (
    <div className="bg-[#6EACDA] pt-10 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-4">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img className="h-12 mb-6" src={Logo} alt="Logo" />
            <div className="flex items-center mb-4 text-white">
              <PhonePausedIcon className="mr-2" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>(219) 555-0114</p>
              </div>
            </div>
            <div className="flex items-center mb-4 text-white">
              <EmailIcon className="mr-2" />
              <div>
                <p className="font-semibold">Email</p>
                <p>getpay@example.com</p>
              </div>
            </div>
            <div className="flex items-center mb-4 text-white">
              <LocationOnIcon className="mr-2" />
              <div>
                <p className="font-semibold">Address</p>
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-white font-bold mb-4">Company</h2>
            <p className="mb-2 text-white">Home</p>
            <p className="mb-2 text-white">About</p>
            <p className="mb-2 text-white">Blog</p>
            <p className="mb-2 text-white">Pages</p>
            <p className="mb-2 text-white">Contact</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-white font-bold mb-4">Help</h2>
            <p className="mb-2 text-white">Customer Support</p>
            <p className="mb-2 text-white">Terms & Conditions</p>
            <p className="mb-2 text-white">Privacy Policy</p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-white font-bold mb-4">Subscribe</h2>
            <p className="text-white mb-4">The latest insights, resources, expert opinions and company news.</p>
            {isSubscribed ? (
              <p className="text-gray-200">You are subscribed!</p>
            ) : (
              <button
                className="bg-[#4475f2] hover:bg-[#355fcc]  sm:w-32 text-white font-bold py-1 px-3 rounded focus:outline-none focus-shadow-outline"
                onClick={handleSubscription}
              >
                Subscribe
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
