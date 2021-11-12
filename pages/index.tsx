import type { GetServerSideProps, NextPage } from 'next'
import { initializeApollo } from "../apollo/client"
import Head from 'next/head'
import Image from 'next/image'
import { Survivors } from '../graphql'
import { Card, SearchForm } from '../components'

const Home = ({ survivors }: HomeData) => {
  const search: string[] = []

  return (
    <div className="wrapper">
      <Head>
        <title>Survivors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <SearchForm search={search} survivors={survivors} />

      {
        survivors.length > 0 &&
        survivors.map((item, index) => {

          search.push(item.name)

          return (
            <Card key={item.id} idItem={item.id}
            name={item.name} attribute={item.attribute}
            email={item.email} infectado={item.infectado} />
          )
        })
      }

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const apolloClient = initializeApollo()

  const querySurvivors = await apolloClient.query({
    query: Survivors,
  })

  const survivors = querySurvivors.data?.survivors

  return {
    props: {
      survivors,
    },
  };
}

export default Home
