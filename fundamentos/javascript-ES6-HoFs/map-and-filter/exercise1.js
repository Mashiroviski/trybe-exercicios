const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

//   const expectedResult = [
//     'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//     'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//     'Fundação - Ficção Científica - Isaac Asimov',
//     'Duna - Ficção Científica - Frank Herbert',
//     'A Coisa - Terror - Stephen King',
//     'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
//   ];

  function formatedBookNames() {
   return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
  }

// const expectedResult = [
//     {
//       age: 31,
//       author: 'Isaac Asimov',
//     },
//     {
//       age: 38,
//       author: 'H. P. Lovecraft',
//     },
//     {
//       age: 39,
//       author: 'Stephen King',
//     },
//     {
//       age: 43,
//       author: 'George R. R. Martin',
//     },
//     {
//       age: 45,
//       author: 'Frank Herbert',
//     },
//     {
//       age: 62,
//       author: 'J. R. R. Tolkien',
//     },
//   ];
  
  function nameAndAge() {
   return books.map((book) => {
        const arrayNameAndAge = {
            age: book.releaseYear - book.author.birthYear,
            author: book.author.name,
        }
        return arrayNameAndAge;
    }).sort((a, b) => (a.age - b.age));
  };
//  console.log(nameAndAge());

// const expectedResult = [
//     { 
//       id: 1,
//       name: 'As Crônicas de Gelo e Fogo',
//       genre: 'Fantasia',
//       author: { name: 'George R. R. Martin', birthYear: 1948 },
//       releaseYear: 1991
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//       releaseYear: 1954
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: { name: 'Isaac Asimov', birthYear: 1920 },
//       releaseYear: 1951
//     },
//     {
//       id: 4,
//       name: 'Duna',
//       genre: 'Ficção Científica',
//       author: { name: 'Frank Herbert', birthYear: 1920 },
//       releaseYear: 1965
//     }
//   ];
  
  function fantasyOrScienceFiction() {
    return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
  }
//   console.log(fantasyOrScienceFiction());

// // const expectedResult = [
//     {
//       id: 6,
//       name: 'O Chamado de Cthulhu',
//       genre: 'Terror',
//       author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//       releaseYear: 1928,
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: { name: 'Isaac Asimov', birthYear: 1920 },
//       releaseYear: 1951,
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//       releaseYear: 1954,
//     },
// //   ];
  
  function oldBooksOrdered() {
    return books.filter((book) => new Date().getFullYear() - book.releaseYear > 60)
    .sort((a, b) => a.releaseYear - b.releaseYear);
  }
// console.log(oldBooksOrdered());

// const expectedResult = [
//     'Frank Herbert',
//     'George R. R. Martin',
//     'Isaac Asimov',
//     'J. R. R. Tolkien',
//   ];
  
  function fantasyOrScienceFictionAuthors() {
return fantasyOrScienceFiction().map((book) => `${book.author.name}`).sort();
  }
//   console.log(fantasyOrScienceFictionAuthors());

// const expectedResult = [
//     'O Senhor dos Anéis',
//     'Fundação',
//     'O Chamado de Cthulhu',
//   ];
  
  function oldBooks() {
    return oldBooksOrdered().sort((a, b) => a.id - b.id).map((book) => `${book.name}`);
  }
// console.log(oldBooks())

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  
}