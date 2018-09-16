<template>
  <div class="input-bind">
  <input type="text" v-model="message">
  <p>Message is: {{ message }}</p>
  <p>sample</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class InputBind extends Vue {
  private message: string;

  constructor() {
    super();
    this.message = 'abc';
  }
}
</script>
