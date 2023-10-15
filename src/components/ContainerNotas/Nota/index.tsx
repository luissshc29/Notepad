import { AccordionContent, AccordionItem, AccordionTrigger } from 'components/ui/accordion'
import { 
    AlertDialog, 
    AlertDialogTitle, 
    AlertDialogContent, 
    AlertDialogTrigger, 
    AlertDialogDescription, 
    AlertDialogHeader, 
    AlertDialogFooter, 
    AlertDialogAction, 
    AlertDialogCancel 
} from 'components/ui/alert-dialog'
import { AiOutlineEdit } from 'react-icons/ai'
import { FaRegTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { editaNota } from 'store/reducers/edicao'
import { NotaType, deletaNota } from 'store/reducers/notas'

export default function Nota({nota}: {nota:  NotaType}) {

    const dispatch = useDispatch()
    
    return (
        <AccordionItem value={`${nota.id}`}>
            <AccordionTrigger>
                {nota.titulo.length > 20 ? nota.titulo.slice(0, 20) + ' ...' : nota.titulo}
            </AccordionTrigger>
            <AccordionContent>
                <div className='flex justify-between'> 
                    <p className='w-4/5'>{nota.conteudo.length > 30 ? nota.conteudo.slice(0, 30) + ' ...' : nota.conteudo}</p>
                    <div className='flex w-1/5 items-center justify-evenly'>
                        <div className='hover:cursor-pointer' onClick={() => dispatch(editaNota({...nota}))}>
                            <AiOutlineEdit/>
                        </div>
                        <AlertDialog>
                            <AlertDialogTrigger>       
                                <FaRegTrashAlt/>
                            </AlertDialogTrigger>
                            <AlertDialogContent className='font-sans'>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Tem certeza que quer excluir a nota?</AlertDialogTitle>
                                    <AlertDialogDescription>Essa ação não poderá ser desfeita!</AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogAction 
                                        onClick={() => dispatch(deletaNota({id: nota.id}))}
                                    >
                                        Confirmar
                                    </AlertDialogAction>
                                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
            </AccordionContent>
        </AccordionItem>
    )
}
