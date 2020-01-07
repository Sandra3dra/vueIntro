import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

const myVM = (() => {
    //instantiate a new Vue instance
    let vue_vm = new Vue({
        data: {
            message: "Hello from Vue!",

            collection: [
                {name: "Sundra", role: "stuudenttt"},
                {name: "Sundra lamba 2", role: "pilot"},
                {name: "Sundra lamba 3", role: "jumping cooler"}
            ]
        },
        methods: {
            logClicked() {
                console.log("clicked on an element");
            }
        }
    }).$mount("#app");
})();