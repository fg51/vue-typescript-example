<template>
  <div>
  <h1>A</h1>
  <InputBind/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InputBind from '@/components/InputBind.vue';

@Component({
  components: {
    InputBind,
  },
})

export default class A extends Vue {}
</script>
