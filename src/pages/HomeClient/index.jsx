import { Container } from './styles'
import { HeaderClient } from '../../components/HeaderClient'
import { Footer } from '../../components/Footer'
import { AnimateOnScroll } from '../../components/AnimateOnScroll'
import { DishClient } from '../../components/DishClient'
import { FiChevronRight } from 'react-icons/fi'
import { useState, useEffect} from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router'
import imageMobile from '../../assets/ImageHomeMobile.png'
import imageDesktop from '../../assets/ImageHomeDesktop.png'
import { useLocation } from 'react-router-dom'


export function HomeClient({ newOrderPlaced }) {
   const location = useLocation();
   const queryParams = new URLSearchParams(location.search);
   const query = queryParams.get('q');
   const [dishes, setDishes] = useState([])
   const [favorites, setFavorites] = useState([])
   const [search, setSearch] = useState('')
   const [totalOrder, setTotalOrder] = useState(0)
   const [order, setOrder] = useState(0)
   const navigate = useNavigate()

   function handleSearch(searchValue) {
    setSearch(searchValue)
  }

   function handleClickOnDish(id) {
    navigate(`/details/${id}`)
   }

   async function handleClickOnButtonFavorite(id) {
    const alreadyFavorite = favorites.includes(id)
  
    if(alreadyFavorite){
      const filteredFavorites = favorites.filter(favorite => favorite !== id)
      await api.delete(`/favorite/${id}`)
      setFavorites(filteredFavorites)
    } else {
      setFavorites(prevState => [...prevState, id])
      await api.post(`/favorite/${id}`)
    }
   }

   useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`)
      setDishes(response.data)
    }

    fetchDishes()
  }, [search])

  useEffect(() => {
    async function fetchFavorites() {
      const response = await api.get(`/favorite`)
      const favoriteList = response.data.map( favorite => favorite.id )
      setFavorites(favoriteList)
    }

    fetchFavorites()

  }, [])

  useEffect(() => {
    if(query) {
      setSearch(query)
    }
  }, [])

  useEffect(() => {
    setTotalOrder(newOrderPlaced)
  }, [newOrderPlaced])
  return (
    <Container>
      <HeaderClient sendSearchValue={handleSearch} />
        <div className="page">
          <div className="image-text">
            <img className='img-Mobile' src={imageMobile} alt="vários macarons coloridos com frutas silvestres" />
            <img className='img-Desktop' src={imageDesktop} alt="vários macarons coloridos com frutas silvestres" />
            <div className="square"></div>
            <div className="text">
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
          </div>
          <div className="categories">
          { dishes.filter((dish) => (dish.category == 'Refeição')).length > 0 && (
            <div>
            <h2> Refeições </h2>
            <div className='box-dishes'>
            <AnimateOnScroll>
            {(dishes.filter(dish => dish.category == 'Refeição')).map( (dish) => (
              <DishClient 
                key={String(dish.id)}
                image={`${api.defaults.baseURL}/files/${dish.avatar}`}
                title={dish.name} 
                dishDescription={dish.description}
                priceTag={dish.price}
                icon={FiChevronRight}
                onClickDish={() => handleClickOnDish(dish.id)}
                onClickButtonFavorite={() => handleClickOnButtonFavorite(dish.id)}
                isActive={favorites.includes(dish.id)}
              />
              ))
            }
            </AnimateOnScroll>
            </div>
            </div>)}
            { dishes.filter((dish) => (dish.category == 'Sobremesa')).length > 0 && (
             <div>
             <h2> Sobremesas </h2>
             <div className='box-dishes'>
            <AnimateOnScroll>
            {(dishes.filter(dish => dish.category == 'Sobremesa')).map( (dish) => (
              <DishClient 
                key={String(dish.id)}
                image={`${api.defaults.baseURL}/files/${dish.avatar}`}
                title={dish.name} 
                dishDescription={dish.description}
                priceTag={dish.price}
                icon={FiChevronRight}
                onClickDish={() => handleClickOnDish(dish.id)}
                onClickButtonFavorite={() => handleClickOnButtonFavorite(dish.id)}
                newOrderPlaced={order}
                isActive={favorites.includes(dish.id)}
              />
              ))
            }
            </AnimateOnScroll>
            </div>
            </div>)}
            { dishes.filter((dish) => (dish.category == 'Bebida')).length > 0 && (
            <div>
                <h2> Bebidas </h2>
              <div className='box-dishes'>
            <AnimateOnScroll>
            {(dishes.filter(dish => dish.category == 'Bebida')).map( (dish) => (
              <DishClient 
                key={String(dish.id)}
                image={`${api.defaults.baseURL}/files/${dish.avatar}`}
                title={dish.name} 
                priceTag={dish.price}
                dishDescription={dish.description}
                icon={FiChevronRight}
                onClickDish={() => handleClickOnDish(dish.id)}
                onClickButtonFavorite={() => handleClickOnButtonFavorite(dish.id)}
                newOrderPlaced={order}
                isActive={favorites.includes(dish.id)}
              />
              ))
            }
            </AnimateOnScroll>
            </div>
            </div>)}
          </div>
        </div>
      <Footer />

    </Container>
  )
}