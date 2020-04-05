<template>
  <router-view></router-view>
</template>

<script>
import API from './APIsocket.js';
const socket = API()
export default socket
</script>
