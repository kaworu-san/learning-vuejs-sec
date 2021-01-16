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


// Application & Component Instances

const app = Vue.createApp({
  data() {
    return { count: 4 }
  }
})
//vm(ViewModel)、インスタンスの参照に慣例的に変数vmを利用する。
const vm = app.mount('#app')
console.log(vm.count)


// Template Syntax

// Text
// Mustache syntax 
// v-once directive (do not update on data change) 

// Raw HTML
const RenderHtmlApp = {
  data() {
    return {
      rawHtml: '<span style="color: red"> This should be red.</span>'
    }
  }
}

Vue.createApp(RenderHtmlApp).mount('#example1')

// data Properties and Methods

// Computed Properties and Watchers

Vue.createApp({
  data(){
    return {
      author: {
        name: 'John Doe',
        books: ['Vue 2 - Advanced Guide', 'Vue 3 -Basic Guide', 'Vue 4- The Mystery']
      }
    }
  },
  computed: {
    // a computed getter
    publishedBooksMessage(){
      // `this` points to the vm instance
      return this.author.books.length > 0? 'Yes' : 'No'
    }
  }
}).mount('#computed-basics')
