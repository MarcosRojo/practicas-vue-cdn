
const app = Vue.createApp({
    
    data() {
        return {
            author: "Bruce Weyne",
            quote: "i'm Battman"

        }
    },
    methods: {
        changeQuote( event ){
            console.log("Hola Mundo", event);
            this.author = "BincMaster"
            this.capitalize()
        },        
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    },
})

app.mount('#myApp')