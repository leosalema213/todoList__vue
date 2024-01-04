<script setup>

const props = defineProps(['tarefa', 'isEditing', 'deleteTask','theme', 'display'])
const emit = defineEmits(['editing', 'nameEditing'])

</script>

<template>
  <div class="task__header" :class="props.theme == 'dark' && 'theme__dark'">
    <input
      class="tarefa__name"
      :class="{
        editing: tarefa.id === isEditing
      }"
      :disabled="!(isEditing == tarefa.id)"
      :value="tarefa.name"
      @input="(e) => emit('nameEditing', e.target.value)"
      type="text"
    />

    <div v-if="props.theme == 'dark'" class="task__options">
      <img
        @click="emit('editing', tarefa.id)"
        src="../../assets/icons/dark/icon-lapis-dark.png"
        alt="edit"
      />

      <img @click="deleteTask(tarefa.id)" src="../../assets/icons/dark/icon-lixo-dark.png" alt="del" />
    </div>

    <div v-else class="task__options">
      <img
        @click="emit('editing', tarefa.id)"
        src="../../assets/icons/icons8-lápis-16.png"
        alt="edit"
      />

      <img @click="deleteTask(tarefa.id)" src="../../assets/icons/icons8-lixo-16.png" alt="del" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.task__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  input {
    font-size: 22px;
    padding: 2px;
    border: none;
    background-color: $backgroundLIGHT;
    color: $color-dark-gray;
    margin-bottom: 2px;
    width: 85%;

    &.editing {
      background-color: $color-white;
      border: 1px solid;
      border-radius: 0.375rem;
      padding: 4px;
    }

    @media screen and (max-width: 576px) {
      font-size: 14px;
      width: 70%;
    }
    @media screen and (min-width: 577px) and (max-width: 992px) {
      width: 75%;
     }
  }

  .task__options {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    img {
      width: 20px;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
        transition: all ease-out 0.3s;
      }
    }
  }
  
}

.task__header.theme__dark {
   input {
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
</style>
