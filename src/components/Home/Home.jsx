import App from "App";
// import {
//   BrowserRouter as Router
// } from "react-router-dom";
import React, { Component } from "react";

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();

    this.state = {
      shouldShowMain: false,
    };

    this.showAppMain = this.showAppMain.bind(this);
  }

  showAppMain() {
    console.log("Silk board clicked");
    this.setState({ shouldShowMain: true });
  }

  render() {
    if (this.state.shouldShowMain) {
      return <App />;
    }
    return (
      <div classNameName="row ">
        <div classNameName="medium-12 columns">
          <div className="hero_area">
            <div className="hero_bg_box">
              <img src="images/hero-bg.jpg" alt="" />
            </div>
            <header className="header_section">
              <div className="container">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                  <a className="navbar-brand" href="/">
                    <span> Re:Double </span>
                  </a>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className=""> </span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item active">
                        <a className="nav-link" href="/">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="about.html">
                          {" "}
                          About
                        </a>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link" href="learncrypto.html">
                          {" "}
                          Learn Defi
                        </a>
                      </li>

                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="https://redouble-finance.medium.com/"
                        >
                          {" "}
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                          Contact Us
                        </a>
                      </li>
                      {/* <form className="form-inline justify-content-center">
                        <button
                          className="btn my-2 my-sm-0 nav_search-btn"
                          type="submit"
                        >
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                      </form> */}
                    </ul>
                  </div>
                </nav>
              </div>
            </header>
            <section className="slider_section">
              {/*<div
                id="customCarousel1"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    */}
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-md-5">
                    <div className="detail-box">
                      <h4 className="text-white">
                        LIQUID · SEAMLESS · REWARDING <br />
                      </h4>
                      <br />
                      <h1 className = "text-warning">
                        RE:DOUBLE
                      </h1>
                      <h2 className="text-white">
                        Where Your Crypto Journey Begins <br />
                        
                      </h2>
                      <br />
                      
                      A intuitive liquid investment platform for crypto beginners, offering better than bank returns, 
                      <br/>
                      educational resources and seamless onboarding.
                      <br/>
                      <br/>
                      <br/>
                      <div className="btn-box">
                        {/* <a href="" className="btn1">
                                {" "}
                                Launch App{" "}
                              </a> */}
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={this.showAppMain}
                        >
                          Launch App
                        </button>
                      </div>  
                      {/*<div className="col-md-7 col-md-5">
                        <div className="detail-box">
                          <h4 className="text-white">
                            How are you
                           </h4>
                        </div>
                            </div>  */}      
                      
                    </div>
                  </div>
                </div>
              </div>
              {/*
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8 col-lg-7">
                          <div className="detail-box">
                            <h1>
                              Secured <br />
                            </h1>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Odio omnis fugit, sed tempora praesentium
                              commodi error, hic recusandae repudiandae neque ad
                              molestias, atque
                            </p>
                            <div className="btn-box">
                              {/* <a href="" className="btn1">
                                {" "}
                                Launch App{" "}
                              </a> */}
              {/*<button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.showAppMain}
                              >
                                Launch App
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8 col-lg-7">
                          <div className="detail-box">
                            <h1>
                              Rewarding
                              <br />
                            </h1>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Odio omnis fugit, sed tempora praesentium
                              commodi error, hic recusandae repudiandae neque ad
                              molestias, atque veritatis labore quae eveniet
                              autem in
                            </p>
                            <div className="btn-box">
                              {/* <a href="" className="btn1">
                                {" "}
                                Launch App{" "}
                              </a> */}
              {/*<button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.showAppMain}
                              >
                                Launch App
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="carousel_btn-box">
                    <a
                      className="carousel-control-prev"
                      href="#customCarousel1"
                      role="button"
                      data-slide="prev"
                    >
                      <i className="fa fa-arrow-left" aria-hidden="true"></i>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#customCarousel1"
                      role="button"
                      data-slide="next"
                    >
                      <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                            </div>*/}
            </section>
          </div>

          <section className="service_section layout_padding">
            <div className="service_container">
              <div className="container">
                <div className="heading_container heading_center">
                  <h2>WHY RE:DOUBLE?</h2>
                </div>
                <div className="row">
                  <div className="col-md-6 col-lg-3">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/s12.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5>BETTER THAN YOUR BANK'S RETURNS</h5>
                        <p>
                          Earn up to 9% APY which is 10x more than keeping your
                          money idle in your savings account or locking it up in
                          a fixed deposit account. Maximise the growth of your
                          capital with zero deposit fees, no minimum deposit and
                          no lock in period.
                        </p>
                        <a href=""></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/s13.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5>Seamless exchange & Deposit</h5>
                        <p>
                          Enjoy seamless fiat to crypto exchange via the Ramp
                          integration. Buy supported coins directly with any
                          major credit or debit card and even create a wallet
                          seamlessly if you need to while you're at it. <br />
                          <br />
                        </p>
                        <a href=""> </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/s11.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5>Chasing the best yields for you</h5>
                        <p>
                          Effortless access to only the best yields that
                          decentralised finance has to offer. We chase the best
                          returns from the most secure protocols in the market
                          so you don't have to. <br />
                          
                          <br />
                        </p>
                        <a href=""></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="box">
                      <div className="img-box">
                        <img src="images/s14.png" alt="" />
                      </div>
                      <div className="detail-box">
                        <h5>Your capital, assured.</h5>
                        <p>
                          We prioritise the security of your deposits by only
                          working with the most secure and proven yield sources
                          which utilise stable coins which are pegged against a
                          real asset, the US Dollar. <br />
                          <br />
                        </p>
                        <a href=""></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about_section about_section1 layout_padding-bottom">
            <div className="container">
              <div className="row">
                
                  <div className="col-lg-8">
                {/*<div className="width: 50%; min-width: 400px; float: right">
                {/*!-- instructions video -->*/}
                {/*<div className="
                  background-color: rgb(241, 215, 255);
                  padding: 15px;
                  margin: 0 2% 4% 0;
                  "
                  >*/}
                  <div className="heading_container heading_center">
                  <h2>
                    Our Step-by-Step Instruction Video</h2>
                  </div>
                  <div className="video">
                  <iframe src="https://www.youtube.com/embed/dyg81soRNkQ"
                  
                  width= {800} 
                  height= {500}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  ></iframe>
                  </div>
                  </div>
              {/*<div classNameName="img-box">
                    <img src="images/about-img.jpg" alt="" />
                  </div>
                </div>
                <div classNameName="col-lg-6">
                  <div classNameName="detail-box">
                    <div classNameName="heading_container">
                      <h2>
                        About <span>Us</span>
                      </h2>
                    </div>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All
                    </p>
                    <a href=""> Read More </a>
                          </div></div>
                </div>*/}
              </div>
            </div>
          </section>

          {/*<section classNameName="about_section about_section2 layout_padding-bottom">
            <div classNameName="container">
              <div classNameName="row">
                <div classNameName="col-lg-6">
                  <div classNameName="detail-box">
                    <div classNameName="heading_container">
                      <h2>Insured by Nexus Mutual</h2>
                    </div>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All
                    </p>
                    <a href=""> Read More </a>
                  </div>
                </div>
                <div classNameName="col-lg-6">
                  <div classNameName="img-box">
                    <img src="images/about-img2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*<section classNameName="client_section layout_padding">
            <div classNameName="container">
              <div classNameName="heading_container heading_center">
                <h2>What Says Our Client</h2>
                <hr />
              </div>
              <div
                id="carouselExample2Controls"
                classNameName="carousel slide"
                data-ride="carousel"
              >
                <div classNameName="carousel-inner">
                  <div classNameName="carousel-item active">
                    <div classNameName="row">
                      <div classNameName="col-lg-7 col-md-9 mx-auto">
                        <div classNameName="client_container">
                          <div classNameName="detail-box">
                            <p>
                              It's a breeze to invest in crypto on re:double.
                              Can buy crypto with cards right on site. Just a
                              few clicks and I'm done. Very friendly to use,
                              even for newbies like me.
                              <span>
                                <i
                                  classNameName="fa fa-quote-right"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </p>
                          </div>
                          <div classNameName="client_id">
                            <div classNameName="img-box">
                              <img src="images/client.jpg" alt="" />
                            </div>
                            <div classNameName="client_name">
                              <h5>Benny Mark</h5>
                              <h6>Client</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div classNameName="carousel-item">
                    <div classNameName="row">
                      <div classNameName="col-lg-7 col-md-9 mx-auto">
                        <div classNameName="client_container">
                          <div classNameName="detail-box">
                            <p>
                              Crypto investment is risky but if the principal is
                              assured, I don't see why anyone wouldn't. Just
                              look at the attractive returns! Ermm..especially
                              when you compare it to the bank rates ;)
                              <span>
                                <i
                                  classNameName="fa fa-quote-right"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </p>
                          </div>
                          <div classNameName="client_id">
                            <div classNameName="img-box">
                              <img src="images/client2.jpg" alt="" />
                            </div>
                            <div classNameName="client_name">
                              <h5>Aurora Ang</h5>
                              <h6>Client</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div classNameName="carousel-item">
                    <div classNameName="row">
                      <div classNameName="col-lg-7 col-md-9 mx-auto">
                        <div classNameName="client_container">
                          <div classNameName="detail-box">
                            <p>
                              I am a lazy investor but feel crypto is the
                              future. Re:double is certainly the go-to platform
                              for investors like me; just stash, forget and
                              earn. Let them do the hard work..haha..
                              <span>
                                <i
                                  classNameName="fa fa-quote-right"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </p>
                          </div>
                          <div classNameName="client_id">
                            <div className="img-box">
                              <img src="images/client3.jpg" alt="" />
                            </div>
                            <div className="client_name">
                              <h5>Joseph Fernandes</h5>
                              <h6>Client</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 <div className="carousel_btn-box">
            <a
              className="carousel-control-prev"
              href="#carouselExample2Controls"
              role="button"
              data-slide="prev"
            >
              <span>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
              </span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExample2Controls"
              role="button"
              data-slide="next"
            >
              <span>
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </span>
              <span className="sr-only">Next</span>
            </a>
          </div> 
              </div>
            </div>
                            </section>*/}

          <section className="info_section ">
            <div className="container">
              <div className="info_top ">
                <div className="row ">
                  <div className="col-md-7 col-lg-4">
                    <div className="info_detail">
                      <a href="index.html">
                        <h4>Re:Double</h4>
                      </a>
                      <p>
                        A liquid insured investment platform offering better
                        than bank returns, built on and invested in blockchain
                        technology to serve the masses.
                      </p>
                      <div className="social_box">
                        <a href="">
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="https://twitter.com/RedoubleFi">
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="https://redouble-finance.medium.com/">
                          <i className="fa fa-medium" aria-hidden="true"></i>
                        </a>
                        {/* <a href="">
                          <i
                            className="fa fa-youtube-play"
                            aria-hidden="true"
                          ></i>
                        </a> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 col-lg-4 col-xl-3 mx-auto">
                    <h4>Contact us</h4>
                    <p>88 Kent Ridge Road Singapore 119088</p>
                    <div className="contact_nav">
                      <a href="">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        <span>Location</span>
                      </a>
                      <a href="">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <span>Call : +65 12345678</span>
                      </a>
                      <a href="">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                        <span>Email : redouble.finance@gmail.com</span>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="info_form">
                      <h4>SIGN UP TO OUR NEWSLETTER</h4>
                      <form action="">
                        <input type="text" placeholder="Enter Your Email" />
                        <button type="submit">Subscribe</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="footer_section">
            <div className="container">
              <p>
                &copy; <span id="displayYear"></span> All Rights Reserved By
                <a href="https://html.design/"> Redouble</a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default Home;
