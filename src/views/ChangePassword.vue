<template>
  <div>
    <h1>비밀번호 변경</h1>
    <form @submit.prevent="onSubmit">
      <input type="password" v-model="password" />
      <input type="password" v-model="newPassword" />
      <button>비밀번호 변경</button>
    </form>
  </div>
</template>

<script lang="ts">
import apiClient from "@/api";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const { state, commit } = useStore();
    const password = ref("");
    const newPassword = ref("");
    const onSubmit = async () => {
      try {
        const response = await apiClient.patch<{
          email: string;
        }>("/api/reset-password", {
          email: state.email,
          confirmToken: state.confirmToken,
          newPassword: password.value,
          newPasswordConfirm: newPassword.value,
        });
        commit("setEmail", response.data.email);
        alert("비밀번호 변경 성공");
      } catch {
        alert("비밀번호 변경 실패");
      }
    };
    return {
      password,
      newPassword,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped></style>
