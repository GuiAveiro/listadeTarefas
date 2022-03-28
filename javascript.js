let input = document.getElementById("input-one")
let botao = document.getElementById("botao-add")
let listaUl = document.getElementById("tarefas")
let tarefanome = document.getElementById("nome-tarefa-id")
let arraydeTarefas = []

recarregarTarefas()

function mostrarTarefas() {

    let novaLi = ""
    arraydeTarefas.forEach((tarefanome, index) => {
        novaLi = novaLi + ` <li class="itens-tarefas ${ tarefanome.concluida == true ? "concluido" : "" }">
<button class="foguete-botao" onclick="concluirTarefa(${index})"><i class="fa-solid fa-rocket"></i></button>
<p class="nome-tarefa ${ tarefanome.concluida == true ? "concluido" : "" }" id="nome-tarefa-id">${tarefanome.tarefa}</p>
<button class="botao-del" onclick="deletarTarefa(${index})"><i class="fa-solid fa-trash-can"></i></button>
</li>`

    })
    listaUl.innerHTML = novaLi
    localStorage.setItem("lista", JSON.stringify(arraydeTarefas))
}

function deletarTarefa(index) {
    arraydeTarefas.splice(index, 1)
    mostrarTarefas()
}

function concluirTarefa(index) {
    arraydeTarefas[index].concluida = !arraydeTarefas[index].concluida
    mostrarTarefas()
}



function adicionarTarefa() {
    if (input.value) {

        arraydeTarefas.push({
            tarefa: input.value,
            concluida: false
        })
    } else {
        alert("Digite uma Tarefa")
    }
    input.value = ""

    mostrarTarefas()

}


function recarregarTarefas() {
    let minhasTarefas = localStorage.getItem("lista")

    if (minhasTarefas) {
        arraydeTarefas = JSON.parse(minhasTarefas)
        mostrarTarefas()
    }

}



function adicionarpeloEnter(teclas) {
    if (teclas.key === "Enter") {
        adicionarTarefa()
    }
}


botao.addEventListener("click", adicionarTarefa)
document.addEventListener("keypress", adicionarpeloEnter)