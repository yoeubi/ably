<template>
  <div>
    <h1>회원정보</h1>
    <div>
      <div>이름: {{ username }}</div>
      <div>이메일: {{ useremail }}</div>
      <div>
        프로필 이미지
        <img v-if="image" :src="image" alt="이미지" />
      </div>
    </div>
    <button @click="onLogout">로그아웃</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import apiClient from "../api";

export default defineComponent({
  setup() {
    const { commit } = useStore();
    const username = ref("");
    const useremail = ref("");
    const image = ref("");
    const router = useRouter();
    const onLogin = () => router.push("/login");
    const onLogout = async () => {
      try {
        await apiClient.post("/api/logout", null, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        });
        commit("reset");
        onLogin();
      } catch (error) {
        alert("로그아웃 실패");
      }
    };
    onMounted(async () => {
      try {
        const response = await apiClient.get<{
          name: string;
          email: string;
          profileImage: string;
        }>("/api/user", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        });
        const { name, email, profileImage } = response.data;
        username.value = name;
        useremail.value = email;
        image.value = profileImage;
      } catch (error) {
        onLogin();
      }
    });
    return {
      username,
      useremail,
      image,
      onLogout,
    };
  },
});
</script>

<style lang="scss" scoped></style>
