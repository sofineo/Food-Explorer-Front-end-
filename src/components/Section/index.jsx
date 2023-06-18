import { Container } from './styles'


export function Section({ label, children, ...rest }) {
  return (
    <Container 
    {...rest}>
      <label htmlFor={label}>{label}</label>
      <div className="items" {...rest}>
        {children}
      </div>
    </Container>
  )
}