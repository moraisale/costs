import ProjectForm from '../components/project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject () {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar projeto</h1>
<<<<<<< HEAD
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm/>
=======
      <p>Crie seu projeto para adicionar os serviços</p>
      <ProjectForm btnText="Criar projeto"/>
>>>>>>> c994a63cb441ef3d8e9c969c24f007145ebfa5ad
    </div>
  )
}
export default NewProject