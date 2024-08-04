var errouGeografia = 0;
var acertouGeografia = 0;

// Atualiza o h2 com o nome atual
function atualizarEstado() {
    if (siglas[indiceAtual] === "BR-AC") {
        document.getElementById("estado").textContent = "Acre"
    } else if (siglas[indiceAtual] === "BR-AL") {
        document.getElementById("estado").textContent = "Alagoas"
    } else if (siglas[indiceAtual] === "BR-AM") {
        document.getElementById("estado").textContent = "Amazonas"
    } else if (siglas[indiceAtual] === "BR-AP") {
        document.getElementById("estado").textContent = "Amapá"
    } else if (siglas[indiceAtual] === "BR-BA") {
        document.getElementById("estado").textContent = "Bahia"
    } else if (siglas[indiceAtual] === "BR-CE") {
        document.getElementById("estado").textContent = "Ceará"
    } else if (siglas[indiceAtual] === "BR-ES") {
        document.getElementById("estado").textContent = "Espírito Santo"
    } else if (siglas[indiceAtual] === "BR-GO") {
        document.getElementById("estado").textContent = "Goiás"
    } else if (siglas[indiceAtual] === "BR-MA") {
        document.getElementById("estado").textContent = "Maranhão"
    } else if (siglas[indiceAtual] === "BR-MG") {
        document.getElementById("estado").textContent = "Minas Gerais"
    } else if (siglas[indiceAtual] === "BR-MS") {
        document.getElementById("estado").textContent = "Mato Grosso do Sul"
    } else if (siglas[indiceAtual] === "BR-MT") {
        document.getElementById("estado").textContent = "Mato Grosso"
    } else if (siglas[indiceAtual] === "BR-PA") {
        document.getElementById("estado").textContent = "Pará"
    } else if (siglas[indiceAtual] === "BR-PB") {
        document.getElementById("estado").textContent = "Paraíba"
    } else if (siglas[indiceAtual] === "BR-PE") {
        document.getElementById("estado").textContent = "Pernambuco"
    } else if (siglas[indiceAtual] === "BR-PI") {
        document.getElementById("estado").textContent = "Piauí"
    } else if (siglas[indiceAtual] === "BR-PR") {
        document.getElementById("estado").textContent = "Paraná"
    } else if (siglas[indiceAtual] === "BR-RJ") {
        document.getElementById("estado").textContent = "Rio de Janeiro"
    } else if (siglas[indiceAtual] === "BR-RN") {
        document.getElementById("estado").textContent = "Rio Grande do Norte"
    } else if (siglas[indiceAtual] === "BR-RO") {
        document.getElementById("estado").textContent = "Rondônia"
    } else if (siglas[indiceAtual] === "BR-RR") {
        document.getElementById("estado").textContent = "Roraima"
    } else if (siglas[indiceAtual] === "BR-RS") {
        document.getElementById("estado").textContent = "Rio Grande do Sul"
    } else if (siglas[indiceAtual] === "BR-SC") {
        document.getElementById("estado").textContent = "Santa Catarina"
    } else if (siglas[indiceAtual] === "BR-SE") {
        document.getElementById("estado").textContent = "Sergipe"
    } else if (siglas[indiceAtual] === "BR-SP") {
        document.getElementById("estado").textContent = "São Paulo"
    } else if (siglas[indiceAtual] === "BR-TO") {
        document.getElementById("estado").textContent = "Tocantins"
    } else if (siglas[indiceAtual] === "BR-DF") {
        document.getElementById("estado").textContent = "Distrito Federal"
    }
}


//inicia o hino instrumental e vai pra página de geografia
function geografia() {
    let musica = document.getElementById("hino");
    let element = document.getElementById("geografia");
    let element1 = document.getElementById("inicio");
    musica.volume = 0.2;
    musica.play();
    element.style.display = 'block';
    element1.style.display = 'none';
    atualizarEstado();
}



//colorem o estado quando passa o mouse em cima
document.querySelectorAll('path').forEach((el) =>
    el.addEventListener('mouseover', (event) => {
        event.target.className = ("enabled");
        description.classList.add("active");
        description.innerHTML = event.target.id;
    })
);

document.querySelectorAll('path').forEach((el) =>
    el.addEventListener("mouseout", () => {
        description.classList.remove("active");
    })
);

document.onmousemove = function (e) {
    description.style.left = e.pageX + "px";
    description.style.top = (e.pageY - 70) + "px";
}


//colorem o estado quando clicam no certo
function norte(id) {
    let element = document.getElementById(id);
    element.style.fill = '#00A400';
}

function nordeste(id) {
    let element = document.getElementById(id);
    element.style.fill = '#018DDC';
}

function centroOeste(id) {
    let element = document.getElementById(id);
    element.style.fill = '#CB0097';
}

function sudeste(id) {
    let element = document.getElementById(id);
    element.style.fill = '#EB0801';
}

function sul(id) {
    let element = document.getElementById(id);
    element.style.fill = '#FFC906';
}


//arrays
//todos os estados
var siglas = ["BR-AC", "BR-AL", "BR-AM", "BR-AP", "BR-BA", "BR-CE", "BR-DF", "BR-ES", "BR-GO", "BR-MA", "BR-MG", "BR-MS", "BR-MT", "BR-PA", "BR-PB", "BR-PE", "BR-PI", "BR-PR", "BR-RJ", "BR-RN", "BR-RO", "BR-RR", "BR-RS", "BR-SC", "BR-SE", "BR-SP", "BR-TO"];
//estados do norte
var norteA = ["BR-AC", "BR-AM", "BR-AP", "BR-PA", "BR-RO", "BR-RR", "BR-TO"];
//estados do nordeste
var nordesteA = ["BR-AL", "BR-BA", "BR-CE", "BR-MA", "BR-PB", "BR-PE", "BR-PI", "BR-RN", "BR-SE"];
//estados do centro oeste
var centroOesteA = ["BR-GO", "BR-MS", "BR-MT"];
//estados do sudeste
var sudesteA = ["BR-ES", "BR-MG", "BR-RJ", "BR-SP", "BR-DF"];
//estados do sul
var sulA = ["BR-PR", "BR-RS", "BR-SC"];


// Função para obter um índice aleatório
function indiceAleatorio(array) {
    return Math.floor(Math.random() * array.length);
}

//chama a função para embaralhar o array de todos os estados
shuffleArray(siglas);


// Índice atual do array
var indiceAtual = 0;


// Função para embaralhar o array de todos os estados para colocar de forma aleatoria
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


//função que verifica se acertou o estado
function verificarEstado(id) {
    //verifica se o ID corresponde ao nome atual
    if (id === siglas[indiceAtual]) {
        acertouGeografia++;
        //se sim, passa para o próximo elemento no array
        indiceAtual = (indiceAtual + 1) % siglas.length;
        //colore o estado de acordo com sua região
        if (norteA.indexOf(id) !== -1) {
            norte(id);
        } else if (nordesteA.indexOf(id) !== -1) {
            nordeste(id);
        } else if (centroOesteA.indexOf(id) !== -1) {
            centroOeste(id);
        } else if (sudesteA.indexOf(id) !== -1) {
            sudeste(id);
        } else if (sulA.indexOf(id) !== -1) {
            sul(id);
        }

        if (acertouGeografia === 27) {
            let encerrando = document.getElementById("geo");
            let estado = document.getElementById("estado");
            encerrando.style.display = 'block';
            estado.style.display = 'none';
        } else {
            //chama função que atualiza o h2 com o novo nome
            atualizarEstado();
        }


    } else {
        if (acertouGeografia <= 27) {
            errouGeografia++;
        }
    }

    if (errouGeografia !== 0) {
        let element = document.getElementById("errouG");
        let element1 = document.getElementById("errouGe");
        element.style.display = 'block';
        element1.innerHTML = errouGeografia;
    }
}