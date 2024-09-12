import React from 'react'
import Slider from './Slider'
import F2 from '../../../public/assets/f2.png'
import Secondnavbar from './Secondnavbar'

const Detail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <Secondnavbar />

        <div className="contentmain pt-16">
          <h1 className="text-3xl text-[#3FA2F6] font-bold text-center md:text-left mb-10">Details Page</h1>

          <div className="img-and-content flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
            <div className="left max-w-sm md:max-w-md">
              <img src={F2} alt="Big Image" className="w-full h-auto rounded-lg shadow-md" />
            </div>
            <div className="right max-w-lg">
              <h2 className="text-2xl md:text-4xl font-bold tracking-wide mb-4">Sintra, Portugal</h2>
              <p className="text-base md:text-lg text-gray-700">
                In the year 1147, in order to expand the territory of Portugal, King Afonso I (also known as Afonso "the Conqueror" or "the Great") took control over the village and the castle named Sintra. Later the status of a capital moved to Lisbon, and Sintra, lying 23 kilometers to the north-west, became the royal resort and started developing rapidly. The village surrounded by woods and mountains was chosen to be the place for recreation, strolls, and hunting and was frequently visited by the local aristocracy. One by one many luxurious summer residences were built here, as if every owner wanted to transcend each other.
              </p>
              <div className="button mt-6 flex justify-center md:justify-end">
                <button className="bg-[#4475F2] text-white rounded-lg px-7 py-3 shadow-lg hover:bg-blue-600 transition duration-300">Book Now</button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
