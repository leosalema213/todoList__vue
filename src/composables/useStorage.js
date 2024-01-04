import { useState } from './useState'


export const useStorage = () => {
  const keyTASK = 'TASKS'
  const keyTHEME = 'THEME'
  const keyAVATAR = 'AVATAR'
  const avatarDefault = '/src/assets/avatar/avatar1.jpg'
  const { estado } = useState()

  if (typeof Storage !== 'undefined') {
    const avatar = localStorage.getItem(keyAVATAR)
    const task = localStorage.getItem(keyTASK)
    const theme = localStorage.getItem(keyTHEME)
    const taskObject = JSON.parse(task)
    estado.tarefas = JSON.parse(task)

    

    if (avatar != avatarDefault) estado.avatar = avatar

    if (taskObject !== null) estado.tarefas = taskObject
    if (theme !== `light`) {
      estado.theme = theme
      const body = document.querySelector('body')
      body.style.backgroundColor = '#060922'
    }
  } else {
    console.log('Web storage is not supported')
  }

  const saveTaskInStorage = () => {
    localStorage.setItem(keyTASK, JSON.stringify(estado.tarefas))
  }

  const saveAvatarInStorage = () => {
    localStorage.setItem(keyAVATAR, estado.avatar)
  }

  const saveThemeInStorage = (e) => {
    localStorage.setItem(keyTHEME, e)
  }
  const state = () => {
    return estado
  }

  return { saveTaskInStorage, saveAvatarInStorage, saveThemeInStorage,state }
}
