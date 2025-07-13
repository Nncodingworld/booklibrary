import React from 'react';
import monk from '../assets/monk.png';
import atom from '../assets/atom.png';
import invisible from '../assets/invisible.png';

const slides = [
  {
    id: 1,
    image: invisible,
    title: 'Adventures Await',
    story: '"Adventures wait" is a short and inspiring phrase that evokes the excitement of stepping into the unknown. It suggests that life is full of opportunities, discoveries, and new experiences just beyond your comfort zone. Often used in travel, motivational, or personal growth contexts, it serves as a reminder to embrace change, take risks, and explore the world with curiosity and courage.',
  },
  {
    id: 2,
    image: atom,
    title: 'Motivation Unleashed',
    story: 'Atomic Habits by James Clear is a bestselling self-help book focused on the power of small, consistent changes. The core idea is that tiny habits, when repeated regularly, can lead to remarkable long-term results. Clear explains how habits are formed and provides a practical framework based on four steps: Cue, Craving, Response, and Reward. He introduces strategies like habit stacking, environment design, and identity-based habits to help readers build good routines and break bad ones. The book is widely praised for its clear writing, actionable advice, and real-world examples.',
  },
  {
    id: 3,
    image: monk,
    title: 'The Journey Begins',
    story: 'The Monk Who Sold His Ferrari by Robin Sharma is a self-help and personal development book that tells the story of Julian Mantle, a successful lawyer who suffers a heart attack and reevaluates his life. He sells his possessions, including his Ferrari, and travels to India in search of a more meaningful existence. Through his journey, he learns timeless principles of happiness, balance, and spiritual enlightenment from Himalayan sages. The book presents these lessons in a simple, story-based format, emphasizing mindfulness, purpose, and personal growth.',
    
  },
];

const BookStoryCarousel = () => {
  return (
    <div className="container-fluid story py-5">
      <h3>  Stories That Inspire Growth</h3>
      <p className='storypara'> Explore timeless lessons through captivating books that spark transformation.Whether it's discovering purpose, <br/>building habits, or stepping into the unknown,  each story invites you to reflect, grow, and take action toward a better you.</p>
    
      <div
        id="bookStoryCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="7000"
      >
        
        <div className="carousel-indicators ">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#bookStoryCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active custom-dot' : 'custom-dot'}
              aria-current={index === 0}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="row align-items-center">
         
                <div className="col-12 col-md-6">
                  <img
                    src={slide.image}
                    className="d-block w-100 story-img"
                    alt={slide.title}
                  />
                </div>
         
                <div className="col-12 col-md-6">
                  <div className="story-text p-4">
                    <h3 className="story-title">{slide.title}</h3>
                    <p className="story-description">{slide.story}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

  
      <style jsx>{`
        .carousel-indicators [data-bs-target] {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(157, 115, 127, 1);
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .carousel-indicators .active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default BookStoryCarousel;
