
import styles from './Sidebar.module.css';

import mapPin from '../assets/map-pin.svg';
import briefCase from '../assets/briefcase.svg'
import linkedinIcon from '../assets/linkedin.svg'
import gitHub from '../assets/github.svg'
import emailIcon from '../assets/mail.svg'


export function Sidebar() {

  return (
    <div>
      <aside>
        <section className={styles.container}>
          <img className={styles.avatar} src="https://github.com/marcelosobreira.png" alt="" />
          <div className={styles.personal}>
            <strong>Marcelo Sobreira</strong>
            <span>Web Developer</span>
          </div>
        </section>

        <section className={styles.container}>
          <div className={styles.socialInf}>
            <a href="#">
              <img src={mapPin} alt="" />
              <span>Brasil</span>
            </a>
            <a href="#">
              <img src={briefCase} alt="" />
              <span>Rocketseat</span>
            </a>
            <a href="#">
              <img src={linkedinIcon} alt="" />
              <span>Linkedin</span>
            </a>
            <a href="#">
              <img src={gitHub} alt="" />
              <span>Github</span>
            </a>
            <a href="#">
              <img src={emailIcon} alt="" />
              <span>E-mail</span>
            </a>
          </div>
        </section>

        <section className={styles.container}>
          <strong className={styles.contentTitle}>Tecnologias</strong>
          <div className={styles.techs}>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>JAVASCRIPT</span>
            <span>REACTJS</span>
            <span>TYPESCRIPT</span>
          </div>
        </section>
        <section className={styles.container}>
          <strong className={styles.contentTitle}>Experiências</strong>
        </section>
        <section className={styles.container}>
          <strong className={styles.contentTitle}>Educação</strong>
        </section>
      </aside>
    </div>
  )
}