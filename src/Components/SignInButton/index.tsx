import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import Styles from './style.module.scss'


export const SignInButton = () => {

    const isUserLogged = true; 

    return isUserLogged ? (
        <button type='button' className={Styles.signInButton}>
            <FaGithub color="#04d361"/>
            Elísio Mualumene
            <FiX color='#737373' className={Styles.closeIcon}/>
        </button>
    ) : (
        <button type='button' className={Styles.signInButton}>
            <FaGithub color="#eba417"/>
            Elísio Mualumene
        </button>
    )
}