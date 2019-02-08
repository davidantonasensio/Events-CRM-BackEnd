<template>
  <div id="app">
     
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
//import DatePicker from 'vue2-datepicker'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';


export default {
  name: 'app',
  components: {
    Header, Footer//, DatePicker
    //Home
  }/*,
  data() {
    return {
      time1: '',
      time2: '',
      time3: '',
      // custom lang
      lang: {
        days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        pickers: ['next 7 days', 'next 30 days', 'previous 7 days', 'previous 30 days'],
        placeholder: {
          date: 'Select Date',
          dateRange: 'Select Date Range'
        }
      },
      // custom range shortcuts
      shortcuts: [
        {
          text: 'Today',
          onClick: () => {
            this.time3 = [ new Date(), new Date() ]
          }
        }
      ],
      timePickerOptions:{
        start: '00:00',
        step: '00:30',
        end: '23:30'
      }
    }
  }*/
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #707070;
}
body {    
    background: #fff none repeat scroll 0 0;
    /*font: 14px/1.7 "Source Sans Pro",sans-serif;*/
    line-height: 1.42857;
    /*margin: 60px 0 0 0;*/
    margin: 0;
    padding:0; 
    box-sizing:border-box;
}
</style>
