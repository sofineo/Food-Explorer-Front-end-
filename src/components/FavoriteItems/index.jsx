import { useEffect } from 'react'
import { useState } from 'react'
import { Container } from './styles'
import { api } from '../../services/api'


export function FavoritesItems({ data, onClickRemove, ...rest }) {
  const avatarUrl = data.avatar ? `${api.defaults.baseURL}/files/${data.avatar}` : 'none'


  return (
    <Container>
      <img {...rest} src={avatarUrl} alt={`imagem de ${data.name}` }/>
      <div className='texts'>
        <p {...rest}>{data.name}</p>
        <button
          onClick={onClickRemove}
        >Remover dos Favoritos</button>
      </div>
    </Container>
  )
}