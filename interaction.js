



let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
] 

  

    lojinha =()=>{
        let containerProdutos = document.getElementById("itens_section")
        
        containerProdutos.insertAdjacentHTML(
          "beforeend",
          `
            <div id="products-div">
                <img src=${ITENS_LOJA[0].url_img}>
                <p id="nome">${ITENS_LOJA[0].nome}</p>
                <p><b>Preço:</b>${ITENS_LOJA[0].preco}</p>
                <p><b>Descrição:</b></p>
                <p>${ITENS_LOJA[0].descricao}</p>
            </div>
            <div id="products-div">
                <img src=${ITENS_LOJA[1].url_img}>
                <p id="nome">${ITENS_LOJA[1].nome}</p>
                <p><b>Preço:</b>${ITENS_LOJA[1].preco}</p>
                <p><b>Descrição:</b></p>
                <p>${ITENS_LOJA[1].descricao}</p>
            </div>
            <div id="products-div">
                <img src=${ITENS_LOJA[2].url_img}>
                <p id="nome">${ITENS_LOJA[2].nome}</p>
                <p><b>Preço:</b>${ITENS_LOJA[2].preco}</p>
                <p><b>Descrição:</b></p>
                <p>${ITENS_LOJA[2].descricao}</p>
            </div>
            <div id="products-div">
                <img src=${ITENS_LOJA[3].url_img}>
                <p id="nome">${ITENS_LOJA[3].nome}</p>
                <p><b>Preço:</b>${ITENS_LOJA[3].preco}</p>
                <p><b>Descrição:</b></p>
                <p>${ITENS_LOJA[3].descricao}</p>
            </div>
            <div id="products-div">
                <img src=${ITENS_LOJA[4].url_img}>
                <p id="nome">${ITENS_LOJA[4].nome}</p>
                <p><b>Preço:</b>${ITENS_LOJA[4].preco}</p>
                <p><b>Descrição:</b></p>
                <p>${ITENS_LOJA[4].descricao}</p>
            </div>
            <div id="products-div">
                <img src=${ITENS_LOJA[5].url_img}>
                <p id="nome">${ITENS_LOJA[5].nome}</p>
                <p><b>Preço:</b>${ITENS_LOJA[5].preco}</p>
                <p><b>Descrição:</b></p>
                <p>${ITENS_LOJA[5].descricao}</p>
            </div>
            <div id="products-div">
                <img src=${ITENS_LOJA[6].url_img}>
                <p id="nome">${ITENS_LOJA[6].nome}</p>
                <p><b>Preço:</b>${ITENS_LOJA[6].preco}</p>
                <p><b>Descrição:</b></p>
                <p>${ITENS_LOJA[6].descricao}</p>
            </div>
            <div id="products-div">
                <img src=${ITENS_LOJA[7].url_img}>
                <p id="nome">${ITENS_LOJA[7].nome}</p>
                <p><b>Preço:</b>${ITENS_LOJA[7].preco}</p>
                <p><b>Descrição:</b></p>
                <p>${ITENS_LOJA[7].descricao}</p>
            </div>
                           
                
                
                
                `
        );        

        
    }

    lojinha();
    