import { Container } from './styles'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'
import { BtnScroll } from '../../components/BtnScroll'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'


export function AnimateOnScroll({ children, sendScrollEffectValue,...rest }) {
  const [refAnimation, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  })
  const [showScrollEffect, setShowScrollEffect] = useState(false)
  const divRef = useRef(null)

  useEffect(() => {
    const divElement = divRef.current

    if (divElement.scrollWidth > divElement.clientWidth) {
      setShowScrollEffect(true)
    }
  }, [showScrollEffect])

  return (
    <div>
      <div>
      <BtnScroll 
      left
      classNameBtn={`btn-scroll btn-scroll-left ${showScrollEffect ? 'scroll-visible' : 'hide'}`}
      icon={FiChevronLeft}
      overflowed={`${showScrollEffect ? true : false}`}
      />
      <BtnScroll 
      right
      classNameBtn={`btn-scroll btn-scroll-right ${showScrollEffect ? 'scroll-visible' : 'hide'}`}
      icon={FiChevronRight} 
      overflowed={`${showScrollEffect ? true : false}`}
      />
      </div>
    <Container 
    ref={divRef}
    className={`dishes-section ${showScrollEffect ? 'scroll-visible' : ''}`}
    {...rest}>
      <div
      ref={refAnimation} 
      className={`dishes ${inView ? 'animate' : ''}`}
      >
        {children}
      </div>
    </Container>
    </div>
  )
}
