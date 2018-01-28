<template>
  <div id="iframe">
    <ul id="contentIframe">
      <li v-for="iframe of iframes" v-bind:key="iframe['.key']">
        <iframeView class="iframeView" :url="iframe.url" :name="iframe.name"></iframeView>
      </li>
    </ul>
    <img src="./../assets/plus.png" @click="seen = !seen" id="add" alt="">
    <transition name="fade">
      <div v-if="seen" id="contentAddUrl">
        <el-input
                v-model="name"
                placeholder="Name"
                clearable>
        </el-input>
        <el-input
                v-model="url"
                placeholder="Enter a Url"
                clearable>
        </el-input>
        <el-button id="btnAdd" @click="addUrl()" type="primary">Add</el-button>
      </div>
    </transition>
  </div>
</template>

<script>
  import {iframesRef} from '../config/base'
  import iframeView from './iframeView'

  export default {
    name: 'Iframe',
    data () {
      return {
        seen: false,
        name: '',
        url: ''
      }
    },
    components: {
      iframeView
    },
    firebase: {
      iframes: iframesRef
    },
    methods: {
      addUrl () {
        iframesRef.push({name: this.name, url: this.url})
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #iframe {
    width: 100%;
    height: 100vh;
    background-color: #FAFAFA;
    ul {
      li {
        list-style: none;
        .iframeView {
          margin: 15px;
        }
      }
    }
    #contentIframe {
      display: flex;
      flex-wrap: wrap;
    }
  }
#add {
  width: 50px;
  position: fixed;
  bottom: 30px;
  right: 30px;
}
  #contentAddUrl {
    position: fixed;
    bottom: 25px;
    right: 110px;
    padding: 10px;
    display: flex;
    width: 600px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 3px 6px #c6cac9;
    #btnAdd {
      margin-left: 10px;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
