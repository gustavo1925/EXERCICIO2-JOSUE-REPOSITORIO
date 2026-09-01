export class Pessoa {
    constructor(nome, cpf, email, telefone, endereco) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    cadastrar() {
        console.log("Cadastrando");
    }

    atualizarDados() {
        console.log("Atualizando");
    }

    exibirDados() {
        console.log("Exibindo:");
        console.log("Nome:", this.nome);
        console.log("CPF:", this.cpf);
        console.log("Email:", this.email);
        console.log("Telefone:", this.telefone);
        console.log("Endereço:", this.endereco);
    }
}