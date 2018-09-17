<template>
  <div>
  <h1>B</h1>

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
      <tr v-for="item in todos" v-bind:key="item.id">
        <th>{{ item.id }}</th>
        <td>{{ item.comment }}</td>
        <td class="state">
          <button>{{ item.state }}</button>
        </td>
        <td class="button">
          <button v-on:click="doRemove(item)">削除</button>
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

const STORAGE_KEY = 'todos-vuejs-demo';


// class TodoStorage {
//   uid: number;
//
//   fetch() {
//     let todos = JSON.parse(
//       localStorage.getItem(STORAGE_KEY) || '[]'
//     );
//     todos.forEach((todo, index) => {
//       todo.id = index
//     });
//     this.uid = todo.length;
//     return todos;
//   }
//
//   save(todos) {
//     localStorage.setItem(
//       STORAGE_KEY,
//       JSON.stringify(todos))
//   }
// }


@Component
export default class ViewB extends Vue {
  private todos: any[];

  constructor() {
    super();
    this.todos = [
      {id: 1, comment: 'ToDo1', state: 0},
      {id: 2, comment: 'ToDo2', state: 0},
    ];
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

  private doRemove(item: any) {
    const index = this.todos.indexOf(item);
    this.todos.splice(index, 1);
  }
}
</script>
