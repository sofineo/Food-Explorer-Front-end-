import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './styles'

export function IngredientItem({ size, isNew, value, onClick, ...rest}) {
  return (
    <Container
      isNew={isNew}
      {...rest}>
          <input 
            type="text"
            value={value}
            readOnly={!isNew}
            {...rest} 
            size={size}
            />

          <button
            type='button'
            onClick={onClick}
            className={ isNew ? 'button-add' : 'button-delete'}
            >

              { isNew ? <FiPlus/> : <FiX/> }
          </button>
    </Container>
  )
}