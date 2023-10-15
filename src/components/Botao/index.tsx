import { Button } from 'components/ui/button'
import React from 'react'

export default function Botao({children, type, className}: {children: React.ReactNode, type?: 'button' | 'reset' | 'submit', className?: string}) {
    return (
        <Button
            type={type}
            className={`
                rounded-xl
                ${className}
            `}
        >
            {children}
        </Button>
    )
}
