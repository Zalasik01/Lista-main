const tarefaInput = document.getElementById("tarefa");
const adicionarBotao = document.getElementById("adicionar");
const listaTarefas = document.getElementById("tarefas");
const notification = document.getElementById("notification");

// Event Listeners
adicionarBotao.addEventListener("click", adicionarTarefa);
tarefaInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        adicionarTarefa();
    }
});

// Funções
function adicionarTarefa() {
    const tarefaTexto = tarefaInput.value;
    if (tarefaTexto.trim() !== "") {
        const novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = `
            <p class="task"><img class="check" src="_assets/confirm.svg" alt=""> ${tarefaTexto} <img class="excluir check" src="_assets/cancel.svg" alt=""></p>
        `;
        listaTarefas.appendChild(novaTarefa);
        tarefaInput.value = "";
        notification.style.display = "none"; // Oculta a notificação quando a tarefa é adicionada
    } else {
        notification.style.display = "block"; // Exibe a notificação quando o campo está vazio
    }
}

listaTarefas.addEventListener("click", function (e) {
    if (e.target.classList.contains("excluir")) {
        e.target.closest("li").remove();
    }
});
