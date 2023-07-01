import { Container, Avatar } from './styles'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { FiChevronLeft } from 'react-icons/fi'
import { TextButton } from '../../components/TextButton'
import { useNavigate, useParams } from 'react-router'
import { Footer } from '../../components/Footer'
import { IngredientItem } from '../../components/IngredientItem'
import { Section } from '../../components/Section'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

export function EditDish() {
  const params = useParams()
  const [data, setData] = useState({})
  const [search, setSearch] = useState('')

  const [avatar, setAvatar] = useState(null)
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [sizeNewIngredient, setSizeNewIngredient] = useState('')

  const navigate = useNavigate()

  function handleSearch(searchValue) {
    setSearch(searchValue)
  }

  function handleButtonBack() {
    navigate(-1)
  }

  function handleAvatar(event) {
    const file = event.target.files[0]
    setAvatar(file)
  }

  function handleAddIngredient() {
    if(!newIngredient) {
      return
    }
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveIngredient(deletedIngredient) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deletedIngredient))
    setNewIngredient('')
  }

  function isNumber(event) {
    const charCode = event.which ? event.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 44) {
      event.preventDefault()
      return false
    }
    if (price.includes(',') && (charCode == 44)) {
      event.preventDefault()
      return false;
    }
    if (price.endsWith(',', (Number(price.length)-2)) && charCode !== 46) {
      event.preventDefault()
      return false
    }
    return true
  }

  async function handleDeleteDish() {
    const confirm = window.confirm('Deseja realmente excluir este prato?')
    if(confirm) {
      api.delete(`/dishes/${params.id}`)
      toast('Prato excluído com sucesso')
      navigate(-1)
    }
  }

  async function handleUpdateDish() {
    if(!name) {
      return alert('Digite o nome do prato')
    }
    if(!category) {
      return alert('Selecione uma categoria')
    }
    if(newIngredient) {
      return alert('Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio')
    }
    if(ingredients.length == 0) {
      return alert('Adicione pelo menos um ingrediente')
    }
    if(!price) {
      return alert('Digite o preço do prato')
    }
    if(!description) {
      return alert('Digite a descrição')
    }

    if(price.endsWith(',', (Number(price.length)-1))) {
      setPrice(price.padEnd((Number(price.length)+1),'0'))
      console.log(price)
      return
    }

    if(avatar) {
      const fileUploadForm = new FormData()
      fileUploadForm.append('avatar', avatar)

      await api.patch(`/dishes/avatar/${params.id}`, fileUploadForm)

    } 

    await api.put(`/dishes/${params.id}`, {
        name,
        category,
        ingredients,
        price,
        description
      })

    toast('Prato editado com sucesso!')
    navigate(-1)
  
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
      
      setName(response.data.name)
      setCategory(response.data.category)
      setIngredients(response.data.ingredients.map(ingredient => {return ingredient.name}))
      setPrice(response.data.price)
      setDescription(response.data.description)
    }

    fetchDish()
  }, [])

  useEffect(() => {
    setSizeNewIngredient(newIngredient.length)
  }, [newIngredient])

  return (
    <Container>
      <HeaderAdmin sendSearchValue={handleSearch}/>
      <div className="page">
        <div className="content">
          <TextButton
            icon={FiChevronLeft}
            title='voltar'
            onClick={handleButtonBack}
          />
          <div className="form">
            <legend>Editar prato</legend>

            <div className="column3">
              <Avatar
              >
                <label htmlFor="avatar">
                  <span>Imagem do prato</span>
                  <div className="file">
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M11.2929 1.21697C11.6834 0.826441 12.3166 0.826441 12.7071 1.21697L17.9571 6.46697C18.3476 6.85749 18.3476 7.49065 17.9571 7.88118C17.5666 8.2717 16.9334 8.2717 16.5429 7.88118L12 3.33829L7.45711 7.88118C7.06658 8.2717 6.43342 8.2717 6.04289 7.88118C5.65237 7.49065 5.65237 6.85749 6.04289 6.46697L11.2929 1.21697Z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 0.924072C12.5523 0.924072 13 1.37179 13 1.92407V15.9241C13 16.4764 12.5523 16.9241 12 16.9241C11.4477 16.9241 11 16.4764 11 15.9241V1.92407C11 1.37179 11.4477 0.924072 12 0.924072Z" fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1 14.9241C1.55228 14.9241 2 15.3718 2 15.9241V22.9241H22V15.9241C22 15.3718 22.4477 14.9241 23 14.9241C23.5523 14.9241 24 15.3718 24 15.9241V22.9241C24 23.4545 23.7893 23.9632 23.4142 24.3383C23.0391 24.7134 22.5304 24.9241 22 24.9241H2C1.46957 24.9241 0.960861 24.7134 0.585787 24.3383C0.210714 23.9632 0 23.4545 0 22.9241V15.9241C0 15.3718 0.447715 14.9241 1 14.9241Z" fill="currentColor"/>
                  </svg>

                  <span>Selecione imagem</span>
                  </div>
                  </label>
                <input 
                type="file" 
                id="avatar" 
                onChange={handleAvatar}
                />
              </Avatar>

              <div className="input-wrapper name">
                <label htmlFor="name">Nome</label>
                <input 
                type="text" 
                id="name"
                placeholder='Ex.: Salada Ceasar'
                onChange={e => setName(e.target.value)}
                value={name}
                required
                />
              </div>

              <div className="input-wrapper category">
                <label htmlFor="category">Categoria
                <div className="select-svg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.4545 8.75358C4.89384 8.31424 5.60616 8.31424 6.0455 8.75358L12 14.7081L17.9545 8.75358C18.3938 8.31424 19.1062 8.31424 19.5455 8.75358C19.9848 9.19292 19.9848 9.90523 19.5455 10.3446L12.7955 17.0946C12.3562 17.5339 11.6438 17.5339 11.2045 17.0946L4.4545 10.3446C4.01517 9.90523 4.01517 9.19292 4.4545 8.75358Z" fill="currentColor"/>
                  </svg>
                </div>
                </label>
                <select 
                id="category"
                onChange={e => setCategory(e.target.value)}
                value={category}
                required
                >
                  <option value="Refeição">Refeição</option>
                  <option value="Sobremesa">Sobremesa</option>
                  <option value="Bebida">Bebida</option>
                </select>

              </div>
            </div>

            <div className="column2">
              <div className="ingredients-items">
                <Section 
                  className="ingredients"
                  label={'Ingredientes'}
                >
                  { ingredients && ingredients.map((ingredient, index) => (        
                    <IngredientItem 
                      key={ingredient.id ? ingredient.id : String(index)}
                      value={ingredient}
                      size={ingredient.length}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />))
                    }
                      <IngredientItem 
                      isNew
                      placeholder='Adicionar'
                      size={newIngredient==''? 9 : sizeNewIngredient}
                      onChange={e => setNewIngredient(e.target.value)}
                      value={newIngredient}
                      onClick={handleAddIngredient}
                      />
                </Section>
                </div>

                <div className="input-wrapper price">
                  <label htmlFor="price">Preço</label>
                  <input 
                  type="text" 
                  id="price"
                  placeholder='R$ 00,00'
                  onChange={e => setPrice(e.target.value)}
                  value={price}
                  onKeyPress={e => isNumber(e)}
                  required
                  />
                </div>
            </div>

            <div className="input-wrapper textarea">
              <label htmlFor="description">Descrição</label>
              <textarea 
              id="description"
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
              onChange={e => setDescription(e.target.value)}
              value={description}
              ></textarea>
            </div>
          
            <div className="buttons">
              <button
                  className='delete-button'
                  type='button'
                  onClick={handleDeleteDish}
                >
                  Excluir prato
                </button>

              <button
                  className='save-button'
                  type='button'
                  onClick={handleUpdateDish}
                >
                  Salvar alterações
                </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </Container>
  )
}