import Botao from 'components/Botao'
import { Button } from 'components/ui/button'
import { Card, CardTitle, CardDescription, CardHeader, CardFooter, CardContent } from 'components/ui/card'
import { Input } from 'components/ui/input'
import { Textarea } from 'components/ui/textarea'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { editaNota, removeEdicaoNota } from 'store/reducers/edicao'
import { adicionaNota } from 'store/reducers/notas'
import { v4 as uuid } from 'uuid'

export default function ContainerEdicao() {

    const { handleSubmit, register, reset } = useForm()
    const dispatch = useDispatch()

    const { notaEdicao } = useSelector((state: any) => state)

    const onSubmit = (data: any) => {  
        const editando = notaEdicao[0].id
        editando ? dispatch(adicionaNota({...data, id: notaEdicao[0].id})) : dispatch(adicionaNota({...data, id: uuid()}))
        dispatch(removeEdicaoNota())
        reset()
    }

  return (
    <Card 
        className={`
            lg:w-3/5
            w-full 
            flex 
            flex-col 
            items-center
            bg-gray-card 
            text-white 
            rounded-xl 
            shadow-inner
            shadow-black
            font-sans
            h-3/4
        `}
    >
        <CardHeader className='w-full text-center h-1/5'>
            <CardTitle className='my-auto'>Área de trabalho</CardTitle> 
        </CardHeader>
        <CardContent className='p-4 w-4/5 h-full flex flex-col items-center justify-center animate-show-up duration-300'>  

            {
                notaEdicao.length === 0 ?
                <div 
                    className='
                        flex 
                        flex-col 
                        items-center 
                        text-gray-700
                        hover:cursor-pointer 
                        font-semibold
                    '
                    onClick={() => dispatch(editaNota({titulo:'Título da nota', conteudo: 'Conteúdo da nota'}))}
                >
                    <div className='text-4xl'>
                        <IoMdAddCircleOutline/>
                    </div>
                    <h2 className='text-xl'>Adicione uma nota</h2>
                </div> :
                <form 
                    onSubmit={handleSubmit(onSubmit)} 
                    className={`
                        flex 
                        flex-col 
                        items-left 
                        gap-4 
                        my-auto
                        h-4/5
                        w-full
                    `}
                >
                <Input 
                    {...register('titulo')} 
                    defaultValue={notaEdicao[0].titulo} 
                    className={`
                        border-none 
                        focus:border-1
                        rounded-xl
                        bg-transparent
                        font-bold
                        text-lg
                    `}
                />
                <Textarea 
                    {...register('conteudo')} 
                    defaultValue={notaEdicao[0].conteudo} 
                    className={`
                        border-none 
                        focus:border-1
                        rounded-xl
                        h-3/4
                        bg-transparent
                    `}
                />
                <Botao 
                    type='submit' 
                    className={`
                        w-1/2
                        self-center
                        rounded-xl
                        text-white
                        font-bold
                        bg-orange-500
                        hover:bg-orange-600
                        active:shadow-inner
                        active:shadow-black
                        shadow-md
                        shadow-black
                    `}
                >
                    Salvar
                </Botao>
            </form>

            }    

        </CardContent>
    </Card>
  )
}
