<template>
  <div>
    <h1>로그인</h1>
    <form @submit.prevent="onSubmit">
      <label for="id">아이디</label>
      <input type="text" id="id" v-model="id" />
      <label for="password">비밀번호</label>
      <input type="password" id="password" v-model="password" />
      <button>로그인</button>
    </form>
    <button @click="onReset">비밀번호 재설정</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import apiClient from "../api";

export default defineComponent({
  setup() {
    const { commit } = useStore();
    const id = ref("");
    const password = ref("");
    const router = useRouter();
    const onSuccess = () => router.push("/profile");
    const onReset = () => router.push("/createauth");
    const onSubmit = async () => {
      try {
        const response = await apiClient.post<{ accessToken: string }>(
          "/api/login",
          {
            email: id.value,
            password: password.value,
          }
        );
        commit("setEmail", id.value);
        localStorage.setItem("token", response.data.accessToken);
        onSuccess();
      } catch (error) {
        alert("로그인 실패했습니다");
      }
    };
    return {
      id,
      password,
      onReset,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped></style>
