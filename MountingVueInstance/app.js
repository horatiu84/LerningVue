

let vm = Vue.createApp({
  //IMPORTANT : 
  // VUE WILL TAKE THE DATA FROM THE COMPONENT

  // data() {
  //   return {
  //     message: "Hello world!"
  //   }
  // },

  // Vue lifecycle

  // beforeCreate() {
  //   console.log('beforeCreate() function called', this.message);
  // },
  // created() {
  //   console.log('created() function called', this.message);
  // },
  // beforeMount() {
  //   console.log('beforeMount() function called', this.$el);
  // },
  // mounted() {
  //   console.log('mounted() function called', this.$el);
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate() function called');
  // },
  // updated() {
  //   console.log('updated() function called');
  // },
  // beforeUnmount() {
  //   console.log('beforeUnmount() function called');
  // },
  // unmounted() {
  //   console.log('unmounted() function called');
  // }
  
  
  // using the compiler :
  //template: `{{message}}`
});


vm.component('hello',{
  template: `<h1>{{message}}</h1>`,
  data() {
    return {
      message: "Hello world!"
    }
  }
})

vm.mount('#app');

// setTimeout(() => {
//   vm.mount('#app')
// }, 3000);


/*

let vm2 = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },

  // manually creating the object :
  render() {
    return Vue.h(
      'h1',
      this.message);
  }
  
  The code in the render function creates an HTML element with the tag name "h1" 
  and sets its innerHTML to the value of the message property of the component. 
  This is a basic example of a component in Vue.js, 
  where the component's data is bound to the HTML element using the template syntax.
  
}).mount('#app2');


*/