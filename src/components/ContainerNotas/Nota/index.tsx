import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "components/ui/accordion";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { editaNota } from "store/reducers/edicao";
import { NotaType, deletaNota } from "store/reducers/notas";
import AlertMessage from "components/AlertMessage";
import { Switch } from "components/ui/switch";
import {
    desselecionaNota,
    selecionaNota,
} from "store/reducers/notasSelecionadas";
import { useToast } from "components/ui/use-toast";

export default function Nota({
    nota,
    modoDeletar,
}: {
    nota: NotaType;
    modoDeletar: boolean;
}) {
    const dispatch = useDispatch();

    const { toast } = useToast();

    function marcaNota(boolean: boolean) {
        boolean && dispatch(selecionaNota(nota.id));
        !boolean && dispatch(desselecionaNota(nota.id));
    }

    return (
        <AccordionItem
            value={`${nota.id}`}
            className={`${
                modoDeletar
                    ? "grid grid-cols-85-15 items-center"
                    : "flex flex-col justify-center"
            }`}
        >
            <AccordionTrigger className="flex justify-between mr-auto">
                <h1 className="sm:text-sm md:text-[16px] font-bold">
                    {nota.titulo.length > 20
                        ? nota.titulo.slice(0, 20) + " ..."
                        : nota.titulo}
                </h1>
                <div
                    className="ml-auto mr-4"
                    style={{
                        color: nota.cor,
                    }}
                >
                    <BsFillCircleFill />
                </div>
            </AccordionTrigger>
            <AccordionContent className="row-start-2">
                <div className="flex justify-between">
                    <p className="w-4/5 sm:text-xs md:text-[14px]">
                        {nota.conteudo.length > 30
                            ? nota.conteudo.slice(0, 30) + " ..."
                            : nota.conteudo}
                    </p>
                    <div className="flex w-1/5 items-center justify-evenly">
                        <div
                            className="hover:cursor-pointer"
                            onClick={() => dispatch(editaNota({ ...nota }))}
                        >
                            <AiOutlineEdit />
                        </div>
                        <AlertMessage
                            title="Tem certeza que quer excluir a nota?"
                            description="Essa ação não poderá ser desfeita!"
                            onClick={() => {
                                dispatch(deletaNota([{ id: nota.id }]));
                                toast({
                                    title: "Feito!",
                                    description: "Nota excluída com sucesso!",
                                });
                            }}
                            actionText="Confirmar"
                            cancelText="Cancelar"
                        >
                            {<FaRegTrashAlt />}
                        </AlertMessage>
                    </div>
                </div>
            </AccordionContent>
            {modoDeletar && (
                <Switch
                    className="justify-self-end scale-75 animate-show-up duration-200"
                    onCheckedChange={(e) => marcaNota(e)}
                />
            )}
        </AccordionItem>
    );
}
