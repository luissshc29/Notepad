import { Card, CardContent, CardHeader, CardTitle } from 'components/ui/card'
import React from 'react'
import Nota from './Nota'
import { Accordion } from 'components/ui/accordion'
import { NotaType } from 'store/reducers/notas'
import { useSelector } from 'react-redux'

export default function ContainerNotas() {

    const { notas } = useSelector((state: any) => state)

    return (
        <Card
            className={`
            text-white 
            lg:w-2/5
            w-full 
            h-3/4 
            flex 
            flex-col
            items-center
            bg-gray-card 
            rounded-xl 
            shadow-inner
            shadow-black
            font-sans
        `}
        >
            <CardHeader>
                <CardTitle>Minhas notas</CardTitle>
            </CardHeader>
            <CardContent className='w-full h-4/5 overflow-y-scroll'>
                <Accordion type='multiple'>
                    {notas.map((nota: NotaType) => (
                        <Nota key={nota.id} nota={nota} />
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    )
}
