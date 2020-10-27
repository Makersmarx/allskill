import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import SocialLinks from '../components/SocialLinks';
// import Subscribe from '../components/Subscribe';
import Header from '../components/Header';
import tools from '../assets/images/tools.jpg';
import demoImage1 from '../assets/images/demo-image-01.jpg';
import demoImage2 from '../assets/images/demo-image-02.jpg';
import remodel1 from '../assets/images/remodel1.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <section id="about" className="about-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Our Services</h2>
            <p className="text-white-50">
              Residential or Commercial We've got all your needs covered: from
              residential remodels, to commercial damage repairs and everything
              in between. Don't hesitate to ask us a question or inquire as to
              why a certain process has to take place. All of our staff are
              friendly and knowledgeable because we know what it's like to be in
              your shoes. We want you to know just how special you and your
              project are to us, so we do our very best to ensure that you and
              your needs always come first. We even have a complimentary
              estimate where we'll come out to you!
            </p>
          </div>
        </div>
        <img src={tools} className="img-fluid" alt="" />
      </div>
    </section>

    <section id="projects" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          <div className="col-xl-8 col-lg-7">
            <img className="img-fluid mb-3 mb-lg-0" src={remodel1} alt="" />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Remodel</h4>
              <p className="text-black-50 mb-0">
                We have built our livelihoods on remodeling people's homes. From
                the simple to the lavish, we've experienced it all and we can
                help you every step of the way. No job is too small or too big
                for our knowledgeable crews. We've happily done it all since
                2005!
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage1} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Design</h4>
                  <p className="mb-0 text-white-50">
                    Whether it's getting your home remodeled or fixing damage
                    that's been done to your home, we're here to help you every
                    step of the way.
                  </p>
                  <hr className="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center no-gutters">
          <div className="col-lg-6">
            <img className="img-fluid" src={demoImage2} alt="" />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">Our Promise</h4>
                  <p className="mb-0 text-white-50">
                    Our work is good. We promise. And behind that promise, we
                    want you to know that we back our work with a satisfaction
                    guarantee. We won't stop working until you like what we've
                    done.
                  </p>
                  <hr className="d-none d-lg-block mb-0 mr-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SocialLinks />
    <Footer />
  </Layout>
);

export default IndexPage;
