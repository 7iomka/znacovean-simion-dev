export const skillsetIconsMap = {
  js: {
    name: 'JavaScript',
    iconClass: 'icon-bg icon-[skill-icons--javascript]',
  },
  ts: {
    name: 'TypeScript',
    iconClass: 'icon-bg icon-[skill-icons--typescript]',
  },
  effector: {
    name: 'Effector',
    iconClass: 'icon-bg icon-[skill-icons-ext--effector-dark]',
  },
  vite: {
    name: 'Vite',
    iconClass: 'icon-bg icon-[skill-icons--vite-dark]',
  },
  nextjs: {
    name: 'Next.js',
    iconClass: 'icon-bg icon-[skill-icons--nextjs-dark]',
  },
  react: {
    name: 'React',
    iconClass: 'icon-bg icon-[skill-icons--react-dark]',
  },
  redux: {
    name: 'Redux',
    iconClass: 'icon-bg icon-[skill-icons--redux]',
  },
  webpack: {
    name: 'Webpack',
    iconClass: 'icon-bg icon-[skill-icons--webpack-dark]',
  },
  babel: {
    name: 'Babel',
    iconClass: 'icon-bg icon-[skill-icons--babel]',
  },
  vue: {
    name: 'Vue',
    iconClass: 'icon-bg icon-[skill-icons--vuejs-dark]',
  },
  vuex: {
    name: 'Vuex',
    iconClass: 'icon-bg icon-[skill-icons-ext--vuex-dark]',
  },
  nuxtjs: {
    name: 'Nuxt.js',
    iconClass: 'icon-bg icon-[skill-icons--nuxtjs-dark]',
  },
  html: {
    name: 'HTML',
    iconClass: 'icon-bg icon-[skill-icons--html]',
  },
  css: {
    name: 'CSS',
    iconClass: 'icon-bg icon-[skill-icons--css]',
  },
  sass: {
    name: 'Sass',
    iconClass: 'icon-bg icon-[skill-icons--sass]',
  },
  figma: {
    name: 'Figma',
    iconClass: 'icon-bg icon-[skill-icons--figma-dark]',
  },
  photoshop: {
    name: 'Photoshop',
    iconClass: 'icon-bg icon-[skill-icons--photoshop]',
  },
} as const;

export type SkillsetIconMapping = typeof skillsetIconsMap;

export type Skill = keyof SkillsetIconMapping;
