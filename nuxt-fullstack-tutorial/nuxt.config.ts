import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    modules: ['@nuxt/image-edge', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/apollo'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true
    },
    colorMode: {
        classSuffix: ''
    },
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://rickandmortyapi.com/graphql'
            }
        },
    },
    image: {
        domains: ['https://rickandmortyapi.com/graphql']
    }
})
