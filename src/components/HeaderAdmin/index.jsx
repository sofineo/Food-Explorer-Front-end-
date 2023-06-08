import { Container } from './styles'
import { FiSearch } from 'react-icons/fi'
import { Input } from '../Input'
import { useNavigate } from 'react-router'
import { useAuth } from '../../hooks/auth' 

export function HeaderAdmin() {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  function handleButtonNewDish() {
    navigate('/new')
  }

  function handleButtonSignOut() {
    navigate('/')
    signOut()
  }
  return (
    <Container>
      <div className="content-header">
      <button
      type='button'
      className='menu'
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
          food explorer <span>admin</span>
        </div>
      </div>

      <Input 
        type="text" 
        className="search-bar"
        icon={FiSearch} 
        placeholder={`Busque por pratos ou ingredientes`}
        />

      <button 
      className="new-dish"
      onClick={handleButtonNewDish}
      >
        Novo prato
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


    </Container>
  )
}