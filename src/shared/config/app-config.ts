const baseConfig = {
  brandName: 'Znacovean Simion',
  linkedinUrl: 'https://www.linkedin.com/in/simion-znacovean-26021179/',
  telegramUrl: 'https://t.me/exclusi0n',
  githubUrl: 'https://github.com/7iomka',
  phone: '+37367185211',
  email: 'znacovean.simion.dev@gmail.com',
  appBaseURL: import.meta.env?.BASE_URL,
  apiBaseURL: import.meta.env?.VITE_API_BASE_URL,
};

const lsConstants: Record<string, string> = {};

const appConfig = {
  ...baseConfig,
  lsConstants,
};

export { appConfig };
