import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import Styles from './style.module.scss'
import {signIn,signOut, useSession} from 'next-auth/react'


export const SignInButton = () => {

    const { data: session } = useSession()

    console.log(session)

    return session ? (
        <button type='button' className={Styles.signInButton}>
            <FaGithub color="#04d361"/>
            {session.user.name}
            <FiX color='#737373' className={Styles.closeIcon} onClick={() => signOut()}/>
        </button>
    ) : (
        <button type='button' className={Styles.signInButton} onClick={() => signIn('github')}>
            <FaGithub color="#eba417"/>
            Sign In With Github
        </button>
    )
}