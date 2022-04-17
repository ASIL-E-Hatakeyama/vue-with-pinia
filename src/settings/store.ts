import { defineStore } from "pinia";
import { Router } from "vue-router";

// interfaceで型をガチガチにしちゃえば、
// 項目が増えた時とかにココを直した瞬間、
// 色んな方面でビルドエラーが起きるはずなので、
// 修正対象がわかりやすくなるんでね？
interface LoginInfo {
  userName: string;
  token: string;
}
export const useLoginInfoStore = defineStore("loginInfoStore", {
  state: (): LoginInfo => ({
    userName: "",
    token: "",
  }),
  actions: {
    // ログイン処理
    async login(loginId: string, password: string, router: Router) {
      // 本来ならAPIとか呼んでチェックするけど、
      // API用意するのめんどいのでIDとPassが同じ時だけ通す
      if (loginId === password) {
        this.userName = "ログイン太郎";
        this.token = "tes-token"; // JWT情報とか入れときゃいいじゃん
        router.push("/todo");
      } else {
        alert("ログインID・パスワードが間違っています。");
      }
    },
  },
});

interface TodoInfo {
  todo: string;
  isComplete: boolean;
  isDelete: boolean;
}
ｓ;
export const useTodosStore = defineStore("todosStore", {
  state: () => ({
    todos: [] as TodoInfo[],
  }),
  actions: {
    // 追加
    add(todo: string) {
      this.todos.push({
        todo,
        isComplete: false,
        isDelete: false,
      });
    },
    // TODO 完了・削除
  },
});
