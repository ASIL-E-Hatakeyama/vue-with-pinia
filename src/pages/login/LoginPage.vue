<template>
  <div>
    <div>
      <label for="loginId">ログインID</label>
      <input type="text" id="loginId" v-model="inputForm.loginId" />
    </div>
    <div>
      <label for="password">パスワード</label>
      <input type="password" id="password" v-model="inputForm.password" />
    </div>
    <button type="button" @click="clickLoginBtn" :disabled="isDisabledLoginBtn">
      ログイン
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount, reactive } from "vue";
import { useLoginInfoStore } from "../../settings/store";
const loginInfoStore = useLoginInfoStore();

// マウント時にログアウトする
// setup時でも良いかなと思ったけど
// onMountedとかの書き方の備忘録も兼ねてこのタイミングで。。。
onBeforeMount(() => {
  loginInfoStore.logout();
});

// ログイン入力項目
const inputForm = reactive({
  loginId: "",
  password: "",
});
// ログインボタン押せるかフラグ
const isDisabledLoginBtn = computed(
  () => !inputForm.loginId || !inputForm.password
);
// ログインボタン押下
const clickLoginBtn = () =>
  loginInfoStore.login(inputForm.loginId, inputForm.password);
</script>
