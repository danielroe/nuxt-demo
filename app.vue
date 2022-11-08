<template>
  <div>
    {{ $route }}
  </div>
</template>

<script setup>
const route = useRoute()
const myCookie = useCookie('myCookie')
const value = useSomething()
const { data: name } = await useFetch('/api/test')
</script>
