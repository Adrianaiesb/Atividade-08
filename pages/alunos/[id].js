import Pagina from "@/components/Pagina";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";

const form = () => {
  const { push, query } = useRouter();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (query.id) {
      axios.get("/api/alunos/" + query.id).then((resultado) => {
        const aluno = resultado.data;
        
        for (let atributo in aluno) {
          setValue(atributo, aluno[atributo]);
        }
      });
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put("/api/alunos/" + query.id, dados);
    push("/alunos");
  }

  return (
    <Pagina titulo="Alunos">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register("nome")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matrícula: </Form.Label>
          <Form.Control type="text" {...register("matricula")} />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheckLg className="me-2" />
            Salvar
          </Button>
          <Link className="ms-2 btn btn-danger" href="/alunos">
            <AiOutlineArrowLeft className="me-2" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
