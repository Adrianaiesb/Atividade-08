import Pagina from "@/components/Pagina";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";
import axios from "axios";

const form = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm();

  function salvar(dados) {
    axios.post("/api/alunos", dados);
    push("/alunos");
  }

  return (
    <Pagina titulo="Aluno">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o nome"
            {...register("nome")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o cpf"
            {...register("cpf")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matrícula: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite a matricula"
            {...register("matricula")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite o email"
            {...register("email")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control
            type="tel"
            placeholder="Digite o telefone"
            {...register("telefone")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP: </Form.Label>
          <Form.Control
            type="number"
            placeholder="Digite o cep"
            {...register("cep")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o logradouro"
            {...register("logradouro")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o complemento"
            {...register("complemento")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Numero: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o numero"
            {...register("numero")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite a matricula"
            {...register("bairro")}
          />
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
