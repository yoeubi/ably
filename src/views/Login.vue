<template>
  <div>
    <h1>로그인</h1>
    <form>
      <label for="id">아이디</label>
      <input type="text" id="id" />
      <label for="password">비밀번호</label>
      <input type="password" id="password" />
      <button>로그인</button>
    </form>
    <button>비밀번호 재설정</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
