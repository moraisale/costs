<<<<<<< HEAD
function ProjectForm () {
  return (
    <div>
      <form>
        <div>
          <input type="text" placeholder="Insira o nome do projeto" />
        </div>
        <div>
        <input type="number" placeholder="Insira o valor de orçamento do projeto" />
        </div>
        <div>
          <select name="categoria">
            <option disabled selected>Selecione a categoria</option>
          </select>
        </div>
        <input type="submit" value="Criar projeto"/>
      </form>
    </div>
  )
=======
import {useState} from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'



function ProjectForm ({btnText}) {

  const [categories, setCategories] = useState([])

  fetch("http://localhost:5000/categories", {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((resp) => resp.json)
    .then((data) => {
      setCategories(data)
    })
    .catch((err) => console.log(err))

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="name"
        placeholder="Insira o orçamento total"
      />
      <Select
        text="Selecione uma categoria"
        name="categoria"
        options={categories}
      />
      <SubmitButton text={btnText}/>


      
    </form>
  ) 
>>>>>>> c994a63cb441ef3d8e9c969c24f007145ebfa5ad
}

export default ProjectForm