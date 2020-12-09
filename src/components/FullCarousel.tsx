import { Carousel } from 'antd'
import React from 'react'
import slideOne from '../assets/01.jpg'
import slideTwo from '../assets/02.jpg'
import slideThree from '../assets/03.jpg'

export interface Slide {
  image: string
  gradient: string
}

const slides: Slide[] = [
  {
    image: slideOne,
    gradient:
      'linear-gradient(90deg, hsla(340, 80%, 69%, 0.2) 0%, hsla(15, 93%, 71%, 0.2) 100%)',
  },
  {
    image: slideTwo,
    gradient:
      'linear-gradient(90deg, hsla(340, 80%, 69%, 0.2) 0%, hsla(15, 93%, 71%, 0.2) 100%)',
  },
  {
    image: slideThree,
    gradient:
      'linear-gradient(90deg, hsla(340, 80%, 69%, 0.2) 0%, hsla(15, 93%, 71%, 0.2) 100%)',
  },
]

const FullCarousel = () => {
  return (
    <div>
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
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default FullCarousel
