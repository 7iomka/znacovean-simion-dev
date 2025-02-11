import type { PluginUtils } from 'tailwindcss/types/config';
import { containerMaxWidths } from './container';

export const widthSetup = ({ theme }: PluginUtils) => ({
  ...theme('spacing'),
  // Add .{}-container-xxx, .{}-container-xxx-without-padding
  ...Object.keys(containerMaxWidths).reduce((prev, curr) => {
    const value = containerMaxWidths[curr as keyof typeof containerMaxWidths];
    return {
      ...prev,
      [`container-${curr}`]: value,
      [`container-${curr}-without-padding`]: `calc(${value} - var(--container-padding)*2)`,
    };
  }, {}),
  container: 'var(--container-max-width)',
});
