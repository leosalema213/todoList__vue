<script setup>
import Swal from 'sweetalert2'
import { useStorage } from './composables/useStorage'
import tasksMenu from './components/Taskmenu/index.vue'
import Task from './components/Task/index.vue'
import NewTask from './components/NewTask/index.vue'
import NavBar from './components/navBar/index.vue'

const { saveAvatarInStorage, saveTaskInStorage, saveThemeInStorage, state } = useStorage()

const estado = state()

const deleteTask = (id) => {
  Swal.fire({
    title: 'Você deseja apagar essa tarefa?',
    text: 'uma vez deletada, você não podera recupera-la',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#22c55e',
    cancelButtonColor: '#ef4444',
    confirmButtonText: 'Excluir'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Sucesso',
        text: 'sua tarefa foi deletada com sucesso!',
        icon: 'success',
        confirmButtonColor: '#22c55e'
      })
      const taskDel = estado.tarefas.find((t) => t.id === id)
      const index = estado.tarefas.indexOf(taskDel)
      estado.tarefas.splice(index, 1)
      saveTaskInStorage()
    }
  })
}

const registerTask = (name, description, status) => {
  if (name == undefined) {
    return
  }

  if (estado.tarefas.find((t) => t.name === name)) {
    alert(' você ja possui uma tarefa com esse nome')
    return
  }

  const newTask = {
    id: name,
    name: name,
    description: description,
    status: status
  }

  estado.tarefas.push(newTask)
  estado.creatingTask = false
  saveTaskInStorage()
}

const editingTask = ({ id, name, description, status }) => {
  const filterTask = estado.tarefas.find((t) => t.id === id)

  if (name !== '') {
    if (estado.tarefas.find((t) => t.name == name)) {
      alert('você ja possui uma tarefa com esse nome')
      return
    }
    filterTask.name = name
    filterTask.id = name
    saveTaskInStorage()
  }
  if (description !== '') {
    filterTask.description = description
    saveTaskInStorage()
  }
  if (status !== '') {
    filterTask.status = status
    saveTaskInStorage()
  }
}

const changeTheme = (e) => {
  const body = document.querySelector('body')
  estado.theme = e
  saveThemeInStorage(e)

  if (e == 'dark') {
    body.style.backgroundColor = '#060922'
    return
  }

  body.style.backgroundColor = '#fff'
}

const changeAvatar = (e) => {
  estado.avatar = e
}

const changeDisplay = (e) => {
  estado.display = e
}

</script>

<template>
  <header :class="estado.theme == 'dark' && 'theme__dark'">
    <NavBar
      @display="changeDisplay"
      @theme="changeTheme"
      @avatar="changeAvatar"
      :display="estado.display"
      :theme="estado.theme"
      :avatar="estado.avatar"
      :save-avatar-in-storage="saveAvatarInStorage"
    />
  </header>

  <main class="container" :class="estado.theme == 'dark' && 'theme__dark'">
    <NewTask
      v-model="estado.creatingTask"
      :theme="estado.theme"
      v-if="estado.creatingTask"
      :register-new-task="registerTask"
    />

    <div v-else class="task__container" :class="estado.display">
      <tasksMenu
        v-model="estado.filtro"
        :filtro="estado.filtro"
        :theme="estado.theme"
        :display="estado.display"
      />

      <Task
        :theme="estado.theme"
        :display="estado.display"
        :delete-task="deleteTask"
        :tarefas="estado.tarefas"
        :filtro="estado.filtro"
        @edit-task="editingTask"
      />
    </div>

    <button @click="estado.creatingTask = true">+</button>
  </main>
</template>

<style lang="scss" scoped>
header {
  padding: 12px;
  margin-bottom: 60px;
  box-shadow: 4px 4px 16px $shadow;
  background-color: $backgroundLIGHT;

  @media screen and (max-width: 576px) {
    margin-bottom: 20px;
  }
}

main {
  padding: 20px;
  .task__container {
    display: grid;
    grid-template-columns: 20% 75%;
    gap: 5%;

    &.grid2 {
      display: flex;
      flex-direction: column;
    }
  }

  button {
    font-size: 20px;
    padding: 10px 16px;
    color: $color-white;
    font-weight: normal;
    background-color: $color-blue;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    position: fixed;
    bottom: 12px;
    right: 12px;

    &:hover {
      background-color: $color-dark-blue;
      transition: all ease-in 0.4s;
    }
  }

  @media screen and (min-width: 577px) and (max-width: 992px) {
    padding: 20px 20px;

    button {
      background-color: $color-dark-blue;
    }
    .task__container {
      display: flex;
      flex-direction: column;
    }
    
  }

  @media screen and (max-width: 576px) {
    padding: 0 20px;
    button {
     right: 4px;
     bottom: 4px;
    }
    .task__container {
      display: flex;
      flex-direction: column;
      .menu__mobile {
        display: flex;
      }
    }
  }
}
main.theme__dark {
  button {
    color: $color-white;
    background-color: transparent;
    border: 2px solid $color-blue-highlighted;
    &:hover {
      background-color: $color-blue-highlighted;
      transition: all ease-in 0.4s;
    }

    @media screen and (max-width: 900px) {
      background-color: $color-blue-highlighted;
    }
  }
}

header.theme__dark {
  background-color: $backgroundDARK;
}
</style>
