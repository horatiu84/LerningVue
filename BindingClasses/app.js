let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
            size: 150,
            fontSize: 40,
            rotation: 0
        }
    },
    computed: {
        circle_classes() {
            return {purple : this.isPurple}
        },
        circle_style() {
            return {
                width: `${this.size}px`,
                height: `${this.size}px`,
                lineHeight: `${this.size}px`,
                fontSize: `${this.fontSize}px`,
                transform: `rotate(${this.rotation}deg)`
            }
        }
    }
}).mount('#app')