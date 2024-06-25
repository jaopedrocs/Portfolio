
import styles from './Contato.module.css'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'

function Contatos() {
    return (
        <>
            
                <section className={styles.contatos}>
                    <h2>Contatos</h2>

                    <h3>Need a designer?</h3>
                    <p>Lets Work Together</p>

                    <div className={styles.icones}>
                        
                        <a href='mailto:sandracastroprofessora@gmail.com' target='_blank' rel='noopener noreferrer'>
                            <GoMail className={styles.icone} />
                        </a>

                        <a href='https://' target='_blank' rel='noopener noreferrer'>
                            <BsInstagram className={styles.icone} />
                        </a>

                        <a href='' target='_blank' rel='noopener noreferrer'>
                            <BsYoutube className={styles.icone} />
                        </a>

                        <a href='' target='_blank' rel='noopener noreferrer'>
                            <BsGithub className={styles.icone} />
                        </a>

                        <a href='' target='_blank' rel='noopener noreferrer'>
                            <BsLinkedin className={styles.icone} />
                        </a>

                    </div>

                </section>
           
        </>
    )
}

export default Contatos