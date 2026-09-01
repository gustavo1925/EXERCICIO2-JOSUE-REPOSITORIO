import { Pessoa } from './pessoaModel.js';
import { Curso } from './cursoModel.js';
import { Aluno } from './alunoModel.js';
import { Professor } from './professorModel.js';

const gustavo = new Pessoa(
    "Gustavo",
    "529.982.247-25",
    "gustavo@gmail.com",
    "(19) 99847-3621",
    "Rua das Acácias, 742"
);

const cursoGuitarra = new Curso(202, "Guitarra Eletrica", 50);

const lucas = new Aluno(
    "Lucas", 
    "526.432.234-25", 
    "lucas@hotmail.com", 
    "(19) 99324-2342", 
    "Avenida dos Ipês, 128", 
    1000, 
    cursoGuitarra
);

const josue = new Professor(
    "Josue", 
    "123.423.543-25", 
    "josue@outlook.com", 
    "(19) 89329-4329", 
    "Rua João de Barros, 356", 
    1.00, 
    "Flauta"
);

// Testando

console.log("Dados da Pessoa ---");
gustavo.exibirDados();

console.log("Cursos Presentes ---");
cursoGuitarra.exibirCurso();

console.log("Dados do Aluno ---");
lucas.exibirDados();
lucas.matricularCurso();

console.log("Dados do Professor ---");
josue.exibirDados();
josue.ministrarAula();