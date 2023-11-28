let tasks = []; // Array para armazenar as tarefas

// Função para adicionar uma nova tarefa à lista
function addTask(taskName) {
    const newTask = {
        name: taskName,
        completed: false // Define como não concluída por padrão
    };
    tasks.push(newTask);
}

// Função para remover uma tarefa da lista
function removeTask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
    } else {
        console.log("Índice de tarefa inválido!");
    }
}

// Função para editar uma tarefa existente na lista
function editTask(index, updatedName) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].name = updatedName;
    } else {
        console.log("Índice de tarefa inválido!");
    }
}

// Função para listar todas as tarefas
function listAllTasks() {
    tasks.forEach((task, index) => {
        console.log(`Tarefa ${index + 1}: ${task.name} - ${task.completed ? 'Concluída' : 'Pendente'}`);
    });
}

// Função para obter uma tarefa através do índice
function getTaskByIndex(index) {
    if (index >= 0 && index < tasks.length) {
        return tasks[index];
    } else {
        console.log("Índice de tarefa inválido!");
        return null;
    }
}

// Exemplo de uso das funções:

addTask("Estudar JavaScript");
addTask("Fazer compras");

listAllTasks();

editTask(0, "Estudar React");

removeTask(1);

listAllTasks();

const task = getTaskByIndex(0);
console.log("Tarefa obtida por índice:", task);
