const HelloWorld = {
    data() {
      return {
        message: 'Hello World!!'
      }
    }
  }
  
Vue.createApp(HelloWorld).mount('#helloworld')

// Declarative Rendering (宣言的レンダリング)
// declaratively render data to the DOM using straightforward template syntax:
// The data and the DOM are now linked, and everything is now reactive.
const CounterApp ={
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(()=>{
      this.counter++
    }, 1000)
  }
}
Vue.createApp(CounterApp).mount('#counter')