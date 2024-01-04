<script setup>
const props = defineProps(['tarefa', 'isEditing', 'theme', 'display'])
const emit = defineEmits(['editing', 'statusEditing', 'taskStatus', 'saveEditing'])

const setTaskStatus = (tarefa) => {
  if (tarefa.status == 'pending') {
    return 'pendente'
  }
  if (tarefa.status == 'inprogress') {
    return 'em andamento'
  }
  if (tarefa.status == 'completed') {
    return 'concluida'
  }
}
</script>

<template>
  <div class="task__footer" :class="[props.theme == 'dark' && 'theme__dark', props.display]">
    <p v-if="!(props.isEditing === props.tarefa.id)" :class="props.tarefa.status">
      {{ setTaskStatus(props.tarefa) }}
    </p>

    <div v-else class="task__buttons">
      <div class="task__actions">
        <div class="input__group">
          <label for="pendente">pendente</label>
          <input
            @click="emit('statusEditing', 'pending')"
            id="pendente"
            name="status"
            value="pending"
            type="radio"
            :checked="props.tarefa.status == 'pending'"
          />
        </div>

        <div class="input__group">
          <label for="inprogress">em andamento</label>
          <input
            @click="emit('statusEditing', 'inprogress')"
            id="inprogress"
            name="status"
            value="inprogress"
            type="radio"
            :checked="props.tarefa.status == 'inprogress'"
          />
        </div>

        <div class="input__group">
          <label for="completed">concluida</label>
          <input
            @click="emit('statusEditing', 'completed')"
            id="completed"
            name="status"
            value="completed"
            type="radio"
            :checked="props.tarefa.status == 'completed'"
          />
        </div>
      </div>

      <div class="task__actions">
        <button @click="emit('saveEditing', props.tarefa.id)" class="btn--save" type="button">
          Salvar
        </button>

        <button @click="emit('editing', null)" class="btn--cancel" type="button">Cancelar</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.task__footer {
  p {
    margin-top: 2px;
    padding-top: 8px;
    border-top: 2px solid $color-dark-blue;
    text-align: end;
    color: #000;

    &.completed {
      border-top: 2px solid $completed;
    }
    &.pending {
      border-top: 2px solid $inprogress;
    }
  }

  .task__buttons {
    margin-top: 16px;
    display: flex;
    gap: 6px;
    align-items: center;
    justify-content: space-between;

    button {
      padding: 6px 12px;
      border: none;
      color: $backgroundLIGHT;
      font-weight: bold;
      cursor: pointer;
      font-family: sans-serif;
    }
    .task__actions {
      display: flex;
      gap: 1rem;
      .input__group {
        display: flex;
        gap: 2px;
        flex-direction: row-reverse;
      }
    }
    @media screen and (max-width: 992px) {
      display: flex;
      flex-direction: column;

      .input__group {
        justify-content: center;
        align-items: center;
        margin-bottom: 12px;
        label {
          font-size: 14px;
        }
      }
    }
  }
}

.task__footer.theme__dark {
  p {
    border-top: 2px solid $color-dark-blue;
    color: $color-white;

    &.completed {
      border-top: 2px solid $completed;
    }
    &.pending {
      border-top: 2px solid $inprogress;
    }
  }
  .task__buttons {
    color: $color-white;

    .input__group {
      background-color: $backgroundDARK;
      padding: 6px;
      border-radius: 30px;
    }
  }
}

.task__footer.grid1,
.grid2 {
  .task__buttons {
    margin-top: 0;
    flex-direction: column;
    margin-bottom: 16px;
    justify-content: center;
  }
}
</style>
