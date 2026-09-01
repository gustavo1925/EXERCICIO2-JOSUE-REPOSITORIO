import { Pessoa } from './pessoaModel.js';

export class Aluno extends Pessoa {
    constructor(nome, cpf, email, telefone, endereco, matricula, curso) {
        super(nome, cpf, email, telefone, endereco);
        this.matricula = matricula;
        this.curso = curso;
    }

    matricularCurso() {
        console.log("Matriculando");
    }

    cancelarMatricula() {
        console.log("Cancelando");
    }

    exibirDados() {
        super.exibirDados();
        console.log("Matricula:", this.matricula);
        if (this.curso) {
            console.log("Curso:", this.curso.nome);
        }
    }
}