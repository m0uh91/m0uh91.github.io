<template>
  <div id="app">
    <el-container>
      <el-aside width="60px" id="aside">Aside</el-aside>
      <el-container>
        <el-header id="header">Header</el-header>
        <el-main id="main">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  body, #main {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #header {
    background-color: #00AAFF;
  }
  #aside {
    background-color: #7f7f7f;
    height: auto;
  }
</style>
