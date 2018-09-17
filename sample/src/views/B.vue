<template>
  <div>
  <h1>B</h1>

  <label v-for="label in options">
    <input type="radio"
           v-model="current"
           v-bind:value="label.value">
      {{ label.label }}
    </input>
  </label>

  <table>
    <thead>
      <tr>
        <th class="id">ID</th>
        <th class="comment">comment</th>
        <th class="state">state</th>
        <th class="button">-</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in computedTodos" v-bind:key="item.id">
        <th>{{ item.id }}</th>
        <td>{{ item.comment }}</td>
        <td class="state">
          <button v-on:click="doChangeState(item)">
            {{ item.state }}
          </button>
        </td>
        <td class="button">
          <button v-on:click="doRemove(item)">
            削除
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <h2>add new work</h2>
  <form class="add-form" v-on:submit.prevent="doAdd">
    comment <input type="text" ref="comment">
    <button type="submit">Add</button>
  </form>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoStorage from '@/components/TodoStorage.vue';


@Component
export default class ViewB extends Vue {
  private todos: any[];
  private todoStore: any;
  private options: any[];
  private current: number;

  constructor() {
    super();
    this.todos = [
      {id: 1, comment: 'ToDo1', state: 0},
      {id: 2, comment: 'ToDo2', state: 0},
    ];

    // this.todoStore = new TodoStorage;
    this.options = [
      {value: -1, label: 'all'},
      {value: 0, label: 'doing'},
      {value: 1, label: 'end'},
    ];
    this.current = -1;
  }

  private doAdd(event: any, value: any) {
    const comment: any = this.$refs.comment;
    if (!comment.value.length) {
      return;
    }
    this.todos.push({
      id: 3,
      comment: comment.value,
      state: 0,
    });
    comment.value = '';
  }

  private doChangeState(item: any) {
    item.state = item.state ? 0 : 1;
  }

  private doRemove(item: any) {
    const index = this.todos.indexOf(item);
    this.todos.splice(index, 1);
  }


  get computedTodos() {
    return this.todos.filter((el) => {
      return this.current < 0 ? true : this.current === el.state;
    }, this);
  }
}
</script>
