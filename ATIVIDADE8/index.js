let aluno1 = {
    ra: 0030481913016,
    nome: 'Gabriel Esnack'
}

console.log('ALUNO 1');
console.log(aluno1);

let aluno2 = {}

aluno2.ra = 0030481913015;
aluno2.nome = 'Gabriel Jorge';

console.log('ALUNO 2')
console.log(aluno2);

function geraAluno(nome, ra) {
    return {
        nome,
        ra
    }
}

