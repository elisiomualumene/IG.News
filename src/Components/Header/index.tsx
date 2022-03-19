import { SignInButton } from '../SignInButton';
import Styles from './style.module.scss'


export const Header = () => {
    return(
        <header className={Styles.headerContainer}>
            <div className={Styles.headerContent}>
                <h1>IG.News</h1>
                <nav>
                    <a className={Styles.active}>Home</a>
                    <a>Posts</a>
                </nav>
                <SignInButton/>
            </div>
         </header>
    );
}