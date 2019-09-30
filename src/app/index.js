var dataSource = {
    message: 'hello',
    loggedIn: false,
    imgSrc: "../../assets/images/elephant.jpg",
    imgWidth: '80%',
    buttonClass: 'ui button',
    colorClass: 'violet',
    isLoading: false
}

var vm = new Vue({
    el: '#app',
    data: dataSource,
    beforeDestroy() {
        console.log('要销毁了...');
    },
    destroyed() {
        console.log('bye bye ~');
    }
});

vm.$watch('message', function (newValue, oldValue) {
    console.log('watch message', newValue, oldValue);
});