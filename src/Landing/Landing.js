import React from 'react'
import { Link } from 'react-router-dom';
import DescriptionIcon from "@material-ui/icons/Description";
import HighlightIcon from "@material-ui/icons/Highlight";
import './Landing.css';
import Navbar from '../Auth/Navbar';
import keep from './keep.png';

function Landing() {
    return (
        <div classNameName='body'>
           
                <Navbar />
                <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">YourNotes
       
      </h1>
      <p className="mb-8 leading-relaxed">YourNotes is a free open-source note taking app with privacy measures in place and advanced features</p>
      <div className="flex justify-center">
        <Link to='/Register' className="auth-link"><button  className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Sign Up</button></Link>
        <Link to='/Login' className="auth-link"><button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Sign In</button></Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src={ keep }></img>
    </div>
  </div>
</section>
            </div>

    )
}

export default Landing;

