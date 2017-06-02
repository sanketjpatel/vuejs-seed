new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function (message) {
                alert(message);
            },
            persistValue: function(event) {
                this.value = event.target.value;
            }
        }
    });