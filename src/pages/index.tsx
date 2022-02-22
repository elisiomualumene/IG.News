import Head from 'next/head';
import { GetServerSideProps } from 'next'
import Styles from './home.module.scss'
import SubscribeButton from '../Components/SubscribeButton';
import {stripe} from '../Services/stripe'

interface ProductsProps{
  Product: {
    PriceId: string,
    amount: number
  }
}


export default function Home({Product}: ProductsProps) {

  console.log(Product)


  return (
    <> 

    <Head>
      <title>Início | NextJS</title>
    </Head>
    
    <main className={Styles.contentContainer}>
      <section className={Styles.hero}>
        <span>👏Hey Welcome</span>
        <h1>News about the <span>React</span> world</h1>
        <p>
          get access to all the publications <br />
          <span>for {Product.amount} month</span>
        </p>
        <SubscribeButton/>
      </section>

      <img src="/images/avatar.png" alt="conding"/>
    </main>

   </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const price = await stripe.prices.retrieve('price_1KVwrULuhY4LXBRJwHfbrp3V', {
    expand: ['product']
  })

  const Product = {
    PriceID: price.id,
    amount: price.unit_amount / 100
  }

  return{
    props:{
      Product,
    }
  }
}