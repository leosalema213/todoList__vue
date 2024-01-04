<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const emit = defineEmits(['theme', 'avatar', 'display'])

const props = defineProps(['avatar', 'saveAvatarInStorage', 'theme', 'display'])

const openChangeModal = () => {
  const container = document.querySelector('.avatar__list')
  container.classList.toggle('open')
}

const changeAvatar = (avatar) => {
  const container = document.querySelector('.avatar__list')
  emit('avatar', `/src/assets/avatar/avatar${avatar}.jpg`)
  props.saveAvatarInStorage()
  container.classList.remove('open')
}
</script>

<template>
  <div class="container nav__bar" :class="props.theme == 'dark' && 'themeDark'">
    <h1>
      Lepane
      <span>sua lista de tarefas</span>
    </h1>

    <ul class="nav__settings">
      <li class="icon__display">
        <img
          v-if="props.display === 'flex'"
          @click="emit('display', 'grid1')"
          :src="
            props.theme == 'dark'
              ? 'src/assets/icons/dark/icon-grid1-dark.png'
              : 'src/assets/icons/icon-grid1.png'
          "
          alt="display"
        />
        <img
          v-else-if="props.display === 'grid1'"
          @click="emit('display', 'grid2')"
          class="icon__grid2"
          :src="
            props.theme == 'dark'
              ? 'src/assets/icons/dark/icon-grid2-dark.png'
              : 'src/assets/icons/icon-grid2.png'
          "
          alt="display"
        />
        <img
          v-else
          @click="emit('display', 'flex')"
          :src="
            props.theme == 'dark'
              ? 'src/assets/icons/dark/icon-flex-dark.png'
              : 'src/assets/icons/icon-flex.png'
          "
        />
      </li>

      <li>
        <img
          v-if="props.theme === 'light'"
          @click="emit('theme', 'dark')"
          src="../../assets/icons/icons8-símbolo-da-lua-32.png"
          alt="theme"
        />
        <img
          v-else
          @click="emit('theme', 'light')"
          src="../../assets/icons/dark/icons8-luz-acesa-32.png"
        />
      </li>

      <li>
        <img
          @click="openChangeModal"
          class="img__avatar"
          :src="props.avatar == null ? '/src/assets/avatar/avatar1.jpg' : props.avatar"
          alt="avatar"
        />
      </li>

      <li class="avatar__list">
        <img @click="changeAvatar('1')" src="../../assets/avatar/avatar1.jpg" alt="" />
        <img @click="changeAvatar('2')" src="../../assets/avatar/avatar2.jpg" alt="" />
        <img @click="changeAvatar('3')" src="../../assets/avatar/avatar3.jpg" alt="" />
        <img @click="changeAvatar('4')" src="../../assets/avatar/avatar4.jpg" alt="" />
        <img @click="changeAvatar('5')" src="../../assets/avatar/avatar5.jpg" alt="" />
        <img @click="changeAvatar('6')" src="../../assets/avatar/avatar6.jpg" alt="" />
        <img @click="changeAvatar('7')" src="../../assets/avatar/avatar7.jpg" alt="" />
        <img @click="changeAvatar('8')" src="../../assets/avatar/avatar8.jpg" alt="" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.nav__bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $color-dark-gray;
  position: relative;

  h1 {
    span {
      font-size: 18px;
      font-weight: normal;
    }
  }
  .nav__settings {
    display: flex;
    gap: 1.4rem;
    z-index: 2;

    li {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 32px;
        cursor: pointer;
        border-radius: 30px;

        &:hover {
          transform: scale(1.1);
          transition: transform 0.4s;
        }
      }
      &.icon__display {
        img {
          border-radius: 0;
          width: 28px;
        }
        @media screen and (max-width: 576px) {
          display: none;
        }
      }
    }

    .avatar__list {
      display: none;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 8px;
      position: absolute;
      top: 50px;
      right: 0;
      padding: 16px;
      border-radius: 0.375rem;
      box-shadow: 4px 8px 16px $shadow;
      background-color: $backgroundLIGHT;

      img {
        max-width: 60px;
        width: 100%;
        border-radius: 30px;
        &:hover {
          transform: 1.2;
          transition: all 0.4s;
        }
      }
    }
    .avatar__list.open {
      display: grid;
    }
  }
  @media screen and (max-width: 576px) {
    h1 {
      span {
        display: block;
        width: 100%;
      }
    }
  }
}
.nav__bar.themeDark {
  color: $color-white;
  .avatar__list {
    background-color: $backgroundDARK;
  }
}
</style>
