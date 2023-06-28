import type { PluginOption } from 'vite';

type LibCssOptions = {
  include?: string;
  exclude?: string;
}

export default function (option?: LibCssOptions): PluginOption
