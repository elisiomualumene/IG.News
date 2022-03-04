import Styles from './style.module.scss'

interface SubscribeButtonProps{
    priceId: string;
}

export default function SubscribeButton({priceId} : SubscribeButtonProps){
    return(
        <button type='button' className={Styles.subscribeButton}>Subscribe Now! 
        </button>
    );
}