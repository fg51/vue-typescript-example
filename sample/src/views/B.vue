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

  <p>{{ computedTodos.length }} 件を表示中</p>

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
            {{ labels[item.state] }}
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
import { Component, Vue, Watch } from 'vue-property-decorator';

interface Task {
  id: number;
  comment: string;
  state: number;
}

interface OptionObj {
  value: number;
  label: string;
}

const STORAGE_KEY = 'todos-vuejs-demo';

function fetch(): Task[] {
  // [
  //   {id: 0, comment: "ToDo1", state: 0},
  // ]
  const x = localStorage.getItem(STORAGE_KEY);
  const todos: any[] = JSON.parse(x === null ? '[]' : x);
  todos.forEach((todo, index) => {
    todo.id = index;
  });
  return todos;
}

function save(todos: Task[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}


@Component
export default class ViewB extends Vue {
  private todos: Task[];
  private options: OptionObj[];
  private current: number;
  private uid: number;
  private changed: number;

  constructor() {
    super();
    this.todos = fetch();
    this.uid = this.todos.length;

    this.options = [
      {value: -1, label: 'all'},
      {value: 0, label: 'doing'},
      {value: 1, label: 'end'},
    ];
    this.current = -1;
    this.changed = 0;
  }

  @Watch('todos')
  private onChildChanged(todos: Task[]) {
    save(todos);
  }

  private doAdd(event: any, value: any) {
    const comment: any = this.$refs.comment;
    if (!comment.value.length) {
      return;
    }
    this.todos.push({
      id: this.uid++,
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

  get labels() {
    return this.options.reduce((a, b) => {
      return Object.assign(a, {[b.value]: b.label});
    }, {});
  }

}
</script>
