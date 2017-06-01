new Vue({
    el: '#app',
    data: {
        title: 'Hello World!',
        link: 'http://www.uptake.com',
        customHTML: '<a href="http://www.uptake.com" target="_blank">Uptake!</a>'
    },
    methods: {
        changeTitle: function(event) {
            this.title = event.target.value;
        },
        sayHello: function() {
            return this.title;
        }
    }
});
