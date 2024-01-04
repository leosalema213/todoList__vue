import { reactive } from 'vue'
export const useState = () => {
  const estado = reactive({
    tarefas: [],
    filtro: 'all',
    creatingTask: false,
    avatar: '/src/assets/avatar/avatar1.jpg',
    theme: 'light',
    display: 'flex'
  })


  return {estado}
}
