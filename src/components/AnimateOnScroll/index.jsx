import { Container, DishesItems } from './styles'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect, useRef } from 'react'
import { ShadowEffectScroll } from '../ShadowEffectScroll'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'


export function AnimateOnScroll({ children, sendScrollEffectValue,...rest }) {
  const [refAnimation, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  })
  const [showScrollEffect, setShowScrollEffect] = useState(false)
  const divRef = useRef(null)

  function slideLeft() {
    const slider = divRef.current;
    slider.scrollLeft = slider.scrollLeft - 250;
  };

  function slideRight() {
    const slider = divRef.current;
    slider.scrollLeft = slider.scrollLeft + 250;
  };

  useEffect(() => {
    const divElement = divRef.current

    if (divElement.scrollWidth > divElement.clientWidth) {
      setShowScrollEffect(true)
    }
  }, [showScrollEffect])

  return (
    <Container>
      <div>
      <ShadowEffectScroll 
      left
      className={`shadow ${showScrollEffect ? '' : 'hide'}`}
      icon={FiChevronLeft}
      />
      <ShadowEffectScroll 
      right
      className={`shadow  ${showScrollEffect ? '' : 'hide'}`}
      icon={FiChevronRight} 
      />
      </div >
      <div className={`icon left ${showScrollEffect ? '' : 'hide'}`}><FiChevronLeft onClick={slideLeft}/></div>
      <DishesItems 
      ref={divRef}
      className={`dishes-section ${showScrollEffect ? '' : ''}`}
      {...rest}>
        <div
        ref={refAnimation} 
        className={`dishes ${inView ? 'animate' : ''}`}
        >
          {children}
        </div>
      </DishesItems>
      <div className={`icon right ${showScrollEffect ? '' : 'hide'}`}><FiChevronRight onClick={slideRight}/></div>
    </Container>
  )
}
