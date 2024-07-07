export const skillsetIconsMap = {
  js: {
    name: 'JavaScript',
    iconClass: 'icon-[skill-icons--javascript]',
  },
  ts: {
    name: 'TypeScript',
    iconClass: 'icon-[skill-icons--typescript]',
  },
  effector: {
    name: 'Effector',
    iconClass: 'icon-[skill-icons-ext--effector-dark]',
  },
  vite: {
    name: 'Vite',
    iconClass: 'icon-[skill-icons--vite-dark]',
  },
  nextjs: {
    name: 'Next.js',
    iconClass: 'icon-[skill-icons--nextjs-dark]',
  },
  react: {
    name: 'React',
    iconClass: 'icon-[skill-icons--react-dark]',
  },
  redux: {
    name: 'Redux',
    iconClass: 'icon-[skill-icons--redux]',
  },
  webpack: {
    name: 'Webpack',
    iconClass: 'icon-[skill-icons--webpack-dark]',
  },
  babel: {
    name: 'Babel',
    iconClass: 'icon-[skill-icons--babel]',
  },
  vue: {
    name: 'Vue',
    iconClass: 'icon-[skill-icons--vuejs-dark]',
  },
  vuex: {
    name: 'Vuex',
    iconClass: 'icon-[skill-icons-ext--vuex-dark]',
  },
  nuxtjs: {
    name: 'Nuxt.js',
    iconClass: 'icon-[skill-icons--nuxtjs-dark]',
  },
  html: {
    name: 'HTML',
    iconClass: 'icon-[skill-icons--html]',
  },
  css: {
    name: 'CSS',
    iconClass: 'icon-[skill-icons--css]',
  },
  sass: {
    name: 'Sass',
    iconClass: 'icon-[skill-icons--sass]',
  },
  figma: {
    name: 'Figma',
    iconClass: 'icon-[skill-icons--figma-dark]',
  },
  photoshop: {
    name: 'Photoshop',
    iconClass: 'icon-[skill-icons--photoshop]',
  },
} as const;

export type SkillsetIconMapping = typeof skillsetIconsMap;

export type Skill = keyof SkillsetIconMapping;
