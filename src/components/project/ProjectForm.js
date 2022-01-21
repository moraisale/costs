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
}

export default ProjectForm