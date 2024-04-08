import React from 'react'
import heroImage from "../assets/hero.png";
import "../style/home.css";
export default function Home() {
  return (
    <div>
      <div>
      <main className="hero_wrapper">
        <section className="section_right_hero">
          <p>new Arrival</p>
          <h2>
           Welcome to <br /> ITV mart
          </h2>
          <div className="productSpecs d-flex flex-column">
            <span>casual Line</span>
            <span>Nylon Fabric</span>
            <span>Fresh color</span>
          </div>
          <button className="btn bg-white border-bottom border-dark w-50">
            Discover More
          </button>
        </section>
        <section className="section_left_hero">
          <img src={heroImage} alt="heroImage" />
        </section>
      </main>
    </div>
    </div>
  )
}
