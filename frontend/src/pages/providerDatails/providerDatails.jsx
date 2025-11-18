import styles from './providerDatails.module.css';

export default function ProviderDatails () {
    return(
        <div className={styles.providerDatailsContainer}>
            <div className={styles.providerDatailsHome}>
                <div className={styles.providerDatailsImage}>
                    <img src="/img/exemples/Group 8.png" alt="Imagem do Prestador" />
                </div>

                <div className={styles.providerDatailsInfo}>
                    <h2>Nome do Prestador</h2>
                    <h5>Especialidade</h5>
                    <div className={styles.line}></div>
                    <p>Descrição detalhada do prestador de serviço, suas qualificações, experiência e outras informações relevantes que possam ajudar o cliente a tomar uma decisão informada.</p>
                </div>
            </div>


            <div className={styles.providerDatailsServices}>
                <div className={styles.providerDatailsAvailableServices}>
                    <div className={styles.providerAvailable}>
                        <h3>4.6</h3>
                    </div >  
                </div>    

                <div className={styles.providerDatailsGallery}>

                </div>
            </div>
        </div>
    )
}