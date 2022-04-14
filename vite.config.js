import path from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2';
import WindiCSS from 'vite-plugin-windicss';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import ScriptSetup from 'unplugin-vue2-script-setup/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { createStyleImportPlugin } from 'vite-plugin-style-import';

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
        ScriptSetup(),
        WindiCSS(),
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
            imports: ['@vue/composition-api', 'vue-router', '@vueuse/core'],
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
    server: {
        port: 3333,
    },
});

export default config;
