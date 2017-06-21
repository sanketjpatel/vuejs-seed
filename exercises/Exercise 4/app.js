new Vue({
    el: '#exercise',
    data: {
        shouldHighlight: false,
        progress: 0,
        color: '',
        myclass: '',
        mycolor: '',
        myflag: ''
    },
    computed: {
        effectStyles: function () {
            return this.shouldHighlight ? 'highlight' : 'shrink';
        },
        multipleStyles: function () {
            var vm = this;
            var classes = {};

            classes[vm.myclass] = true;
            classes.square = vm.myflag === 'true';

            return classes;
        }
    },
    methods: {
        startEffect: function () {
            var vm = this;

            setInterval(function () {
                vm.shouldHighlight = !vm.shouldHighlight;
            }, 1000);
        },
        startProgress: function () {
            var vm = this;

            setInterval(function () {
                if (vm.progress < 100) {
                    vm.progress += 1;
                }
            }, 50);
        }
    }
});
