<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue';
import { useStatic } from '../../composables/useStatic'

const emit = defineEmits(['theme', 'avatar', 'display'])
const props = defineProps(['avatar', 'saveAvatarInStorage', 'theme', 'display'])
const { iconsAvatars, iconsDisplay, iconsTheme } = useStatic()


const avatarImg = iconsAvatars()
const displayImg = iconsDisplay()
const themeImg = iconsTheme()
const avatarList = ref(null)




const openChangeModal = () => {
  avatarList.value.classList.toggle('open')
}

const changeAvatar = (avatar) => {
  emit('avatar', avatar)
  avatarList.value.classList.remove('open')
  props.saveAvatarInStorage()
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
              ? displayImg.iconGrid1Dark
              : displayImg.iconGrid1
          "
          alt="display"
        />
        <img
          v-else-if="props.display === 'grid1'"
          @click="emit('display', 'grid2')"
          class="icon__grid2"
          :src="
            props.theme == 'dark'
              ? displayImg.iconGrid2Dark
              : displayImg.iconGrid2
          "
          alt="display"
        />
        <img
          v-else
          @click="emit('display', 'flex')"
          :src="
            props.theme == 'dark'
              ? displayImg.iconFlexDark
              : displayImg.iconFlex
          "
        />
      </li>

      <li>
        <img
          v-if="props.theme === 'light'"
          @click="emit('theme', 'dark')"
          :src="themeImg.iconThemeDark"
          alt="theme"
        />
        <img
          v-else
          @click="emit('theme', 'light')"
          :src="themeImg.iconThemeLight"
        />
      </li>

      <li>
        <img
          @click="openChangeModal"
          class="img__avatar"
          :src="props.avatar == null ? avatarImg.avatar1 : props.avatar"
          alt="avatar"
        />
      </li>

      <li ref="avatarList" class="avatar__list">
        <img @click="changeAvatar(avatarImg.avatar1)" :src="avatarImg.avatar1" alt="" />
        <img @click="changeAvatar(avatarImg.avatar2)" :src="avatarImg.avatar2" alt="" />
        <img @click="changeAvatar(avatarImg.avatar3)" :src="avatarImg.avatar3" alt="" />
        <img @click="changeAvatar(avatarImg.avatar4)" :src="avatarImg.avatar4" alt="" />
        <img @click="changeAvatar(avatarImg.avatar5)" :src="avatarImg.avatar5" alt="" />
        <img @click="changeAvatar(avatarImg.avatar6)" :src="avatarImg.avatar6" alt="" />
        <img @click="changeAvatar(avatarImg.avatar7)" :src="avatarImg.avatar7" alt="" />
        <img @click="changeAvatar(avatarImg.avatar8)" :src="avatarImg.avatar8" alt="" />
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
