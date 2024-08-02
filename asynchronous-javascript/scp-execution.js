function printHello(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve("Hello");
        },2000)
    });
}

function printWorld(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("World");
        },1000)
    });
}

async function sequentialStart(){
    console.log(await printHello());
    console.log(await printWorld());
}
//sequentialStart(); //Time taken is 3 seconds

async function concurrentStart(){
    const hello = printHello();
    const world = printWorld();
    console.log(await hello);
    console.log(await world);
}
//concurrentStart(); //Time taken is 2 seconds

function parallelStart(){
    return Promise.all([
        (async ()=> console.log(await printHello()))(),
        (async ()=> console.log(await printWorld()))()
    ]);
}
parallelStart();