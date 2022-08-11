function fn() {
    console.log('fn ' ,this);

    function run() {
        console.log(this);
        console.log(this.a);
    }
    run();

}

var item1 = {
    a : 1,
    fn : fn
}
var item2 = {
    a : 100,
    fn : fn
}

item1.fn(); //?
item2.fn(); //?

