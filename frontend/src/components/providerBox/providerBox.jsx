import styles from './providerBox.module.css'
import { FaStar } from 'react-icons/fa'  
import {useNavigate} from 'react-router-dom';

export default function ProviderBox () {

    const naviagtion = useNavigate();


   return (
        <div className={styles.providerBox} onClick={() => naviagtion('/providerDatails')}>
            <img src="/img/exemples/Group 8.png" alt="imagem usuario" />
            <div className={styles.providerInfos}>
                <h3>Aline Souza</h3>
                <p>Recife, Boa Vigem</p>

                <div className={styles.providerResum}>
                    <p>Trancista. Especialista em tranças e penteados afro. Atendimento em domicílio.</p>
                    <div className={styles.starSponsored}>
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                   </div>
                </div>
            </div>
        </div>
    )

}