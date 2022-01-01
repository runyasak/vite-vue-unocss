<template>
  <div h-full text-center flex select-none all:transition-400>
    <div ma>
      <div
        text-5xl
        fw100
        animate-bounce-alt
        animate-count-infinite
        animate-1s
        text-gray-400
      >
        {{ msg }}
      </div>
      <div text-lg fw300 text-gray-400 m1>
        The instant on-demand Atomic CSS engine.
      </div>
      <div m2 flex justify-center text-2xl text-lg hover="op80">
        <a
          i-carbon-logo-github
          text-inherit
          text-gray-400
          href="https://github.com/antfu/unocss"
          target="_blank"
        ></a>
      </div>
    </div>
  </div>
  <div absolute bottom-5 right-0 left-0 text-center text-lg text-gray-400 fw300>
    on-demand · instant · fully customizable
  </div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>
