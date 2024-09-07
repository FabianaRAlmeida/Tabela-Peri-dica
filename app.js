function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
//console.log(section); // Loga a seção no console para fins de depuração

let campoPesquisa = document.getElementById("campo-pesquisa").value
console.log(campoPesquisa)

// Se o campoPesquisa for um string sem nada
// if (campoPesquisa == "") 
if (!campoPesquisa || campoPesquisa == " ") {
    section.innerHTML = "<p>Nada foi encontrado! Você precisa digitar o nome do elemento químico ou característica.</p>";
    return
}

campoPesquisa = campoPesquisa.toLowerCase() //Campo pesquisa todo com letras minúsculas.

//camel case - padrão de escrita para criar variável com duas palavras. Ex. campo-pesquisa => campoPesquisa


//criar variável resultado
// Inicializa uma string vazia para armazenar os resultados da pesquisa
let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

//Para cada dado dentro da lista de dados
// Itera sobre cada dado na lista de dados
for (let dado of dados) {
    titulo	= dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se título includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
        {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
                   <h2>
                       <a href="#" target="_blank">${dado.titulo}</a>
                   </h2>
                   <p class="descricao-meta">${dado.descricao}</p>
                   <a href=${dado.link} target="_blank">Mais informações - Debate aponta importância do hidrogênio verde para descarbonizar economia. Fonte: Agência Senado</a>
       
               </div>
               
               `;
   
   };

    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado!</p>"
    }
    // então, faça... 
    //console.log(dado.título.includes(campoPesquisa))
    // Constrói o HTML para cada resultado da pesquisa
    
   
// Atribui o HTML gerado à seção de resultados
section.innerHTML = resultados
}

// Impressão no console

//console.log(dados); //Saída: Hidrogênio, carbono, nitrogênio...

// Criar uma variável, para poder armazenar a tag do HTML => variável "let


