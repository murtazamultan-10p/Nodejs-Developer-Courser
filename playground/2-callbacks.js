// Asynchronous Callback function

setTimeout(() => {
    console.log('2 seconds up!')
}, 2000);

const names = ['Benchmark', 'Ken', 'Ten']

// Callback function but synchronous
const shortNames = names.filter((name)=> name.length <= 4);
console.log(shortNames);


// user-defined callback functions
const add = (num1, num2, callback) => {
    setTimeout(() => {
        callback(num1 + num2);
    }, 2000);
}


add(1,2, (sum)=>{
    console.log(sum);
});