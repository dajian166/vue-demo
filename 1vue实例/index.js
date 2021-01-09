//手工挂载
// var vm = new Vue
// vm.$mount("#app")

var dataSource = {
    message: 'hello'
}
var vm = new Vue({
    el: '#app',
    data: dataSource,
    beforeDestroy() {
        console.log('要被干掉了...');
    },
    destroyed() {
        console.log('bye bye...');
    }
})

console.log('dataSource', dataSource)
console.log(vm.$data === dataSource);
// 获取值
console.log(vm.$data.message);
console.log(dataSource.message);
console.log(vm.message);

vm.$watch('message', function (newValue, oldValue) {
    console.log(newValue, oldValue);
})
// 设置值
vm.message = 'wujian'
dataSource.message = 'wj';

vm.$destroy();