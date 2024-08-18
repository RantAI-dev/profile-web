import { useRef } from 'react';
import Link from 'next/link';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import slides from '../../data/sections/works3Slider.json';

import "swiper/css";
import "swiper/css/navigation";
import Split from "../Split";

SwiperCore.use([Navigation]);

const Works3Slider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className="work-carousel section-padding caroul simpl sub-bg position-re">
      <div className="container-fluid">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">RantAI Publishing</h6>
          <Split>
            <h3 className="wow" data-splitting>Our Books.</h3>
          </Split>
        </div>
        <div className="row">
          <div className="col-lg-12 no-padding">
            <Swiper
              className="swiper-wrapper"
              slidesPerView={4}
              spaceBetween={0}
              loop={true}
              speed={1000}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0
                },
                767: {
                  slidesPerView: 2,
                  spaceBetween: 0
                },
                991: {
                  slidesPerView: 3,
                  spaceBetween: 0
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 0
                }
              }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;

                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
            >
              {
                slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <Link href={slide.slug}>
                      <a className="d-block">
                        <div className="content wow fadeInUp" data-wow-delay=".3s">
                          <div 
                            className="custom-img-container wow imago position-relative" 
                            style={{ backgroundImage: `url('${slide.image}')` }}
                          >
                            <div className="image-gradient-overlay"></div>
                          </div>
                          <div className="cont">
                            <h6>{ slide.title }</h6>
                            <h4>{ slide.secTex }</h4>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </SwiperSlide>
                ))
              }
            </Swiper>

            <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer" ref={navigationNextRef}>
              <i className="ion-ios-arrow-right"></i>
            </div>
            <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer" ref={navigationPrevRef}>
              <i className="ion-ios-arrow-left"></i>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-img-container {
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          width: 100%;
          height: 600px; /* Adjust the height as necessary */
          position: relative;
          display: flex;
          align-items: flex-end; /* Align gradient to the bottom */
        }

        .image-gradient-overlay {
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
        }

        .d-block {
          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </section>
  )
}

export default Works3Slider;
