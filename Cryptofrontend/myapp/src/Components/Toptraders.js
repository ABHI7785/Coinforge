import React from 'react'
import './Style/Client.css'
import Slider from 'react-slick';
import './Style/Toptraders.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Toptraders = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        dots: true,
        autoplay:true,
        autoplaySpeed:1000,
      }
    const topTraders = [
        {
          img: "https://wallpaperaccess.com/full/4379441.jpg",
          name: "John Smith",
          exp: "Trading Experience: 5+ years",
          retur: "Average Monthly Returns: 10%",
          specialization: "Day trading and technical analysis",
        },
        {
          img: "https://i.pinimg.com/originals/20/3d/0a/203d0a008386860ec7eac50c9bb5d81b.jpg",
          name: "Sarah Johnson",
          exp: "Trading Experience: 7+ years",
          retur: "Average Monthly Returns: 12%",
          specialization: "Swing trading and ICO analysis",
        },
        {
          img: "https://shilpaahuja.com/wp-content/uploads/2015/09/zac-efron-sexy-suit-hollywood-hot-sexiest-actor-men-movie-star-recent.jpg",
          name: "Mike Patel",
          exp: "Trading Experience: 3+ years",
          retur: "Average Monthly Returns: 8%",
          specialization: "Cryptocurrency arbitrage",
        },
        {
          img: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1146376828.jpg?crop=0.580xw:0.387xh;0.253xw,0.0704xh&resize=980:*",
          name: "Emily Turner",
          exp: "Trading Experience: 6+ years",
          retur: "Average Monthly Returns: 11%",
          specialization: "Long-term HODLing and ICO investments",
        },
        {
          img: "https://c4.wallpaperflare.com/wallpaper/32/829/286/male-celebrities-tom-cruise-wallpaper-preview.jpg",
          name: "David Lee",
          exp: "Trading Experience: 4+ years",
          retur: "Average Monthly Returns: 9%",
          specialization: "Scalping and algorithmic trading",
        },
        {
          img: "https://wallpapers.com/images/hd/katherine-langford-hollywood-actress-hd-wy1x25mnup8xv0dx.jpg",
          name: "Jessica Clark",
          exp: "Trading Experience: 8+ years",
          retur: "Average Monthly Returns: 13%",
          specialization: "Fundamental analysis and market research",
        },
        {
          img: "https://wallpaperset.com/w/full/8/3/0/115108.jpg",
          name: "Ryan Williams",
          exp: "Trading Experience: 5+ years",
          retur: "Average Monthly Returns: 10%",
          specialization: "Altcoin trading and risk management",
        },
        {
          img: "https://www.koimoi.com/wp-content/new-galleries/2023/05/kangana-ranaut-claims-a-list-bollywood-actress-did-films-for-free-with-other-favours-read-on-001.jpg",
          name: "Lisa Anderson",
          exp: "Trading Experience: 7+ years",
          retur: "Average Monthly Returns: 12%",
          specialization: "Initial Coin Offerings (ICOs) and token investments",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjLpDehjuOGEgEFssa-mhfj9iODEzAeMb7Q&usqp=CAU",
          name: "Daniel Chang",
          exp: "Trading Experience: 6+ years",
          retur: "Average Monthly Returns: 11%",
          specialization: "Technical analysis and trend following",
        },
        {
          img: "https://wallpapercave.com/wp/wp4496092.jpg",
          name: "Sophia Martinez",
          exp: "Trading Experience: 4+ years",
          retur: "Average Monthly Returns: 9%",
          specialization: "Long-term hodling and decentralized finance (DeFi)",
        },
        {
          img: "https://images.unsplash.com/photo-1580518337843-f959e992563b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWN0b3JzfGVufDB8fDB8fHww&w=1000&q=80",
          name: "Mark Davis",
          exp: "Trading Experience: 3+ years",
          retur: "Average Monthly Returns: 8%",
          specialization: "Scalping and market volatility",
        },
        {
          img: "https://wallpaperaccess.com/full/808675.jpg",
          name: "Grace Taylor",
          exp: "Trading Experience: 9+ years",
          retur: "Average Monthly Returns: 14%",
          specialization: "Cryptocurrency derivatives and risk hedging",
        },
      ];
      
     
      
  return (
    <div className="Top-traders">
    <h2>TOP TRADERS</h2>
    <div>
      <Slider {...settings}>
        {topTraders.map(({ img,name, exp, retur, specialization }, index) => (
          <div key={index} className="carousel-item">
            <img src={img} className="imgg" alt="" />
            <div className="carousel-caption" id='caroutop'>
              <h3 className="nameee">{name}</h3>
              <p className="exp">{exp}</p>
              <h4 className="retur">{retur}</h4>
              <h5 className='specialization'>{specialization}</h5>
              
            </div>
          </div>
        ))}
      </Slider>

      
    </div>
  </div>
  )
}

export default Toptraders