import { Button, Carousel, Typography } from 'antd'
import React from 'react'
import slideOne from '../assets/01.jpg'
import slideTwo from '../assets/02.jpg'
import slideThree from '../assets/03.jpg'

export interface Slide {
  image: string
  gradient?: string
  data: {
    title: string
    description: string
    link?: {
      title: string
      location: string
    }
  }
}

const slides: Slide[] = [
  {
    image: slideOne,
    gradient:
      'linear-gradient(90deg, hsla(340, 80%, 69%, 0.2) 0%, hsla(15, 93%, 71%, 0.2) 100%)',
    data: {
      title: 'Lorem dolor',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa fuga incidunt hic officia earum debitis.',
      link: {
        title: 'Visit this',
        location: '#',
      },
    },
  },
  {
    image: slideTwo,
    gradient:
      'linear-gradient(90deg, hsla(340, 80%, 69%, 0.2) 0%, hsla(15, 93%, 71%, 0.2) 100%)',
    data: {
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa fuga incidunt hic officia earum debitis.',
      link: {
        title: 'Visit this',
        location: '#',
      },
    },
  },
  {
    image: slideThree,
    gradient:
      'linear-gradient(90deg, hsla(340, 80%, 69%, 0.2) 0%, hsla(15, 93%, 71%, 0.2) 100%)',
    data: {
      title: 'Lorem ipsum dolor',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa fuga incidunt hic officia earum debitis.',
    },
  },
]

const FullCarousel = () => {
  return (
    <Carousel
      style={{
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        zIndex: -10,
        padding: 0,
        margin: 0,
        overflow: 'hidden',
      }}
      autoplaySpeed={4000}
      arrows={true}
      effect='fade'
      autoplay={true}
      afterChange={(a: number) => console.log(a)}>
      {slides.map((slide, i) => (
        <div key={i}>
          <div
            style={{
              backgroundImage: `${slide.gradient}, url(${slide.image})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
              width: '100vw',
              padding: 0,
              margin: 0,
              filter: 'blur(1px)',
              overflow: 'hidden',
            }}
          />
          {slide.data.title && (
            <div
              style={{
                position: 'absolute',
                top: '55%',
                left: '10%',
                transform: 'transale(-55%, -10%)',
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '1rem',
                borderRadius: '1em',
                width: '260px',
              }}>
              <Typography.Title level={3}>{slide.data.title}</Typography.Title>
              <Typography.Text>{slide.data.description}</Typography.Text>
              {slide.data.link && (
                <Button
                  style={{ display: 'block', margin: '10px 0px' }}
                  href={slide.data.link.location}
                  type='primary'>
                  {slide.data.link.title}
                </Button>
              )}
            </div>
          )}
        </div>
      ))}
    </Carousel>
  )
}

export default FullCarousel
