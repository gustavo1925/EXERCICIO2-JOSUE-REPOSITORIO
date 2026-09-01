export class Curso {
    constructor(codigo, nome, cargaHoraria) {
        this.codigo = codigo;
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
    }

    cadastrarCurso() {
        console.log("Cadastrando");
    }

    alterarCurso() {
        console.log("Alterando");
    }

    exibirCurso() {
        console.log("Codigo:", this.codigo);
        console.log("Nome do Curso:", this.nome);
        console.log("Carga horaria:", this.cargaHoraria);
    }
}