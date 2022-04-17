<template>
  <div>
    <label for="todoAction">TODO</label>
    <input type="text" id="todoAction" v-model="todoAction" />
    <button type="button" @click="clickAddBtn" :disabled="isDisabledAddBtn">
      追加
    </button>
  </div>
  <!-- 一覧 -->
  <div v-for="(todo, index) in todosStore.todos" :key="index">
    {{ todo.todo }}
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useTodosStore } from "../../settings/store";
const todosStore = useTodosStore();

// TODO入力項目
const todoAction = ref("");
// 追加ボタン押せるかフラグ
const isDisabledAddBtn = computed(() => !todoAction.value);
// 追加ボタン押下
const clickAddBtn = () => {
  todosStore.add(todoAction.value);
  todoAction.value = "";
};
</script>
