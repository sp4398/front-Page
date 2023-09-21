import React from 'react'
import './Home.css'

const Home = () => {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/saurav-pandey-b399731a0/");
  };
  return (
    <section id="home">
      <div className="homeContent">
        <span className="hello">Resposive <br /> Website Design</span>
        <p className="homePara">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates hic perspiciatis dicta quam
          eveniet asperiores repellat! Quam, nostrum quidem! Esse ipsa in error veritatis eius, 
           iure doloremque, quas eaque veniam omnis necessitatibus provident. Alias sed laborum magnam 
        </p>
          <button className="btn" onClick={openLinkedIn}>
            Browse by category
            <img src="image.png" alt="" className="image" />
          </button>
      </div>
      <img src="star.png" alt="Saurav" className="bg" />
    </section>
  )
}

export default Home
