<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { reactive } from 'vue'
import Header from './TaskHeader.vue'
import Description from './TaskDescription.vue'
import Footer from './TaskFooter.vue'

const props = defineProps(['tarefas', 'deleteTask', 'filtro', 'theme', 'display'])
const emit = defineEmits(['editTask'])

const estado = reactive({
  isEditing: null,
  editingTask: {
    id: '',
    name: '',
    description: '',
    status: ''
  }
})

const saveEditing = (id) => {
  estado.editingTask.id = id
  emit('editTask', estado.editingTask)

  estado.isEditing = null
  estado.editingTask.name = ''
  estado.editingTask.description = ''
  estado.editingTask.status = ''
}

const nameEditing = (e) => {
  estado.editingTask.name = e
}

const descriptionEditing = (e) => {
  estado.editingTask.description = e.target.value
}

const statusEditing = (status) => {
  estado.editingTask.status = status
}

function transformStatus() {
  switch (props.filtro) {
    case 'all':
      return 'Todas tarefas'
    case 'completed':
      return 'Tarefas finalizadas'
    case 'pending':
      return 'Tarefas pendentes'
    case 'inprogress':
      return 'Tarefas em andamento'
  }
}

const tarefasFiltradas = () => {
  const taskfiltered = props.tarefas.filter((t) => t.status == props.filtro)

  if (props.filtro == 'all') {
    return props.tarefas
  }
  if (taskfiltered.length > 0) {
    return taskfiltered
  }
}

const setEstadoEditing = (value) => {
  estado.isEditing = value
}

const setNull = (e) => {
  estado.isEditing = e
}
</script>

<template>
  <div class="task__body__container" :class="props.theme == 'dark' && 'theme__dark'">
    <h2>{{ transformStatus() }}</h2>
    <ul v-if="props.tarefas.length > 0" class="tasks" :class="props.display">
      <template v-for="tarefa in tarefasFiltradas()" :key="tarefa.id">
        <li class="task__item">
          <Header
            :display="props.display"
            :tarefa="tarefa"
            :is-editing="estado.isEditing"
            :theme="props.theme"
            :delete-task="deleteTask"
            @editing="setEstadoEditing"
            @name-editing="nameEditing"
          />

          <Description
            :display="props.display"
            :tarefa="tarefa"
            :is-editing="estado.isEditing"
            :theme="props.theme"
            @description-editing="descriptionEditing"
          />

          <Footer
            :display="props.display"
            :tarefa="tarefa"
            :is-editing="estado.isEditing"
            :theme="props.theme"
            @editing="setNull"
            @save-editing="saveEditing"
            @status-editing="statusEditing"
          />
        </li>
      </template>

      <span v-if="tarefasFiltradas() == undefined"
        >Você não tem nehuma tarefa em "<b>{{ transformStatus() }}</b
        >"</span
      >
    </ul>

    <template v-else>
      <span>
        Você ainda não possui nenhuma tarefa clique no botão abaixo para adicionar sua primeira
        tarefa.
      </span>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.task__body__container {
  box-shadow: 4px 4px 16px $shadow;
  text-align: center;
  border-radius: 0.375rem;
  max-height: 800px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  padding: 20px 0;

  h2 {
    margin-bottom: 20px;
  }

  .tasks {
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .task__item {
      list-style: none;
      background-color: $backgroundLIGHT;
      padding: 1rem;
      width: 600px;
      box-shadow: 4px 4px 16px $shadow;
      margin-bottom: 20px;
      margin-top: 40px;
      border-radius: 0.375rem;
    }
  }

  @media screen and (min-width: 577px) and (max-width: 992px) {
    padding: 20px 20px;

    .tasks .task__item {
      margin: 0;
      width: 100%;
      margin-top: 10px;
      box-shadow: none;
    }
  }

  @media screen and (max-width: 576px) {
    max-height: 440px;
    box-shadow: none;

    h2 {
      margin-bottom: 0;
      font-size: 20px;
    }

    span {
      font-size: 14px;
    }
    .tasks {
      height: 100%;

      span {
        margin-top: 20px;
        font-size: 14px;
      }
      .task__item {
        margin: 0;
        width: 100%;
        margin-top: 10px;
        box-shadow: none;
      }
    }
  }
}

.tasks.grid1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5%;
  row-gap: 5%;
  height: 100%;
  overflow-y: visible;
  padding: 0px 20px 100px 20px;
  position: relative;
  .task__item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  span {
    position: absolute;
    top: 0;
    right: 20%;
    left: 20%;
  }
}

.tasks.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 5%;
  row-gap: 5%;
  height: 100%;
  overflow-y: visible;
  padding: 0px 20px 100px 20px;
  position: relative;
  .task__item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  span {
    position: absolute;
    top: 0;
    right: 20%;
    left: 20%;
  }

  @media screen and (min-width: 577px) and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
}

.task__body__container.theme__dark {
  box-shadow: 4px 4px 16px $shadow;
  border: 2px solid $color-blue-highlighted;

  h2 {
    color: $color-white;
  }

  .tasks {
    .task__item {
      background-color: $backgroundDARK;
      border: 1px solid $color-blue-highlighted;
      .task__header input {
        background-color: transparent;
        color: $color-white;
        &.editing {
          background-color: $backgroundDARK;
          color: $color-white;
          outline: none;
          border: 1px solid $color-blue-highlighted;
        }
      }
    }
  }
  span {
    color: $color-white;
  }
  @media screen and (max-width: 576px) {
    border: none;
  }
}
</style>
