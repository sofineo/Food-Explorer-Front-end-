import { useEffect } from 'react'
import { useState } from 'react'
import { Container } from './styles'


export function DishClient({ icon: Icon, title, priceTag, dishDescription, image, onClickButtonFavorite, onClickDish, newOrderPlacedFromDish, isActive, ...rest }) {
  let [total, setTotal] = useState('01')
  const [order, setOrder] = useState(0)
  const [price, setPrice] = useState('')

  function handlePlusButton() {
    const newTotal = (String(Number(total) + 1)).padStart(2, '0')
    const newPrice = (Number(String(price).replace(',', '.')) + Number(priceTag.replace(',', '.'))).toFixed(2)
    setTotal(newTotal)
    setPrice(newPrice.replace('.', ','))
  }

  function handleMinusButton() {
    const newTotal = (String(Number(total) - 1)).padStart(2, '0')
    const newPrice = (Number(String(price).replace(',', '.')) - Number(priceTag.replace(',', '.'))).toFixed(2)
    if(Number(newTotal) < 1) {
      return
    }
    setTotal(newTotal)
    setPrice(newPrice.replace('.', ','))
  }

  function handleAddDish() {
    setOrder(prev => prev + Number(total))
  }

  useEffect(() => {
    setPrice(priceTag)
  }, [])
  return (
    <Container {...rest} newOrderPlaced={order}>
      <button 
        type='button' 
        
        onClick={onClickButtonFavorite} 
        className={`favorite ${isActive ? 'active' : ''}`}
        >
      <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704V22.704Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      </button>
      <div className="dish-details" onClick={onClickDish}>
        <img src={image} alt={`Imagem de ${title}`} />
        <h3>{title} {Icon && <Icon size={14} />} </h3>
        <p className='description'>{dishDescription}</p>
        </div>
        <span>{`R$ ${price}`}</span>
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
            Incluir
          </button>
      </div>
    </Container>
  )
}