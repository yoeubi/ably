<template>
  <div>
    <h1>인증 코드 검증</h1>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="code" />
      <div>인증 만료 시간 {{ counter }}</div>
      <button>다음</button>
    </form>
  </div>
</template>

<script lang="ts">
import apiClient from "@/api";
import { computed, defineComponent, onMounted, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getMMSS } from "../utils";
export default defineComponent({
  setup() {
    const { state, commit } = useStore();
    const code = ref("");
    const counter = computed(() => getMMSS(state.remainMillisecond));
    const router = useRouter();
    const onChange = () => router.push("/changepassword");
    const onSubmit = async () => {
      try {
        const response = await apiClient.post<{
          confirmToken: string;
        }>("/api/reset-password", {
          email: state.email,
          authCode: code.value,
          issueToken: state.issueToken,
        });
        commit("setConfirmToken", response.data.confirmToken);
        onChange();
      } catch (error) {
        alert("인증 코드 검증 실패");
      }
    };
    let timer: number;
    onMounted(() => {
      timer = window.setInterval(() => {
        commit("setRemainMillisecond", state.remainMillisecond - 1);
      }, 1000);
    });
    onUnmounted(() => {
      window.clearInterval(timer);
    });
    return {
      code,
      counter,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped></style>
