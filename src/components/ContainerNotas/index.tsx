import { Card, CardContent, CardHeader, CardTitle } from "components/ui/card";
import React, { useState } from "react";
import Nota from "./Nota";
import { Accordion } from "components/ui/accordion";
import { NotaType, deletaNota } from "store/reducers/notas";
import { useDispatch, useSelector } from "react-redux";
import AlertMessage from "components/AlertMessage";
import { cancelaSelecoes } from "store/reducers/notasSelecionadas";
import { useToast } from "components/ui/use-toast";

export default function ContainerNotas() {
  const { notas } = useSelector((state: any) => state);
  const { notasSelecionadas } = useSelector((state: any) => state);

  const { toast } = useToast();

  const [modoDeletar, setModoDeletar] = useState<boolean>(false);

  const dispatch = useDispatch();

  return (
    <Card
      className={`
            text-white 
            w-full 
            h-[60vh]
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
      <CardHeader className="flex w-full flex-row p-6 justify-between">
        <CardTitle className="sm:text-xl md:text-2xl">Minhas notas</CardTitle>
        {!modoDeletar && notas.length > 0 ? (
          <h2
            className="font-bold hover:cursor-pointer md:text-md sm:text-sm"
            onClick={() => setModoDeletar(true)}
          >
            Selecionar
          </h2>
        ) : (
          ""
        )}
        {modoDeletar && (
          <div className="flex sm:gap-2 md:gap-4 ml-auto items-center md:text-md sm:text-sm">
            <AlertMessage
              title="Tem certeza que quer excluir a(s) nota(s)?"
              description="Essa ação não poderá ser desfeita!"
              actionText="Confirmar"
              cancelText="Cancelar"
              onClick={() => {
                dispatch(deletaNota(notasSelecionadas));
                setModoDeletar(false);
                toast({
                  title: "Feito!",
                  description: "Nota(s) excluída(s) com sucesso!",
                });
              }}
            >
              <h2 className="font-bold hover:cursor-pointer">Excluir</h2>
            </AlertMessage>
            <h2
              className="font-bold hover:cursor-pointer"
              onClick={() => {
                dispatch(cancelaSelecoes());
                setModoDeletar(false);
              }}
            >
              Cancelar
            </h2>
          </div>
        )}
      </CardHeader>
      <CardContent className="w-full h-4/5 overflow-y-scroll">
        <Accordion type="multiple">
          {notas.map((nota: NotaType) => (
            <Nota key={nota.id} nota={nota} modoDeletar={modoDeletar} />
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
