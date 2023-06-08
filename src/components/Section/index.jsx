import { Container } from './styles'

export function Section({ label, children, ...rest }) {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <div className="items">
        {children}
      </div>
    </Container>
  )
}