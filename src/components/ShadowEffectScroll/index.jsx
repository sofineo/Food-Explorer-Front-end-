import { Container } from './styles'

export function ShadowEffectScroll({className, icon: Icon, left, right, ...rest} ) {
  return (
    <Container left={left} right={right} {...rest}>
        <button className={className}{...rest}> {Icon && <Icon size={24}/>} </button>
    </Container>
  )
}