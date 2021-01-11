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

// directive （ディレクティブ）
// Directives are prefixed with v- to indicate that they are special attributes provided by Vue, and as you may have guessed, they apply special reactive behavior to the rendered DOM.
const AttributeBinding ={
  data() {
    return {
      message: 'You loaded this page on' + new Date().toLocaleString()
    }
  }
}

Vue.createApp(AttributeBinding).mount('#bind-attribute')

// Handling User Input (ユーザー入力の制御)
// v-on directive to attach event listeners
// Note: we update the state of our app without touching the DOM
const EventHandling = {
  data() {
    return {
      message: 'Hello Vue.js!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}

Vue.createApp(EventHandling).mount('#event-handling')


// Conditionals and Loops (条件分岐とループ)
const ConditionalRendering = {
  data() {
    return {
      seen: true
    }
  }
}

Vue.createApp(ConditionalRendering).mount('#conditional-rendering')

const Listrendering = {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue'},
        { text: 'Build someting awesome' }
      ]
    }
  }
}

Vue.createApp(Listrendering).mount('#list-rendering')