<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { reactive } from 'vue'

const props = defineProps(['registerNewTask', 'theme'])

const emit = defineEmits(['update:modelValue'])

const estado = reactive({
  newTask: {
    id: '',
    name: '',
    description: '',
    status: 'pending'
  }
})
</script>

<template>
  <div class="register__task" :class="props.theme == 'dark' && 'theme__dark'">
    <h2>Criando nova tarefa</h2>

    <div class="modal__register">
      <form
        @submit.prevent="
          props.registerNewTask(
            estado.newTask.name,
            estado.newTask.description,
            estado.newTask.status
          )
        "
      >
        <div class="container__inputs">
          <div class="register__inputs">
            <label for="register__name">Nome</label>
            <input v-model="estado.newTask.name" required id="register__name" type="text" />
          </div>

          <div class="register__inputs status">
            <label for="register__description">Status</label>
            <select
              @change="(e) => (estado.newTask.status = e.target.value)"
              name="status"
              id="status"
            >
              <option value="pending">Pendente</option>
              <option value="inprogress">Em andamento</option>
            </select>
          </div>

          <div class="register__inputs">
            <label for="register__description">Descrição</label>
            <textarea id="register__description" v-model="estado.newTask.description" />
          </div>
        </div>

        <div class="register__buttons">
          <button class="btn--save" type="submit">Cadastrar +</button>
          <button @click="() => emit('update:modelValue', false)" class="btn--cancel" type="button">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<style scoped lang="scss">
.register__task {
  box-shadow: 4px 4px 16px $shadow;
  padding: 18px;
  text-align: center;
  border-radius: 0.375rem;
  background-color: $backgroundLIGHT;
  width: 100%;
  color: $color-dark-gray;

  h2 {
    padding-bottom: 20px;
    border-bottom: 2px solid $color-dark-gray;
  }
  .modal__register {
    width: 100%;
    padding: 20px;

    form {
      position: relative;
      display: flex;
      flex-direction: column;

      .container__inputs {
        padding-bottom: 60px;
        display: grid;
        grid-template-columns: 50% auto;
        column-gap: 10%;
        .register__inputs {
          padding-top: 20px;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: start;

          label {
            color: $color-dark-gray;
            margin-bottom: 6px;
            font-size: 22px;
          }

          select {
            border-radius: 0.375rem;
            padding: 8px;
            font-size: 1rem;

            option {
              color: $color-dark-gray;
            }
          }

          input {
            max-width: 500px;
            width: 100%;
            padding: 8px;
            border-radius: 0.375rem;
            border: none;
            font-size: 1rem;
            box-shadow: 4px 4px 16px $shadow;
          }
          textarea {
            max-width: 500px;
            width: 100%;
            height: 180px;
            resize: none;
            padding: 8px;
            font-size: 1rem;
            outline: none;
            border-radius: 0.375rem;
            border: none;
            box-shadow: 4px 4px 16px $shadow;
          }
        }
      }

      .register__buttons {
        position: absolute;
        right: 0;
        bottom: 0;
      }
      button {
        padding: 6px 12px;
        border: none;
        color: $color-white;
        font-weight: bold;
        cursor: pointer;
        font-family: sans-serif;
        margin-left: 12px;
      }
    }
  }
  @media screen and (min-width: 577px) and (max-width: 992px) {
    .modal__register form {
      .container__inputs {
        display: flex;
        flex-direction: column;
        .register__inputs {
          margin-bottom: 20px;

          input {
            max-width: 500px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    h2 {
      font-size: 20px;
      padding-bottom: 8px;
      border-bottom: 1px solid $color-dark-gray;
    }
    .modal__register {
      padding: 0;
      form {
        .container__inputs {
          display: flex;
          flex-direction: column;
          .register__inputs {
            label {
              margin-bottom: 2px;
              font-size: 18px;
            }
          }
        }
        button {
          padding: 4px 8px;
          font-size: 14px;
          margin-left: 12px;
        }
      }
    }
  }
}

.register__task.theme__dark {
  background-color: transparent;
  color: $color-white;
  border: 2px solid $color-blue-highlighted;
  h2 {
    border-bottom: 1px solid $color-blue-highlighted;
  }
  .modal__register {
    form {
      .container__inputs {
        .register__inputs {
          label {
            color: $color-white;
          }

          select {
            background-color: $backgroundDARK;
            border: 1px solid $color-blue-highlighted;
            color: $color-white;
            outline: none;
            option {
              background-color: $backgroundDARK;
              color: $color-white;
            }
          }

          input {
            background-color: $backgroundDARK;
            border: 1px solid $color-blue-highlighted;
            color: $color-white;
          }
          textarea {
            background-color: $backgroundDARK;
            border: 1px solid $color-blue-highlighted;
            color: $color-white;
          }
        }
      }
      button {
        color: $color-white;
      }
    }
  }
}
</style>
