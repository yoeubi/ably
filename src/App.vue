<template>
  <router-view />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  border: none;
  border-radius: 4px;
  height: 36px;
  padding: 0 24px;
  cursor: pointer;
  background: #1a73e8;
  color: white;
}

input {
  border-radius: 4 px;
  color: #202124;
  font-size: 17px;
  height: 28px;
  padding: 13px 15px;
}

.reset {
  margin-top: 10px;
}
</style>
