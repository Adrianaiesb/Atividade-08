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
    axios.post("/api/professores", dados);
    push("/professores");
  }

  return (
    <Pagina titulo="Professor">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" placeholder="Digite o nome:"{...register("nome")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o CPF:"
            {...register("cpf")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="matricula">
          <Form.Label>Matricula: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite a matrícula:"
            {...register("matricula")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="salario">
          <Form.Label>Salario: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o salário:"
            {...register("salario")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o e-mail:"
            {...register("email")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o telefone:"
            {...register("telefone")}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>Cep</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o CEP:"
            {...register("cep")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o logradouro:"
            {...register("logradouro")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o complemento:"
            {...register("complemento")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Numero: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o número:"
            {...register("numero")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o bairro:"
            {...register("bairro")}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheckLg className="me-2" />
            Salvar
          </Button>
          <Link className="ms-2 btn btn-danger" href="/professores">
            <AiOutlineArrowLeft className="me-2" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
