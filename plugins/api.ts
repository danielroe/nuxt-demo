export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      auth: {
        login: () => {}
      }
    }
  }
})
