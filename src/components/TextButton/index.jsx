import { Container } from './styles'

export function TextButton({ icon: Icon, title, ...rest}) {
  return (
    <Container 
    typeof='button'
    {...rest}>
      {Icon && <Icon size={24}/>}
      {title}
    </Container>
  )
}