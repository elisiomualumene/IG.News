import { useSession, signIn } from 'next-auth/react';
import { api } from '../../Services/api';
import { getStripeJs } from '../../Services/stripe-js';
import Styles from './style.module.scss'

interface SubscribeButtonProps{
    priceId: string;
}

export default function SubscribeButton({priceId} : SubscribeButtonProps){

    const session = useSession()

   async function handleSubscribe(){
        if(!session){
            signIn('github')
            return;
        }

        // criação de uma checkout session
        // https://stripe.com/docs/api/checkout/sessions

        try {
            const response = await api.post('/subscribe')

            const { sessionId } = response.data

            const stripe = await getStripeJs()

            stripe.redirectToCheckout(sessionId)
        } catch(err){
            alert(err.message)
        }
    }

    return(
        <button type='button'
        className={Styles.subscribeButton}
        onClick={handleSubscribe}>

            Subscribe Now! 
        </button>
    );
}
