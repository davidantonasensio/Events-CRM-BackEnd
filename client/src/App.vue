<template>
  <div id="app">

    Window width: {{ windowWidth }}
    <br> Window heightr: {{ windowHeight }}

    <div v-if="windowWidth > 500" style="margin: 0; width: 100%;  height: 100%; ">
      <div style="margin: 0; width: 100%;  height: 100%; ">
        <div style="float: left; width: 10%; min-width: 150px; height: 100%;">
          <Header />
        </div>
        <div style="width: auto;  overflow: hidden;">
          <router-view/>
        </div>
      </div>

      <div style="margin: 0; width: 100%; ">
        <div style="float: left; width: 10%; min-width: 150px;  ">
          <Footer />
        </div>
        <div style="width: auto;  overflow: hidden;">

        </div>
      </div>
    </div>

    <div v-else>
      <div style="margin: 0; width: 100%;  height: 100%; ">
        <div style="min-width: 150px; height: 100%;">
          <Header />
        </div>
        <div style="width: auto;  overflow: hidden;">
          <router-view/>
        </div>
      </div>

      <div style="margin: 0; width: 100%; ">
        <div style="min-width: 150px; ">
          <Footer />
        </div>
        <div style="width: auto;  overflow: hidden;">

        </div>
      </div>
    </div>


  </div>
</template>

<script>
//import DatePicker from 'vue2-datepicker'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


export default {
  name: 'app',
  components: {
    Header, Footer
    //Home
  },
  data: function() {
    return {
      msg: 'Hello World! This is a Event listener test.',
      windowWidth: 10,
      windowHeight: 0,
    }
  },

  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      window.addEventListener('resize', this.getWindowHeight);

      //Init
      this.getWindowWidth()
      this.getWindowHeight()
    })

  },

  methods: {
    getWindowWidth(event) {
        this.windowWidth = document.documentElement.clientWidth;
      },

      getWindowHeight(event) {
        this.windowHeight = document.documentElement.clientHeight;
      }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
    window.removeEventListener('resize', this.getWindowHeight);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #707070;
  height:100%; 
}
html {
    height: 100%;
    margin: 0px;
    padding: 0px;
    position: relative;
}

body {    
    /*background: #fff none repeat scroll 0 0;*/
    background-color:#f0f0f0;
    /*font: 14px/1.7 "Source Sans Pro",sans-serif;*/
    line-height: 1.42857;
    /*margin: 60px 0 0 0;*/
    margin: 0;
    padding:0; 
    box-sizing:border-box;
    height:100%; 
}
</style>
