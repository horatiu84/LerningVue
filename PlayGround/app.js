let vm = Vue.createApp({
    data(){
        return {
            perspective:500,
            rotateX:0,
            rotateY:0,
            rotateZ:0
        }
    },
    methods: {
        reset() {
            this.perspective = 500;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },
        async copy() {
            let text =`transform:${this.boxStyle.transform};`
            await navigator.clipboard.writeText(text);
            alert("CSS copied to clipboard");

            /*
            The async copy() method is used to copy the CSS transform code to the clipboard.
            It does this by getting the CSS transform code from the boxStyle computed property, 
            creating a new text string with the transform code, and then using the clipboard API to write the text to the clipboard.

            If the copy operation is successful, the method displays an alert saying "CSS copied to clipboard".

            Overall, the async copy() method is a simple way to allow users to copy the CSS transform code to the clipboard,
            making it easy to paste it into another document or code editor.
            */
        }

    },
    computed: {
        boxStyle() {
            return{
                transform:
                `perspective(${this.perspective}px)
                 rotateX(${this.rotateX}deg)
                 rotateY(${this.rotateY}deg) 
                 rotateZ(${this.rotateZ}deg) `
            }
        }
    }
}).mount('#app');