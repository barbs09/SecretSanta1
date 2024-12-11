const gifts = {
    interesses: {
        tecnologia: ["Fones de ouvido Bluetooth", "Gadget multifuncional", "Smartwatch", "Teclado mecânico"],
        livros: ["Romance bestseller", "Livro técnico", "História em quadrinhos", "Biografia inspiradora"],
        esportes: ["Camisa do time favorito", "Garrafa térmica esportiva", "Bolsa de academia", "Acessórios para ciclismo"],
        cozinha: ["Conjunto de facas", "Aparelho de fondue", "Livro de receitas", "Kit de especiarias"],
        arte: ["Kit de pintura", "Escultura decorativa", "Quadro moderno", "Livros sobre arte"],
        musica: ["Fones de ouvido de alta qualidade", "Instrumento musical", "Assinatura de streaming", "Álbum de vinil"],
        viagens: ["Organizador de bagagem", "Guia de viagem", "Câmera portátil", "Adaptador universal"]
    }
};

function gerarPresentes() {
    const genero = document.querySelector('input[name="genero"]:checked')?.value;
    const contexto = document.getElementById("contexto").value;
    const interessesSelecionados = Array.from(document.querySelectorAll('input[name="interesse"]:checked')).map(el => el.value);

    const presentes = [];

    interessesSelecionados.forEach(interesse => {
        if (gifts.interesses[interesse]) {
            presentes.push(...gifts.interesses[interesse]);
        }
    });

    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = "";

    if (presentes.length > 0) {
        resultadosDiv.innerHTML = `<h3>Opções de presente para o contexto ${contexto}</h3>`;
        presentes.forEach(presente => {
            const item = document.createElement("p");
            item.textContent = presente;
            resultadosDiv.appendChild(item);
        });
    } else {
        resultadosDiv.innerHTML = `<p>Por favor, selecione ao menos um interesse para gerar sugestões de presentes.</p>`;
    }
}
