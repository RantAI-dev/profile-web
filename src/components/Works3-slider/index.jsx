import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import booksData from '../../data/sections/works3Slider.json';

const Works3Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="work-carousel section-padding caroul simpl sub-bg position-re">
      <div className="container-fluid">
        <div className="sec-head custom-font text-center">
          <h6>RantAI Publishing</h6>
          <h3>Our Books.</h3>
        </div>
        <div className="row">
          <div className="col-lg-12 no-padding">
            <div className="embla">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  {booksData.map((book) => (
                    <div key={book.id} className="embla__slide slider-item">
                      <a href={book.slug} className="d-block">
                        <div className="content">
                          <div 
                            className="custom-img-container position-relative" 
                            style={{ backgroundImage: `url('${book.image}')` }}
                          >
                            <div className="image-gradient-overlay"></div>
                          </div>
                          <div className="cont">
                            <h6>{book.title}</h6>
                            <h4>{book.secTex}</h4>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                className="embla__prev" 
                onClick={scrollPrev}
                style={{ display: 'block', position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer' }}
              >
                ‹
              </button>
              <button 
                className="embla__next" 
                onClick={scrollNext}
                style={{ display: 'block', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer' }}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .embla {
          position: relative;
          overflow: hidden;
          width: 100%;
        }

        .embla__viewport {
          overflow: hidden;
          width: 100%;
        }

        .embla__container {
          display: flex;
        }

        .embla__slide {
          position: relative;
          min-width: 25%; /* Adjust based on the number of slides to show */
          padding: 0 10px; /* Adds margin between slides */
        }

        @media (max-width: 767px) {
          .embla__slide {
            min-width: 100%; /* Show one slide at a time on small screens */
          }
        }

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

        .embla__prev,
        .embla__next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #fff;
          font-size: 24px;
          z-index: 1;
        }

        .embla__prev {
          left: -50px; /* Adjust for better positioning */
        }

        .embla__next {
          right: -50px; /* Adjust for better positioning */
        }
      `}</style>
    </section>
  );
};

export default Works3Slider;
