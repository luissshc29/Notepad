import React from "react";

export default function Banner() {
    return (
        <div className="w-full grid sm:grid-cols-45-55 lg:grid-cols-2 items-center py-8 ">
            <img
                src="/images/notepad.png"
                className="sm:w-2/3 md:w-2/5 justify-self-end"
            />
            <div className="md:ml-4 sm:ml-2 flex flex-col gap-1">
                <h1 className="md:text-4xl sm:text-2xl font-banner">Notepad</h1>
                <h3 className="md:text-lg sm:text-[0.875rem] font-sans leading-4">
                    O seu bloco de notas online!
                </h3>
            </div>
        </div>
    );
}
