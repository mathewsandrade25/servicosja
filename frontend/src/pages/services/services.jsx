import styles from './services.module.css'
import { FaSearch ,FaStar } from "react-icons/fa";

export default function Services () {
    return(
        <div className={styles.services}>
            <div className={styles.servicesMenu}> 
                <a href="#">Beleza e Bem-estar</a>
                <a href="#">Cuidado Pessoal</a>
                <a href="#">Lazer e Eventos</a>
                <a href="#">Limpeza e Organização</a> 
                <a href="#">Manutenção e Reparos</a>
                <a href="#">Reforma e Construção</a>
                <a href="#">Suluções Profissionais</a>
                <a href="#">Transporte</a> 
            </div>


            <div className={styles.servicesBody}>
                <div className={styles.servicesFilter}>
                    <div className={styles.filterItem}><input type="text" /><button><FaSearch /></button></div>

                     <div className={styles.serviceClassific}>
                           <h4>Filtrar por:</h4>

                           <div className={styles.serviceClassificBox}>
                                <h2>Classificação de Profissional</h2>
                                   <div className={styles.starSponsored}>
                                         <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                   </div>
                           </div>
                        </div>

                    <div className={styles.servicesList}>
                        <h3>Material Próprio</h3>
                        <div className={styles.serviceItem}>
                            <input type="checkbox" />
                            <span>Sim , Possuo Material</span>
                        </div>

                        <div className={styles.serviceItem}>
                            <input type="checkbox" />
                            <span>Não, o cliente fornece</span>
                        </div>

                    </div>

                    <div className={styles.servicesList}>
                        <h3>Disponibilidade</h3>
                        <div className={styles.serviceItem}>
                            <input type="checkbox" />
                            <span>Atende 24h</span>
                        </div>

                        <div className={styles.serviceItem}>
                            <input type="checkbox" />
                            <span>Atende fim de semana</span>
                        </div>

                        <div className={styles.serviceItem}>
                            <input type="checkbox" />
                            <span>Urgente/Imediato</span>
                        </div>
                        
                    </div>

                    <div className={styles.servicesList}>
                        <h3>Tipo de atendimento</h3>
                        <div className={styles.serviceItem}>
                            <input type="checkbox" />
                            <span>Online/Remoto</span>
                        </div>

                        <div className={styles.serviceItem}>
                            <input type="checkbox" />
                            <span>A domícilio</span>
                        </div>
                        
                    </div>



                      <div className={styles.servicesList}>
                        <h3>Tempo de atendimento</h3>
                        <div className={styles.serviceItem}>
                            <input type="checkbox" />
                            <span>Menos de 8h</span>
                        </div>

                        <div className={styles.serviceItem}>
                            <input type="checkbox" />
                            <span>Até 8h</span>
                        </div>

                         <div className={styles.serviceItem}>
                            <input type="checkbox" />
                            <span>Até 12h</span>
                        </div>

                         <div className={styles.serviceItem}>
                            <input type="checkbox" />
                            <span>Até 24h</span>
                        </div>

                        
                        
                    </div>
            </div>

                
            </div>
        </div>
    )
}