import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="12321341"
            title="Step into a world of endless possibilities with the iPhone X in black, where cutting-edge meets timeless elegance."
            price={11.96}
            rating={5}
            image="https://media.very.ie/i/littlewoodsireland/VBZ9D_SQ1_0000000674_SPACE_GREY_SLf/premium-pre-loved-grade-a-iphone-xs-64gb-space-grey-ntn.jpg?$180x240_retinamobilex2$"
          />
          <Product
            id="49538094"
            title="Make a statement with our eye-catching scooty, a bold expression of your individuality and zest for life"
            price={239.0}
            rating={4}
            image="https://sxcscooters.com/cdn/shop/products/arch1_1aa1d799-3a54-4a6b-9c22-937afc4f868e_1000x.jpg?v=1679059479"
          />
        </div>

        <div className="home_row">
          <Product
            id="4903850"
            title="Walk the path of sophistication with the Black Swan handbag, a tribute to grace and poise"
            price={199.99}
            rating={3}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZj4r8-GcVbJflpKJu-CU-Dc5HXSnyAU8tz9oH1MJg1WAJRbQ8p4NY0b27cy9KNj0eDic&usqp=CAU"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="90829332"
            title="Experience the touch of luxury with our rejuvenating cream, where indulgence meets skincare"
            price={1094.98}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrJWDGf4t0F8_o-3iNwASSL2yuSKyEspwYQ&usqp=CAU"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
