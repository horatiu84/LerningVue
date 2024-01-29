let vm = Vue.createApp({
  data() {
    return {
      people: [
        {
          name: 'John',
          message: 'Hello world!'
        },
        {
          name: 'Rick',
          message: 'I like pie.'
        },
        {
          name: 'Amy',
          message: 'Skydiving is fun!'
        }
      ]
    }
  },
  methods: {
    move(){
      const first = this.people.shift(); // takes the first element of the people array and stores it in a new variable called first.

      this.people.push(first); //adds the first element back to the end of the people array

      //  this method is shuffling the array by swapping the first element with the last element, and then moving the first element to the end of the array.
    }
  }
}).mount('#app')
