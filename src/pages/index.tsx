import Head from 'next/head';

export default function Home() {
  return (
    <> 

    <Head>
      <title>Início | NextJS</title>
    </Head>
    
    <main>
      <section>
        <span>👏Hey Welcome</span>
        <h1>News about the <span>React</span> world</h1>
        <p>
          get access to all the publications <br />
          <span>for $990 month</span>
        </p>
      </section>

      <img src="/images/avatar.png" alt="conding"/>
    </main>

   </>
  )
}
