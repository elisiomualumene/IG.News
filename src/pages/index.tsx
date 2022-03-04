import Head from 'next/head';
import { GetStaticProps } from 'next'
import Styles from './home.module.scss'
import SubscribeButton from '../Components/SubscribeButton';
import {stripe} from '../Services/stripe'

interface ProductsProps{
  Product: {
    priceId: string,
    amount: string
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
        <SubscribeButton priceId={Product.priceId}/>
      </section>

      <img src="/images/avatar.png" alt="conding"/>
    </main>

   </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const price = await stripe.prices.retrieve('price_1KVwrULuhY4LXBRJwHfbrp3V', {
    expand: ['product']
  })

  const Product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return{
    props:{
      Product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}