<template>
    <div>
        <div class="modal-mask" @click="close" v-show="show">
            <div class="modal-container" @click.stop>
                <iframe sandbox="allow-same-origin allow-scripts allow-popups allow-forms" id="view" :src="url" frameborder="0"></iframe>
            </div>
        </div>
        <img @click="show = !show" src="./../assets/maximize.png" id="plus" alt="">
        <h1>{{name}}</h1>
    </div>
</template>

<script>
  export default {
    name: 'iframeView',
    props: ['url', 'name'],
    data () {
      return {
        show: false
      }
    },
    methods: {
      close () {
        this.show = false
      }
    }
  }
</script>

<style lang="scss" scoped>
    /*.normal {*/
        /*position: relative;*/
        /*width: 100%;*/
        /*height: 300px;*/
    /*}*/
    /*.active {*/
        /*position: fixed;*/
        /*top: 5vh;*/
        /*left: 5vw;*/
        /*width: 90vw;*/
        /*height: 90vh;*/
        /*z-index: 1;*/
    /*}*/
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .5);
        transition: opacity .3s ease;
        .modal-container {
            width: 90vw;
            height: 90vh;
            margin: 4vh auto 0;
            padding: 10px 15px;
            background-color: #fff;
            border-radius: 2px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
            transition: all .3s ease;
            font-family: Helvetica, Arial, sans-serif;
            #view {
                width: 100%;
                height: 100%;
            }
        }
    }
    .modal-enter {
        opacity: 1;
        transition: opacity .5s
    }

    .modal-leave-active {
        opacity: 1;
        transition: opacity .5s
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.6);
        transform: scale(1.6);
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s
    }

    .fade-enter,
    .fade-leave-to
        /* .fade-leave-active in <2.1.8 */

    {
        opacity: 0
    }
</style>
