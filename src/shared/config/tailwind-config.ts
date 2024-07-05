import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import animate from 'tailwindcss-animate';
import { addDynamicIconSelectors } from '@iconify/tailwind';
import aspectRatioPlugin from '@tailwindcss/aspect-ratio';
import typographyPlugin from '@tailwindcss/typography';
import { round } from './theme/lib';

import {
  customTypography,
  customUtilities,
  customComponents,
  colors,
  breakpoints,
  spacing,
  radius,
  shadow,
  transition,
  fontSizes,
  fontFamily,
  widthSetup,
  containerSetup,
  animation,
  keyframes,
} from './theme';
import { globalCssVariables } from './global-css-variables';

/**
 * By default the spacing scale is inherited by the
 * padding, margin, width, height, maxHeight, gap, inset, space, translate, scrollMargin, and scrollPadding core plugins.
 * We extend this list with: maxWidth, flexBasis
 * Also we added `full` value for some rules
 */

export const tailwindConfig: Partial<Config> = {
  darkMode: ['class', '[data-theme="dark"]'], // custom class instead of default 'dark'
  theme: {
    fontSize: fontSizes,
    // transition parts
    ...transition,
    // container setup
    container: containerSetup,
    // own screens
    screens: breakpoints,
    // Border radius (.rounded-xxx)
    borderRadius: radius,
    spacing: spacing.all,
    boxShadow: shadow,
    aspectRatio: {
      ...Array.from(Array(21).keys()).reduce((acc, curr) => {
        return {
          ...acc,
          [`${curr + 1}`]: `${curr + 1}`, // from 1 to 21
        };
      }, {}),
    },
    extend: {
      colors,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        ...fontFamily,
        sans: fontFamily.default, // alias
      },
      width: widthSetup,
      maxWidth: widthSetup,
      minWidth: widthSetup,
      flexBasis: widthSetup,
      keyframes,
      animation,
      // Add custom variants
      lineHeight: {
        ...Array.from({ length: 100 }, (_, i) => round(1 + i * 0.01)).reduce(
          (acc, curr) => {
            return {
              ...acc,
              // usage: leading-1-5 (line-height: 1.5)
              // from v3.3 you may use text-sm/1-5
              [`${curr}`.replace('.', '-')]: `${curr}`,
            };
          },
          {},
        ),
      },
    },
  },
  plugins: [
    aspectRatioPlugin,
    typographyPlugin(),
    animate,
    // Iconify plugin
    addDynamicIconSelectors({
      prefix: 'icon',
      overrideOnly: true,
    }),

    // Adding custom utilities here
    plugin((cfg) => {
      const { addComponents, addUtilities, addBase } = cfg;

      addComponents(customTypography);
      customComponents.map((cmp) => addComponents(cmp()));
      customUtilities.map((cmp) => addUtilities(cmp()));

      addBase({
        ':root': {
          ...globalCssVariables(),
        },
        'html, body': {
          minWidth: 'var(--min-document-width)',
        },
        body: {
          fontFamily: 'var(--font-family-default)',
          fontSize: 'var(--font-size-md)',
          background: 'var(--root-background-color)',
          color: 'var(--root-color)',
          lineHeight: 'normal',
          textDecorationSkipInk: 'none',
        },
      });
    }),
  ],
  corePlugins: {
    aspectRatio: false,
  },
};
