import React from 'react';
// import { Carousel } from 'react-bootstrap';
import './Style/Client.css'
import Slider from 'react-slick';
import './Style/Client.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';

const Client = () => {

  const LeftArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-left" onClick={onClick}>
      <AiOutlineLeft/> 
    </div>
  );
  const RightArrow = ({ onClick }) => (
    <div className="custom-arrow custom-arrow-right" onClick={onClick}>
      <AiOutlineRight/> 
    </div>
  );  

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
    autoplay:true,
    autoplaySpeed:1000,
  }


  const clients=[{name:"Microsoft Corporation",industry:"Industry: Technology",website:"Website: https://www.microsoft.com",img:"https://images.pexels.com/photos/9683980/pexels-photo-9683980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
  {name:"Amazon.com, Inc",industry:"Industry: E-commerce",website:"Website: https://www.amazon.com/",img:"https://www.thesun.co.uk/wp-content/uploads/2022/02/Amazon-Logo-1024x426-1.png"},
  {name:"Apple Inc.",industry:"Industry: Technology",website:"Website: https://www.apple.com",img:"https://images.hive.blog/0x0/https://steemitimages.com/DQmPkFePdcnmhmXNN29ByL4kmGQdrzWzAE6TtYxw3GoM4kz/image.png"},
  {name:"Google LLC",industry:"Industry: Technology",website:"Website: https://www.google.com",img:"https://www.shutterstock.com/shutterstock/photos/1587240631/display_1500/stock-photo-seattle-washington-usa-december-google-logo-on-the-offices-of-the-cloud-computing-and-1587240631.jpg"},
  {name:"JPMorgan Chase & Co",industry:"Industry: Financial Services",website:"Website: https://www.jpmorganchase.com",img:"https://www.theforage.com/blog/wp-content/uploads/2023/08/jpmorgan-internships-1024x638.jpg"},
  {name:"Exxon Mobil Corporation",industry:"Industry: Energy",website:"Website: https://www.exxonmobil.com",img:"https://1000logos.net/wp-content/uploads/2017/08/ExxonMobil-Logo.png"},
  {name:"Procter & Gamble Co",industry:"Industry: Consumer Goods",website:"Website: https://www.pg.com",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Procter_%26_Gamble_logo.svg/1200px-Procter_%26_Gamble_logo.svg.png"},
  {name:"Johnson & Johnson",industry:"Industry: Healthcare",website:"Website: https://www.jnj.com",img:"https://iide.co/wp-content/uploads/2021/12/SWOT-Analysis-of-Johnson-and-Johnson-JJ-Logo.jpg"},
  {name:"The Coca-Cola Company",industry:"Industry: Beverage",website:"Website: https://www.coca-colacompany.com",img:"https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png"},
  {name:"Facebook, Inc",industry:"Industry: Technology",website:"Website: https://about.fb.com",img:"https://d1lss44hh2trtw.cloudfront.net/assets/editorial/2021/10/facebook-name-change.jpg"}]
  return (
    <div className="client-partner">
    <h2>OUR PARTNERS</h2>
    <div>
      <Slider {...settings}>
        {clients.map(({ img, industry, name, website }, index) => (
          <div key={index} className="carousel-item">
            <img src={img} className="imggg" alt="" />
            <div className="carousel-caption" id='caroucap'>
              <h3 className="industry">{industry}</h3>
              <p className="name">{name}</p>
              <h5 className="web">
                <a href={website} target="_blank" rel="noopener noreferrer">
                  {website}
                </a>
              </h5>
            </div>
          </div>
        ))}
      </Slider>

      
    </div>
  </div>
  )
}

export default Client