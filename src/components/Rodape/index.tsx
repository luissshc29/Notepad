import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

export default function Rodape() {
  return (
    <footer className="flex justify-center items-center gap-2 lg:col-span-2 mt-auto mb-0 py-6 w-full font-sans text-sm md:text-base text-neutral-500">
      <div className="flex items-center gap-[3px] h-full">
        Feito por{" "}
        <a
          href="https://luishenrique-dev.com.br/"
          className="flex items-center gap-[3px] underline"
          target="_blank"
        >
          Luis Henrique <FiExternalLink />
        </a>{" "}
        |
      </div>
      <div className="flex gap-2">
        <a href="https://www.instagram.com/luissshc_/" target="_blank">
          <AiOutlineInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/luis-henrique-6a7425165/"
          target="_blank"
        >
          <AiOutlineLinkedin />
        </a>
        <a href="https://github.com/luissshc29" target="_blank">
          <AiOutlineGithub />
        </a>
      </div>
    </footer>
  );
}
