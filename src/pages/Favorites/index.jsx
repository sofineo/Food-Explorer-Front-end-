import { Container } from './styles'
import { HeaderClient } from '../../components/HeaderClient'
import { TextButton } from '../../components/TextButton'
import { FiChevronLeft } from 'react-icons/fi'
import { Footer } from '../../components/Footer'
import { useNavigate, useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { FavoritesItems } from '../../components/FavoriteItems'

export function Favorites() {
  const params = useParams()
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')


  const navigate = useNavigate()

  function handleSearch(searchValue) {
    setSearch(searchValue)
  }

  function handleButtonBack() {
    navigate(-1)
  }

  function handleClickOnDish(id) {
    navigate(`/details/${id}`)
   }

  async function handleButtonRemove(id) {
    const filteredData = data.filter(favorite => favorite.id !== id)
    await api.delete(`/favorite/${id}`)
    setData(filteredData)
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`/favorite`)
      setData(response.data)
    }

    fetchData()
  }, [])
  return (
    <Container>
      <HeaderClient sendSearchValue={handleSearch}/>
        <div className="page">
          <TextButton
              icon={FiChevronLeft}
              title='voltar'
              onClick={handleButtonBack}
              className='button-back'
          />
          <div className="content">
            <h1>Meus Favoritos</h1>
            <div className="favorites">
            { data.map(data => (
            <FavoritesItems 
            key={String(data.id)}
            data={data}
            onClickRemove={() => handleButtonRemove(data.id)}
            onClick={() => handleClickOnDish(data.id)}
            />
          ))}
            </div>
          </div>
        </div>
      <Footer />
    </Container>
  )
}