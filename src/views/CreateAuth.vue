<template>
  <div>
    <h1>인증 코드 발급</h1>
    <form @submit.prevent="onSubmit">
      <label for="email">이메일</label>
      <input type="email" v-model="email" id="email" />
      <button>다음</button>
    </form>
  </div>
</template>

<script lang="ts">
import apiClient from "@/api";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const email = ref("");
    const router = useRouter();
    const { commit } = useStore();
    const onVerify = () => router.push("/verifyauth");
    const onSubmit = async () => {
      try {
        const response = await apiClient.get<{
          issueToken: string;
          remainMillisecond: number;
        }>(`/api/reset-password`, {
          params: {
            email: email.value,
          },
        });
        const { issueToken, remainMillisecond } = response.data;
        commit("setEmail", email.value);
        commit("setIssueToken", issueToken);
        commit("setRemainMillisecond", remainMillisecond);
        onVerify();
      } catch (error) {
        alert("인증 코드 발급 실패");
      }
    };
    return {
      email,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped></style>
