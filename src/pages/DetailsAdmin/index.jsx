import { Container } from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { TextButton } from '../../components/TextButton'
import { FiChevronLeft } from 'react-icons/fi'
import { Footer } from '../../components/Footer'
import { useNavigate, useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

export function DetailsAdmin() {
  const params = useParams()
  const [data, setData] = useState({})
  const [ingredients, setIngredients] = useState([])
  const [search, setSearch] = useState('')

  const avatarUrl = data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : 'none'

  const navigate = useNavigate()

  function handleSearch(searchValue) {
    setSearch(searchValue)
  }

  function handleButtonBack() {
    navigate(-1)
  }

  function handleButtonEdit() {
    navigate(`/details/${params.id}/edit`)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
      setIngredients(response.data.ingredients.map(ingredient => {return ingredient.name}))
    }

    fetchDish()
  }, [])

  return (
    <Container>
      <HeaderAdmin sendSearchValue={handleSearch}/>
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
            <div className='button'>
              <button
                type='button'
                onClick={handleButtonEdit}
              >
                Editar prato
              </button>
            </div>
            </div>
          </div>
        </div>
      <Footer />
    </Container>
  )
}