import path from 'path';
import { defineConfig } from 'vite';
import Unocss from 'unocss/vite';
import { presetAttributify, presetUno } from 'unocss';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import { createStyleImportPlugin } from 'vite-plugin-style-import';
import Vue2 from '@vitejs/plugin-vue2';
import vueJsx from '@vitejs/plugin-vue2-jsx';

const config = defineConfig({
    resolve: {
        alias: {
            '@': `${path.resolve(__dirname, 'src')}`,
        },
        dedupe: ['vue-demi'],
    },

    build: {
        minify: true,
    },

    plugins: [
        Vue2(),
        vueJsx({}),
        Unocss({
            presets: [
                presetAttributify({
                    /* preset options */
                }),
                presetUno(),
                // ...custom presets
            ],
        }),
        Components({
            resolvers: [
                IconsResolver({
                    componentPrefix: '',
                }),
            ],
            dts: 'src/components.d.ts',
        }),
        Icons(),
        AutoImport({
            imports: ['vue', 'vue-router', '@vueuse/core'],
            dts: 'src/auto-imports.d.ts',
        }),
        createStyleImportPlugin({
            libs: [
                {
                    libraryName: 'ant-design-vue',
                    esModule: true,
                    resolveStyle: (name) => {
                        return `ant-design-vue/es/${name}/style/index`;
                    },
                },
            ],
        }),
    ],
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {
                    // 更改主题在这里
                },
                math: 'always',
                javascriptEnabled: true,
            },
        },
    },
});

export default config;
