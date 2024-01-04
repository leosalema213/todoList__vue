<script setup>
const props = defineProps(['tarefa', 'isEditing', 'theme', 'display'])
const emit = defineEmits(['editing', 'descriptionEditing'])
</script>
<template>
  <div class="task__description" :class="[props.theme == 'dark' && 'theme__dark', props.display]">
    <textarea
      class="tarefa__description"
      :value="tarefa.description"
      :disabled="!(props.isEditing == tarefa.id)"
      @input="(e) => emit('descriptionEditing', e)"
      :class="{
        editing: tarefa.id === props.isEditing
      }"
    />
  </div>
</template>
<style scoped lang="scss">
.task__description {
  textarea {
    font-size: 16px;
    font-weight: normal;
    resize: none;
    width: 100%;
    height: 80px;
    padding: 4px;
    border: none;
    outline: none;
    background-color: $backgroundLIGHT;

    &.editing {
      background-color: $color-white;
      border: 1px solid;
      border-radius: 0.375rem;
      padding: 6px;
    }
  }
  textarea.is--editing {
    border: 1px solid;
    background-color: $color-white;
  }

  @media screen and (max-width: 576px) {
    textarea {
      font-size: 14px;
    }
      
  }
}

.task__description.grid textarea {
  height: 140px;
}

.task__description.theme__dark {
  textarea {
    background-color: transparent;
    color: $color-white;

    &.editing {
      background-color: $backgroundDARK;
      border: 1px solid $color-blue-highlighted;
    }
  }
}
</style>
