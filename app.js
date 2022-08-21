const books = require('./database');
const readline = require('readline-sync');

const initialInput = readline.question('Deseja buscar um livro? S/N: ');

if (initialInput.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis: ');
    console.log('Produtividade e Estilo de vida', '/História', '/Americas', '/Tecnologia');

    const category = readline.question('Qual categoria você escolhe? ');
    const retorno = books.filter((book) => book.categoria.toUpperCase() === category.toUpperCase());

    console.table(retorno);
} else {
    const orderBooks = books.sort((a, b) => a.paginas - b.paginas);
    console.log('Essas são todos livros disponíveis: ');
    console.table(orderBooks);
}