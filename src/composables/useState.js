import { reactive } from 'vue'
import { useStatic } from '../composables/useStatic'

export const useState = () => {
  const { iconsAvatars } = useStatic()
  const { avatar1 } = iconsAvatars()

  const estado = reactive({
    tarefas: [],
    filtro: 'all',
    creatingTask: false,
    avatar: avatar1,
    theme: 'light',
    display: 'flex'
  })


  return {estado}
}
