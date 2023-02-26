import React from 'react';
import profImg from "../../Assets/971.jpg"
export default function Home() {
  return (
    <section className="d-flex flex-row justify-content-center">
      <div className="d-flex flex-column justify-content-around mt-5 col-lg-6">
        <h1 className="text-white mx-auto" style={{fontFamily: 'sans-serif',}}>About Me</h1>
        <p className="text-white mx-auto" style={{fontFamily: 'sans-serif',}}>
          My name is Matthew Gaskins, and I'm currently enrolled in the
          University of Utah coding bootcamp! I have had a natural affinity for
          coding from being a teaching assistant for an introductory programming
          class at the University of Houston. I obtained my B.S. in Mechanical
          Engineering in 2020, but I'm currently looking for flexibility in my
          work schedule and maintaing a work-life balance. These past 24 weeks
          in my coding bootcamp have been enlightening and I've enjoyed learning
          front-end and back-end structure of the sites we use everyday.
        </p>
      </div>
      <img src={profImg} className="mt-5" alt=".." style={{height: 400, width: 500}}/>
    </section>
  );
}
