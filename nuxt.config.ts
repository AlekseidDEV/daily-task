// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},

    components: [
        {path: '~/shared/components'},
        {path: '~/widgets/components'},
        {path: '~/features/components'},
        {path: '~/entities/components'},
    ],

    modules: [
        'nuxt-quasar-ui',
        '@pinia/nuxt',
        '@nuxt/eslint'
    ],

    css: [
        "@/shared/assets/styles/main.scss"
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

    quasar: {},

    typescript: {
        typeCheck: true
    },
})
