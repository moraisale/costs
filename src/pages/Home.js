import styles from './Home.module.css'
import savings from '../../src/img/savings.svg'
import LinkButton from '../components/layout/LinkButton'

function Home () {
  return (
    <section className={styles.home_container}>
      <h1>Bem vindo aooo <span>Costs</span></h1>
      <p>Comece a gerenciar seus projetos agora!</p>
      <LinkButton to="/newproject" text="Criar Projeto"/>
      
      <img src={savings} alt="Costs" />
    </section>
  )
}
export default Home