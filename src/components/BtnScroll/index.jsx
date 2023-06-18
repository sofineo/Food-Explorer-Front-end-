import { Container } from './styles'

export function BtnScroll({overflowed, classNameBtn, icon: Icon, left, right, ...rest} ) {
  return (
    <Container overflowed={overflowed} left={left} right={right} {...rest}>
        <button className={classNameBtn}{...rest}> {Icon && <Icon size={24}/>} </button>
    </Container>
  )
}