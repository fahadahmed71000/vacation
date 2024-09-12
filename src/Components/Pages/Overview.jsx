import React, { useState } from 'react';
import Img1 from "../../../public/assets/img1.png";
import Img2 from "../../../public/assets/img2.png";
import Img3 from "../../../public/assets/img3.png";
import A1 from "../../../public/assets/A1.png";
import Dot from "../../../public/assets/dot.png";
import Ad from "../../../public/assets/ad.png";
import Big from "../../../public/assets/big.png";
import Secondnavbar from './Secondnavbar';

const Overview = () => {
  const [favorites, setFavorites] = useState([false, false, false]);

  const toggleFavorite = (index) => {
    setFavorites(favorites.map((fav, i) => (i === index ? !fav : fav)));
  };

  const cardsData = [
    {
      img: Img1,
      title: "London, Demystified",
      author: "@JennyParis from London, UK",
      description: "Learn to experience London with confidence with an exclusive travel guide by London natives.",
      time: "3 hours, 12 minutes",
      viewers: "34,129 viewers",
    },
    {
      img: Img2,
      title: "All in New York City",
      author: "@JennyParis from London, UK",
      description: "Explore New York City with confidence with an exclusive travel guide by Darell Kenedy.",
      time: "3 hours, 12 minutes",
      viewers: "34,129 viewers",
    },
    {
      img: Img3,
      title: "Experience your Paris",
      author: "@JennyParis from London, UK",
      description: "Learn to experience Paris with confidence with an exclusive travel guide by Kelvin Jason.",
      time: "3 hours, 12 minutes",
      viewers: "34,129 viewers",
    },
  ];

  return (
    <div>
      <div className="container mx-auto px-4">
        <Secondnavbar />
        {/* First card section */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <div key={index} className="cart bg-white shadow-md rounded-lg p-6">
              <div className="img">
                <img src={card.img} alt={card.title} className="rounded-lg" />
              </div>
              <div className="h1 pt-5 font-bold text-xl md:text-2xl">
                <h1>{card.title}</h1>
              </div>
              <div className="logo pt-3 flex gap-2 items-center">
                <img src={A1} alt="logo" className="w-6 h-6" />
                <p className="text-gray-600 text-sm">{card.author}</p>
              </div>
              <div className="pt-5 text-gray-700">
                <p>{card.description}</p>
              </div>
              <div className="logo2 flex gap-2 pt-5 items-center">
                <img src={Dot} alt="dot" className="w-4 h-4" />
                <p className="text-sm">{card.time}</p>
              </div>
              <div className="logo2 flex gap-2 pt-2 items-center">
                <img src={Ad} alt="ad" className="w-4 h-4" />
                <p className="text-sm">{card.viewers}</p>
              </div>
              <div className="button flex gap-4 pt-5 items-center">
                <button className="bg-blue-600 hover:bg-blue-700 w-full h-10 text-white rounded-lg">
                  Watch now
                </button>
                <i
                  className={`cursor-pointer text-2xl ${
                    favorites[index] ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart'
                  }`}
                  onClick={() => toggleFavorite(index)}
                ></i>
              </div>
            </div>
          ))}
        </div>

        {/* Image and content section */}
        <div className="img-and-content flex flex-col-reverse lg:flex-row justify-between items-center pt-20 lg:pt-36 gap-10">
          <div className="left w-full lg:w-1/2">
            <img src={Big} alt="Big Image" className="w-full rounded-lg" />
          </div>
          <div className="right w-full lg:w-1/2">
            <div className="text-3xl lg:text-4xl font-bold tracking-wide">
              <h1>London Demystified</h1>
            </div>
            <div className="pt-6">
              <p className="text-gray-700">
                London, city, capital of the United Kingdom. It is among the oldest of the world’s great cities—its history spanning nearly two millennia—and one of the most cosmopolitan. By far Britain’s largest metropolis, it is also the country’s economic, transportation, and cultural center...
              </p>
            </div>
            <div className="button pt-10">
              <button className="bg-blue-600 text-white rounded-lg px-7 py-3">Book Now</button>
            </div>
          </div>
        </div>

        {/* Second card section */}
        <div className="pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <div key={index} className="cart bg-white shadow-md rounded-lg p-6">
              <div className="img">
                <img src={card.img} alt={card.title} className="rounded-lg" />
              </div>
              <div className="h1 pt-5 font-bold text-xl md:text-2xl">
                <h1>{card.title}</h1>
              </div>
              <div className="logo pt-3 flex gap-2 items-center">
                <img src={A1} alt="logo" className="w-6 h-6" />
                <p className="text-gray-600 text-sm">{card.author}</p>
              </div>
              <div className="pt-5 text-gray-700">
                <p>{card.description}</p>
              </div>
              <div className="logo2 flex gap-2 pt-5 items-center">
                <img src={Dot} alt="dot" className="w-4 h-4" />
                <p className="text-sm">{card.time}</p>
              </div>
              <div className="logo2 flex gap-2 pt-2 items-center">
                <img src={Ad} alt="ad" className="w-4 h-4" />
                <p className="text-sm">{card.viewers}</p>
              </div>
              <div className="button flex gap-4 pt-5 items-center">
                <button className="bg-blue-600 hover:bg-blue-700 w-full h-10 text-white rounded-lg">
                  Watch now
                </button>
                <i
                  className={`cursor-pointer text-2xl ${
                    favorites[index] ? 'fa-solid fa-heart text-red-500' : 'fa-regular fa-heart'
                  }`}
                  onClick={() => toggleFavorite(index)}
                ></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
