import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import Styles from './style.module.scss'
import {signIn, useSession} from 'next-auth/react'


export const SignInButton = () => {

    const { data: session } = useSession()

    return session ? (
        <button type='button' className={Styles.signInButton}>
            <FaGithub color="#04d361"/>
            Elísio Mualumene
            <FiX color='#737373' className={Styles.closeIcon}/>
        </button>
    ) : (
        <button type='button' className={Styles.signInButton} onClick={() => signIn('github')}>
            <FaGithub color="#eba417"/>
            Elísio Mualumene
        </button>
    )
}