import { Pessoa } from './pessoaModel.js';

export class Professor extends Pessoa {
    constructor(nome, cpf, email, telefone, endereco, salario, especialidade) {
        super(nome, cpf, email, telefone, endereco);
        this.salario = salario;
        this.especialidade = especialidade;
    }

    ministrarAula() {
        console.log("Ministrando");
    }

    atualizarEspecialidade() {
        console.log("Atualizando");
    }

    exibirDados() {
        super.exibirDados();
        console.log("Especialidade:", this.especialidade);
        console.log("Salario:", this.salario);
    }
}