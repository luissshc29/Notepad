import Botao from "components/Botao";
import { Card, CardTitle, CardHeader, CardContent } from "components/ui/card";
import { Input } from "components/ui/input";
import { Textarea } from "components/ui/textarea";
import React from "react";
import { useForm } from "react-hook-form";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { editaNota, removeEdicaoNota } from "store/reducers/edicao";
import { adicionaNota } from "store/reducers/notas";
import { v4 as uuid } from "uuid";

export default function ContainerEdicao() {
  const { handleSubmit, register, reset } = useForm();
  const dispatch = useDispatch();

  const { notaEdicao } = useSelector((state: any) => state);

  const onSubmit = (data: any) => {
    const editando = notaEdicao[0].id;
    !editando
      ? dispatch(adicionaNota({ ...data, id: uuid() }))
      : dispatch(adicionaNota({ ...data, id: notaEdicao[0].id }));
    reset();
    dispatch(removeEdicaoNota());
  };

  return (
    <Card
      className={`
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
            sm:h-[60vh]
            lg:h-[60vh]
            md:h-screen
        `}
    >
      <CardHeader className="w-full text-left h-1/5 p-6">
        <CardTitle className="my-auto sm:text-xl md:text-2xl">
          Área de trabalho
        </CardTitle>
      </CardHeader>
      <CardContent
        className={`p-0 w-11/12 h-4/5 flex flex-col items-center justify-center`}
      >
        {notaEdicao.length === 0 ? (
          <div
            className="
                        flex 
                        flex-col 
                        items-center 
                        text-gray-700
                        hover:cursor-pointer 
                        font-semibold
                    "
            onClick={() => {
              dispatch(
                editaNota({
                  titulo: "",
                  conteudo: "",
                  cor: "#121212",
                })
              );
            }}
          >
            <div className="text-4xl">
              <IoMdAddCircleOutline />
            </div>
            <h2 className="sm:text-lg md:text-2xl">Adicione uma nota</h2>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`
                        flex 
                        flex-col 
                        items-left 
                        gap-4 
                        mb-4
                        w-full
                        h-full
                        rounded-xl
                        p-4
                    `}
          >
            <Input
              {...register("titulo", { required: true })}
              defaultValue={notaEdicao[0].titulo}
              placeholder="Título da nota"
              className={`
                        border-none 
                        focus:border-1
                        rounded-xl
                        bg-transparent
                        font-bold
                        text-lg
                        placeholder:text-white
                    `}
            />
            <Textarea
              {...register("conteudo", { required: true })}
              defaultValue={notaEdicao[0].conteudo}
              placeholder="Conteúdo da nota"
              className={`
                        border-none 
                        focus:border-1
                        rounded-xl
                        h-3/4
                        bg-transparent
                        placeholder:text-white
                    `}
            />
            <Input
              type="color"
              {...register("cor")}
              defaultValue={notaEdicao[0].cor}
              className="h-12 w-1/2 mx-auto bg-gray-card-lighter"
            />
            <div className="flex w-full justify-evenly">
              <Botao
                type="submit"
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
              <Botao
                className="w-1/2 bg-transparent text-orange-500 hover:underline hover:bg-transparent"
                type="button"
                onClick={() => {
                  reset();
                  dispatch(removeEdicaoNota());
                }}
              >
                Cancelar
              </Botao>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
