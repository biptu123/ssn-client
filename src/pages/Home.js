import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";
import offer1 from "../assets/images/offer1.jpg";
import { Carousel as BootstrapCarousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/homeStyle.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";

const OfferCarousel = () => {
  return (
    <div className="offers-wrapper">
      <div className="offers-title">
        <h1>Your Savings Adventure Starts Here</h1>
        <h2>Explore Exclusive Offers</h2>
      </div>
      <BootstrapCarousel className="offers">
        <BootstrapCarousel.Item className="image-wrapper">
          <img className="offers-image" src={offer1} alt="First slide" />
        </BootstrapCarousel.Item>

        <BootstrapCarousel.Item className="image-wrapper">
          <img className="offers-image" src={offer1} alt="Second slide" />
        </BootstrapCarousel.Item>

        {/* Add more BootstrapCarousel.Items for additional slides */}
      </BootstrapCarousel>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="categories-wrapper">
      <div className="categories-title">Categories</div>
      <div className="categories">
        <div className="card" style={{ width: "18rem" }}>
          <div className="overlay"></div>
          <img className="card-img-top" src={offer1} alt="Card image cap" />
          <h5 className="card-title">Proteins</h5>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="overlay"></div>
          <img className="card-img-top" src={offer1} alt="Card image cap" />
          <h5 className="card-title">Pre/post workout</h5>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="overlay"></div>
          <img className="card-img-top" src={offer1} alt="Card image cap" />
          <h5 className="card-title">Gainers</h5>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="overlay"></div>
          <img className="card-img-top" src={offer1} alt="Card image cap" />
          <h5 className="card-title">Vitamins</h5>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="overlay"></div>
          <img className="card-img-top" src={offer1} alt="Card image cap" />
          <h5 className="card-title">Creatine</h5>
        </div>
      </div>
    </div>
  );
};

const BestOffers = () => {
  return (
    <div className="bestdeals-wrapper">
      <div className="bestdeals-title">
        <span
          className="bestdeals-title-content"
          style={{ margin: "20px 20px 20px 20px" }}
        >
          BEST DEALS
        </span>
      </div>

      <div className="bestdeals">
        <div className="bestdeal-product">
          <div className="product-discount">
            <span>20% OFF</span>
          </div>

          <img src={offer1} alt="" />
          <p className="product-name">Product Heading</p>
          <span className="price-info" style={{ display: "flex" }}>
            <h5>&#8377;5000</h5>
            <span style={{ textDecoration: "line-through" }}>&#8377;4999</span>
            <p>Save &#8377;2148</p>
          </span>
          <button className="add-product">Add to cart</button>
        </div>
        <div className="bestdeal-product">
          <div className="product-discount">
            <span>20% OFF</span>
          </div>

          <img src={offer1} alt="" />
          <p className="product-name">Product Heading</p>
          <span className="price-info" style={{ display: "flex" }}>
            <h5>&#8377;5000</h5>
            <span style={{ textDecoration: "line-through" }}>&#8377;4999</span>
            <p>Save &#8377;2148</p>
          </span>
          <button className="add-product">Add to cart</button>
        </div>
        <div className="bestdeal-product">
          <div className="product-discount">
            <span>20% OFF</span>
          </div>

          <img src={offer1} alt="" />
          <p className="product-name">Product Heading</p>
          <span className="price-info" style={{ display: "flex" }}>
            <h5>&#8377;5000</h5>
            <span style={{ textDecoration: "line-through" }}>&#8377;4999</span>
            <p>Save &#8377;2148</p>
          </span>
          <button className="add-product">Add to cart</button>
        </div>
        <div className="bestdeal-product">
          <div className="product-discount">
            <span>20% OFF</span>
          </div>

          <img src={offer1} alt="" />
          <p className="product-name">Product Heading</p>
          <span className="price-info" style={{ display: "flex" }}>
            <h5>&#8377;5000</h5>
            <span style={{ textDecoration: "line-through" }}>&#8377;4999</span>
            <p>Save &#8377;2148</p>
          </span>
          <button className="add-product">Add to cart</button>
        </div>
        <div className="bestdeal-product">
          <div className="product-discount">
            <span>20% OFF</span>
          </div>

          <img src={offer1} alt="" />
          <p className="product-name">Product Heading</p>
          <span className="price-info" style={{ display: "flex" }}>
            <h5>&#8377;5000</h5>
            <span style={{ textDecoration: "line-through" }}>&#8377;4999</span>
            <p>Save &#8377;2148</p>
          </span>
          <button className="add-product">Add to cart</button>
        </div>
        <div className="bestdeal-product">
          <div className="product-discount">
            <span>20% OFF</span>
          </div>

          <img src={offer1} alt="" />
          <p className="product-name">Product Heading</p>
          <span className="price-info" style={{ display: "flex" }}>
            <h5>&#8377;5000</h5>
            <span style={{ textDecoration: "line-through" }}>&#8377;4999</span>
            <p>Save &#8377;2148</p>
          </span>
          <button className="add-product">Add to cart</button>
        </div>
      </div>
      <button className="see-all">
        <p>See All</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </button>
    </div>
  );
};

const FeaturedVideos = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="featured-wrapper">
      <div className="featured-title">
        <span
          className="featured-title-content"
          style={{ margin: "20px 20px 20px 20px" }}
        >
          Featured Videos
        </span>
      </div>
      <Carousel className="featured-videos" responsive={responsive}>
        <div className="featured-video">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=Oi1W1h6gcuk"
            width="100%"
            height="100%"
            // light={<img className="thumbnail" src={offer1} alt="Thumbnail" />}
            playing={false}
            muted
          />
        </div>
        <div className="featured-video">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=_mEwkN-wLr0"
            width="100%"
            height="100%"
            // light={<img className="thumbnail" src={offer1} alt="Thumbnail" />}
            playing={false}
            muted
          />
        </div>
        <div className="featured-video">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=coQNG0GF1hI"
            width="100%"
            height="100%"
            // light={<img className="thumbnail" src={offer1} alt="Thumbnail" />}
            playing={false}
            muted
          />
        </div>
        <div className="featured-video">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=I5wetB0cjhQ"
            width="100%"
            height="100%"
            // light={<img className="thumbnail" src={offer1} alt="Thumbnail" />}
            playing={false}
            muted
          />
        </div>
      </Carousel>
    </div>
  );
};

const HomeContent = () => {
  return (
    <div className="home-content">
      <OfferCarousel />
      <Categories />
      <BestOffers />
      <FeaturedVideos />
    </div>
  );
};

const Home = () => {
  const [auth] = useAuth();
  return (
    <>
      <Layout title="Home | SSN">
        <section className="hero-section">
          {/* <pre style={{ color: "#FFF" }}>{JSON.stringify(auth, null, 4)}</pre> */}
          <HomeContent />
        </section>
      </Layout>
    </>
  );
};

export default Home;
