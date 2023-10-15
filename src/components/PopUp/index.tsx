import React from 'react'
import { Alert, AlertDescription, AlertTitle } from 'components/ui/alert'
import Botao from 'components/Botao'

export default function PopUp() {
  return (
    <Alert 
        className='
            font-sans 
            bg-gray-card 
            text-white 
            fixed 
            left-0
            w-full
            bottom-0
            rounded-xl 
            shadow-inner 
            shadow-black'>
        <AlertTitle>Cookies</AlertTitle>
        <AlertDescription className='flex items-center gap-4'>
            <p>Nosso site usa cookies para melhorar sua experiência, mantendo suas notas salvas por mais tempo!</p>
            <Botao className='bg-orange-500 text-white hover:bg-orange-600 h-8 active:shadow-inner active:shadow-black'>Aceitar</Botao>
            <Botao className='bg-transparent text-orange-500 hover:bg-transparent'>Negar</Botao>
        </AlertDescription>
    </Alert>
  )
}
