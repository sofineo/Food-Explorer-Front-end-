import { Container } from './styles'
import { HeaderClient } from '../../components/HeaderClient'
import { TextButton } from '../../components/TextButton'
import { FiChevronLeft } from 'react-icons/fi'
import { Footer } from '../../components/Footer'
import { useNavigate, useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { toast } from 'react-toastify';

export function DetailsClient() {
  const params = useParams()
  const [data, setData] = useState({})
  const [ingredients, setIngredients] = useState([])
  const [search, setSearch] = useState('')
  let [total, setTotal] = useState('01')
  const [newOrder, setNewOrder] = useState(0)
  const [price, setPrice] = useState('')

  const avatarUrl = data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : 'none'

  function handlePlusButton() {
    const newTotal = (String(Number(total) + 1)).padStart(2, '0')
    const newPrice = (Number(String(price).replace(',', '.')) + Number(data.price.replace(',', '.'))).toFixed(2)
    setTotal(newTotal)
    setPrice(newPrice.replace('.', ','))
  }

  function handleMinusButton() {
    const newTotal = (String(Number(total) - 1)).padStart(2, '0')
    const newPrice = (Number(String(price).replace(',', '.')) - Number(data.price.replace(',', '.'))).toFixed(2)
    if(Number(newTotal) < 1) {
      return
    }
    setTotal(newTotal)
    setPrice(newPrice.replace('.', ','))
  }

  const navigate = useNavigate()

  function handleSearch(searchValue) {
    setSearch(searchValue)
  }

  function handleButtonBack() {
    navigate(-1)
  }

  function handleAddDish() {
    setNewOrder(Number(total))
    console.dir(Number(total))
    Number(total) == 1 ? toast(`${Number(total)}x item foi adicionado aos pedidos.`) : toast(`${Number(total)}x itens foram adicionados aos pedidos.`)
    navigate('/')
  }
  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
      setIngredients(response.data.ingredients.map(ingredient => {return ingredient.name}))
      setPrice(response.data.price)
    }

    fetchDish()
  }, [])
  return (
    <Container>
      <HeaderClient sendSearchValue={handleSearch} newOrderPlacedFromDetails={newOrder}/>
        <div className="page">
          <TextButton
              icon={FiChevronLeft}
              title='voltar'
              onClick={handleButtonBack}
              className='button-back'
          />
          <div className="content">
            <div className="dish-avatar">
              <img src={avatarUrl} alt={`Imagem do prato ${data.name}`} />
            </div>
            <div className="dish-details">
            <h1>{data.name}</h1>
            <p>{data.description}</p>
            <div className="ingredients">
              {ingredients.map((ingredient, index) => (<span key={String(index)}>{
              ingredient}</span>))}
            </div>
            <div className="bts-wrapper">
              <div className="bts-add-remove">
                <button className="minus" onClick={handleMinusButton}>
                <svg width="18" height="2" viewBox="0 0 18 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 1C0 0.447715 0.335786 0 0.75 0H17.25C17.6642 0 18 0.447715 18 1C18 1.55228 17.6642 2 17.25 2H0.75C0.335786 2 0 1.55228 0 1Z" fill="currentColor"/>
                </svg>
                </button>
                <p className='quantities'>{total}</p>
                <button className="plus" onClick={handlePlusButton}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4 13C4 12.5858 4.33579 12.25 4.75 12.25H21.25C21.6642 12.25 22 12.5858 22 13C22 13.4142 21.6642 13.75 21.25 13.75H4.75C4.33579 13.75 4 13.4142 4 13Z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M13 4C13.4142 4 13.75 4.33579 13.75 4.75V21.25C13.75 21.6642 13.4142 22 13 22C12.5858 22 12.25 21.6642 12.25 21.25V4.75C12.25 4.33579 12.5858 4 13 4Z" fill="currentColor"/>
                  </svg>
                </button>
              </div>
              <button className='add-to-order' onClick={handleAddDish}>
                <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.96094 8C5.96094 7.44771 6.40865 7 6.96094 7H19.9609C20.5132 7 20.9609 7.44771 20.9609 8C20.9609 8.55228 20.5132 9 19.9609 9H6.96094C6.40865 9 5.96094 8.55228 5.96094 8Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.96094 12C5.96094 11.4477 6.40865 11 6.96094 11H19.9609C20.5132 11 20.9609 11.4477 20.9609 12C20.9609 12.5523 20.5132 13 19.9609 13H6.96094C6.40865 13 5.96094 12.5523 5.96094 12Z" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.04672 0.585787C1.4218 0.210714 1.9305 0 2.46094 0H24.4609C24.9914 0 25.5001 0.210714 25.8751 0.585787C26.2502 0.960861 26.4609 1.46957 26.4609 2V21C26.4609 21.3466 26.2815 21.6684 25.9867 21.8506C25.6918 22.0329 25.3237 22.0494 25.0137 21.8944L21.4609 20.118L17.9081 21.8944C17.6266 22.0352 17.2952 22.0352 17.0137 21.8944L13.4609 20.118L9.90815 21.8944C9.62662 22.0352 9.29525 22.0352 9.01372 21.8944L5.46094 20.118L1.90815 21.8944C1.59816 22.0494 1.23002 22.0329 0.935206 21.8506C0.64039 21.6684 0.460938 21.3466 0.460938 21V2C0.460938 1.46957 0.671652 0.960859 1.04672 0.585787ZM24.4609 2L2.46094 2L2.46094 19.382L5.01372 18.1056C5.29525 17.9648 5.62662 17.9648 5.90815 18.1056L9.46094 19.882L13.0137 18.1056C13.2952 17.9648 13.6266 17.9648 13.9081 18.1056L17.4609 19.882L21.0137 18.1056C21.2952 17.9648 21.6266 17.9648 21.9081 18.1056L24.4609 19.382V2Z" fill="white"/>
                </svg>
                {` pedir ∙ R$ ${price}`}
              </button>
             </div>
            </div>
          </div>
        </div>
      <Footer />
    </Container>
  )
}