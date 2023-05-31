import type { PluginOption } from 'vite';

type LibCssOptions = {
  include?: string;
  exclude?: string | string[];
}

export default function (option: LibCssOptions): PluginOption
