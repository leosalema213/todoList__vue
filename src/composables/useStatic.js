//ICONS FOR DISPLAY
import iconGrid1 from '../assets/images/icon-grid1.png'
import iconGrid1Dark from '../assets/images/icon-grid1-dark.png'
import iconGrid2 from '../assets/images/icon-grid2.png'
import iconGrid2Dark from '../assets/images/icon-grid2-dark.png'
import iconFlex from '../assets/images/icon-flex.png'
import iconFlexDark from '../assets/images/icon-flex-dark.png'

//ICONS FOR THEME
import iconThemeDark from '../assets/images/icons8-símbolo-da-lua-32.png'
import iconThemeLight from '../assets/images/icons8-luz-acesa-32.png'

//ICONS FOR TASKS
import iconLapis from '../assets/images/icons8-lápis-16.png'
import iconLapisDark from '../assets/images/icon-lapis-dark.png'
import iconLixo from '../assets/images/icons8-lixo-16.png'
import iconLixoDark from '../assets/images/icon-lixo-dark.png'

//ICONS FOR AVATARS
import avatar1 from '../assets/images/avatar1.jpg'
import avatar2 from '../assets/images/avatar2.jpg'
import avatar3 from '../assets/images/avatar3.jpg'
import avatar4 from '../assets/images/avatar4.jpg'
import avatar5 from '../assets/images/avatar5.jpg'
import avatar6 from '../assets/images/avatar6.jpg'
import avatar7 from '../assets/images/avatar7.jpg'
import avatar8 from '../assets/images/avatar8.jpg'

export const useStatic = () => {
  const iconsDisplay = () => {
    return {
      iconGrid1,
      iconGrid1Dark,
      iconGrid2,
      iconGrid2Dark,
      iconFlex,
      iconFlexDark
    }
  }

  const iconsAvatars = () => {
    return {
      avatar1,
      avatar2,
      avatar3,
      avatar4,
      avatar5,
      avatar6,
      avatar7,
      avatar8
    }
  }

  const iconsTask = () => {
    return { 
        iconLapis,
        iconLapisDark,
        iconLixo,
        iconLixoDark 
    }
  }

  const iconsTheme = () => {
    return { 
        iconThemeDark,
        iconThemeLight 
    }
  }

  return {
    iconsDisplay,
    iconsAvatars,
    iconsTask,
    iconsTheme
  }
}
