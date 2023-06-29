import { Container, MenuMobile, Header } from './styles'
import { FiSearch, FiHeart } from 'react-icons/fi'
import { Input } from '../Input'
import { useNavigate } from 'react-router'
import { useAuth } from '../../hooks/auth' 
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Footer } from '../Footer'


export function HeaderClient({ sendSearchValue, newOrderPlacedFromDetails}) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');
  const navigate = useNavigate()
  const { signOut } = useAuth()
  const [search, setSearch] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [totalOrder, setTotalOrder] = useState(0)

  function handleSearchValue(event) {
    const SearchValue = event.target.value
    setSearch(SearchValue)
    sendSearchValue(SearchValue)
  }

  function handleSearchEnter(event){
    if (event.key == 'Enter') {
      setIsMenuOpen(false)
      navigate(`/?q=${encodeURIComponent(search)}`)
    }
  }

  function handleButtonSignOut() {
    navigate('/')
    signOut()
  }
  
  function handleButtonFavorite() {
    navigate('/favorites')
  }

  function handleToggleMenu() {
    setIsMenuOpen((prevState) => !prevState)
  }

  useEffect(() => {
    if(query) {
      setSearch(query)
    }
  }, [])

  useEffect(() => {  
    async function newTotal() {
      const newTotalOrder = Number(totalOrder) + Number(newOrderPlacedFromDetails)
      console.log('newTotalOrder',newTotalOrder)
      setTotalOrder(newTotalOrder)
    }
    if(newOrderPlacedFromDetails) {
      newTotal()
    }
  }, [newOrderPlacedFromDetails])
  return (
    <Container>
     <Header className={`${ isMenuOpen ? 'hidden' : '' }`}>
      <div className={`content-header`}>
      <button
      type='button'
      className='menu'
      onClick={handleToggleMenu}
      >
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 1.00023C0 0.447944 0.447715 0.000228882 1 0.000228882H23C23.5523 0.000228882 24 0.447944 24 1.00023C24 1.55251 23.5523 2.00023 23 2.00023H1C0.447715 2.00023 0 1.55251 0 1.00023ZM0 9.00023C0 8.44794 0.447715 8.00023 1 8.00023H23C23.5523 8.00023 24 8.44794 24 9.00023C24 9.55251 23.5523 10.0002 23 10.0002H1C0.447715 10.0002 0 9.55251 0 9.00023ZM0 17.0002C0 16.4479 0.447715 16.0002 1 16.0002H23C23.5523 16.0002 24 16.4479 24 17.0002C24 17.5525 23.5523 18.0002 23 18.0002H1C0.447715 18.0002 0 17.5525 0 17.0002Z" fill="white"/>
        </svg>
      </button>

      <div className="logo">
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_96_6316)">
            <path d="M23.6574 0L42.4133 10.8287V32.4862L23.6574 43.3149L4.90155 32.4862V10.8287L23.6574 0Z" fill="currentColor"/>
            <path d="M5.40155 11.1174L23.6574 0.57735L41.9133 11.1174V32.1975L23.6574 42.7375L5.40155 32.1975V11.1174Z" stroke="black"/>
            </g>
            <defs>
            <filter id="filter0_d_96_6316" x="0.901367" y="0" width="45.5117" height="51.3149" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_96_6316"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_96_6316" result="shape"/>
            </filter>
            </defs>
        </svg>
        <div className="logotext">
          food explorer
        </div>
      </div>

      <Input 
        type="text" 
        className="search-bar"
        icon={FiSearch} 
        placeholder={`Busque por pratos ou ingredientes`}
        onChange={handleSearchValue}
        onKeyPress={handleSearchEnter}
        value={search}
        />

      <FiHeart size={30} className='favorite-button' onClick={handleButtonFavorite}/>

      <button 
      className="orders"
      >
          <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.96094 8C5.96094 7.44771 6.40865 7 6.96094 7H19.9609C20.5132 7 20.9609 7.44771 20.9609 8C20.9609 8.55228 20.5132 9 19.9609 9H6.96094C6.40865 9 5.96094 8.55228 5.96094 8Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M5.96094 12C5.96094 11.4477 6.40865 11 6.96094 11H19.9609C20.5132 11 20.9609 11.4477 20.9609 12C20.9609 12.5523 20.5132 13 19.9609 13H6.96094C6.40865 13 5.96094 12.5523 5.96094 12Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M1.04672 0.585787C1.4218 0.210714 1.9305 0 2.46094 0H24.4609C24.9914 0 25.5001 0.210714 25.8751 0.585787C26.2502 0.960861 26.4609 1.46957 26.4609 2V21C26.4609 21.3466 26.2815 21.6684 25.9867 21.8506C25.6918 22.0329 25.3237 22.0494 25.0137 21.8944L21.4609 20.118L17.9081 21.8944C17.6266 22.0352 17.2952 22.0352 17.0137 21.8944L13.4609 20.118L9.90815 21.8944C9.62662 22.0352 9.29525 22.0352 9.01372 21.8944L5.46094 20.118L1.90815 21.8944C1.59816 22.0494 1.23002 22.0329 0.935206 21.8506C0.64039 21.6684 0.460938 21.3466 0.460938 21V2C0.460938 1.46957 0.671652 0.960859 1.04672 0.585787ZM24.4609 2L2.46094 2L2.46094 19.382L5.01372 18.1056C5.29525 17.9648 5.62662 17.9648 5.90815 18.1056L9.46094 19.882L13.0137 18.1056C13.2952 17.9648 13.6266 17.9648 13.9081 18.1056L17.4609 19.882L21.0137 18.1056C21.2952 17.9648 21.6266 17.9648 21.9081 18.1056L24.4609 19.382V2Z" fill="white"/>
        </svg>
        <p className="p-mobile">{totalOrder}</p>
       <p className='p-desktop'>Pedidos (<span>{totalOrder}</span>)</p> 
      </button>

      <button 
      className="sign-out"
      onClick={handleButtonSignOut}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.75 11.75L27 17M27 17L21.75 22.25M27 17H13M13 28H6C5.73478 28 5.48043 27.8946 5.29289 27.7071C5.10536 27.5196 5 27.2652 5 27V7C5 6.73478 5.10536 6.48043 5.29289 6.29289C5.48043 6.10536 5.73478 6 6 6H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      </div>
      </Header>
      <MenuMobile className={`menu-mobile ${isMenuOpen ? '' : 'hidden'}`}>
        <header>
          <div className="btn-menu">
            <button onClick={handleToggleMenu}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.263604 0.263604C0.615076 -0.087868 1.18492 -0.087868 1.5364 0.263604L9 7.72721L16.4636 0.263604C16.8151 -0.087868 17.3849 -0.087868 17.7364 0.263604C18.0879 0.615076 18.0879 1.18492 17.7364 1.5364L10.2728 9L17.7364 16.4636C18.0879 16.8151 18.0879 17.3849 17.7364 17.7364C17.3849 18.0879 16.8151 18.0879 16.4636 17.7364L9 10.2728L1.5364 17.7364C1.18492 18.0879 0.615076 18.0879 0.263604 17.7364C-0.087868 17.3849 -0.087868 16.8151 0.263604 16.4636L7.72721 9L0.263604 1.5364C-0.087868 1.18492 -0.087868 0.615076 0.263604 0.263604Z" fill="currentColor"/>
              </svg>
            </button>
            <p>Menu</p>
          </div>
        </header>
        <div className="menu-options">
          <ul>
            <li>      
              <Input 
                type="text" 
                className="search-bar"
                icon={FiSearch} 
                placeholder={`Busque por pratos ou ingredientes`}
                onChange={handleSearchValue}
                onKeyPress={handleSearchEnter}
                value={search}
              />
            </li>
            <li>
            <button 
              className='txt-btn sign-out' 
              onClick={handleButtonFavorite}>
              Favoritos 
            </button>
            </li>
            <li>
            <button 
              className='txt-btn sign-out' 
              onClick={handleButtonSignOut}>
              Sair 
            </button>
            </li>
          </ul>
        </div>
        <Footer/>
      </MenuMobile>
    </Container>
  )
}