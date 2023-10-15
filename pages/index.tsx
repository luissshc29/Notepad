import Banner from 'components/Banner'
import ContainerEdicao from 'components/ContainerEdicao'
import ContainerNotas from 'components/ContainerNotas'
import PopUp from 'components/PopUp'
import Head from 'next/head'
import React from 'react'

export default function HomePage() {
  return (
    <>
        <Head>
            <title>Notepad</title>
        </Head>
        <Banner/>
        <div className='p-8 flex h-screen gap-4 flex-col lg:flex-row'>
            <ContainerEdicao/>
            <ContainerNotas/>
            <PopUp/>
        </div>
    </>
  )
}
