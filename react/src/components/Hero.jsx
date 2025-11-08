import React from 'react';

const Hero = () => {
  return (
    <div>
        <div className="Hero-container">
            <div className="Hero-Textside">
                <h4 className='NeedToBeYelow'>
                    Welcome to StorAid
                </h4>
                <h1>
                    Space Simplified, Storage Perfected
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit 
                    amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at 
                    euismod sem ipsum ac dolor.
                </p>
                <a className="NeedToBeYelowbtn btn-area NeedsUrbanFont Hero-btn" href="X" >Discover More</a>
            </div>
            <div>
                <img className="Hero-img" src="src/img/grayman.png" alt="" />
            </div>
        </div>
    </div>
  );
};

export default Hero;