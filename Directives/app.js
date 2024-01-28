const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            url: 'https://google.com',
            raw_url: '<a href="https://google.com" target="_blank">Google</a>',
            age:20
        }
    },
    methods:{
        increment() {
            this.age++;
        },
        updateLastName(msg,event) {
            //event.preventDefault();
            console.log(msg);
            this.lastName = event.target.value;
        },
        updateMiddleName(event) {
            this.middleName = event.target.value;
        },
    },
    computed:{
        fullName() {
            console.log('Full name computed property was called');
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        },
        /*
        A computed property is a way of defining a computed value that is derived from other data properties in the component.
        In this case, the fullName computed property is computed by concatenating the firstName, middleName, and lastName properties 
        
        The code can be explained as follows:

        The fullName computed property is defined using the computed property syntax in JavaScript.
        The fullName computed property is a function that returns a string.
        The function contains a console.log statement that is used for debugging purposes.
        The function uses the this keyword to access the data properties firstName, middleName, and lastName.
        The function uses the literal string to combine the values of the data properties into a single string.
        The function uses the toUpperCase method to convert the lastName prop  to uppercase.


        Overall, the computed property is a simple way of deriving a new value from existing data properties, and can be useful when you need to display derived data in your application.
        */
    },
    watch: {
        age(newVal,oldVal) {
            setTimeout(() => {
                this.age = 20;
            },3000)
        }
    }
}).mount('#app');

setTimeout(() => {
    vm.firstName = 'Bob'
},2000);

// Vue.createApp({
//     data(){
//         return {
//             firstName:'Horas',
//             lastName:'Gheo'
//         }
//     }
// }).mount('#app2')