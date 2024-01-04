<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'

const props = defineProps(['filtro', 'theme', 'display'])
const emit = defineEmits(['update:modelValue'])
const taskStatusMobile = ref('')
const buttonMenu = ref('')

const openMenu = () => {
  taskStatusMobile.value.classList.toggle('is--open')
}
</script>

<template>

  <ul class="task__status" :class="[props.theme == 'dark' && 'theme__dark', props.display]">
    <li
      @click="() => emit('update:modelValue', 'all')"
      class="status__item"
      :class="props.filtro === 'all' && 'is-active'"
    >
      Todas
    </li>

    <li
      @click="() => emit('update:modelValue', 'inprogress')"
      class="status__item"
      :class="props.filtro === 'inprogress' && 'is-active'"
    >
      Em andamento
    </li>

    <li
      @click="() => emit('update:modelValue', 'pending')"
      class="status__item"
      :class="props.filtro === 'pending' && 'is-active'"
    >
      Pendentes
    </li>

    <li
      @click="() => emit('update:modelValue', 'completed')"
      class="status__item"
      :class="props.filtro === 'completed' && 'is-active'"
    >
      Concluídas
    </li>
  </ul>

  <div class="menu__mobile" :class="props.theme == 'dark' && 'theme__dark'" >
    <div class="menu__container">
      <h3>Filtros</h3>
      <div @click="openMenu" ref="buttonMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <ul ref="taskStatusMobile" class="task__status--mobile">
      <li
        @click="() => emit('update:modelValue', 'all')"
        class="status__item"
        :class="props.filtro === 'all' && 'is-active'"
      >
        Todas
      </li>

      <li
        @click="() => emit('update:modelValue', 'inprogress')"
        class="status__item"
        :class="props.filtro === 'inprogress' && 'is-active'"
      >
        Em andamento
      </li>

      <li
        @click="() => emit('update:modelValue', 'pending')"
        class="status__item"
        :class="props.filtro === 'pending' && 'is-active'"
      >
        Pendentes
      </li>

      <li
        @click="() => emit('update:modelValue', 'completed')"
        class="status__item"
        :class="props.filtro === 'completed' && 'is-active'"
      >
        Concluídas
      </li>
    </ul>
  </div>
  
</template>

<style lang="scss" scoped>
.task__status {
  background-color: $color-white;
  box-shadow: 4px 4px 16px $shadow;
  padding: 18px;
  border-radius: 0.375rem;
  max-height: 400px;
  color: $color-dark-gray;

  &.grid2 {
    display: flex;
    padding: 1% 2%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .status__item {
      width: 20%;
      margin-bottom: 0;
    }

    @media screen and (min-width: 577px) and (max-width: 992px) {
    display: none;
    background-color: red;
    }
  }

  .status__item {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 32px;
    padding: 18px 0;
    border: 2px solid $color-gray;
    border-radius: 0.375rem;
    list-style: none;

    &:hover {
      background-color: $color-blue;
      transition: all 0.6s;
    }
    &.is-active {
      background-color: $color-dark-blue;
      color: $color-white;
      border-color: $color-white;
      transition: all 0.6s;
    }
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
}

h2 {
  background-color: $backgroundLIGHT;
  text-align: center;
  padding: 20px 0;
  font-weight: normal;
}

.task__status.theme__dark {
  background-color: transparent;
  border: 2px solid $color-blue-highlighted;
  box-shadow: 4px 4px 16px $shadow;
  color: $color-dark-gray;

  .status__item {
    border: 2px solid $color-blue-highlighted;
    color: $color-white;

    &:hover {
      background-color: $color-blue-highlighted;
      border: 2px solid $color-blue-highlighted;
    }
    &.is-active {
      background-color: $color-dark-blue;
      color: $color-white;
      border-color: $color-blue-highlighted;
    }
  }
}

.menu__mobile {
  display: none;
  flex-direction: column;
  background-color: $color-white;
  padding: 12px;
  margin-bottom: 8px;
  box-shadow: 4px 4px 16px $shadow--mobile;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
  .menu__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    cursor: pointer;

    span {
      width: 24px;
      height: 3px;
      background-color: #000;
    }
  }
  .task__status--mobile {
    margin-top: 4px;
    padding-top: 4px;
    border-top: 1px solid #000;
    width: 100%;
    margin-bottom: 8px;
    display: none;
    flex-direction: column;

    &.is--open {
      display: flex;
    }

    .status__item {
      padding: 6px;
      list-style: none;
      background-color: transparent;
    }

    @media screen and (min-width: 992px) {
      display: none;

      &.is--open {
        display: none;
      }
    }
  }

  &.theme__dark {
    background-color: transparent;
    border: 1px solid $color-blue-highlighted;
    border-radius: 0.375rem;
    color: $color-white;

    span {
      background-color: $color-white;
    }
    .task__status--mobile {
      margin-top: 4px;
      padding-top: 4px;
      border-top: 1px solid $color-blue-highlighted;
      .status__item {
        background-color: transparent;
      }

      @media screen and (min-width: 992px) {
      display: none;

      &.is--open {
        display: none;
      }
    }
    }
  }
  @media screen and (max-width: 992px) {
    display: flex;
  }
}
</style>
