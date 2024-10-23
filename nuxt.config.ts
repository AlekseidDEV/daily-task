// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},

    plugins: [
        '~/plugins/tiptapExtensions'
    ],

    components: [
        {path: '~/shared/components'},
        {path: '~/widgets/components'},
        {path: '~/features/components'},
        {path: '~/entities/components'},
    ],

    modules: [
      'nuxt-quasar-ui',
      '@pinia/nuxt',
      '@nuxt/eslint',
      'nuxt-tiptap-editor',
    ],

    tiptap: {
        prefix: 'Tiptap',
    },

    css: [
        'quasar/css',
        "@/shared/assets/styles/main.scss",
    ],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler'
                }
            }
        }
    },

    quasar: {
        extras: {
            font: 'roboto-font'
        },
        cssAddon: true,
        plugins: [
            'LocalStorage',
            'Notify'
        ]
    },

    typescript: {
        typeCheck: true
    },
})