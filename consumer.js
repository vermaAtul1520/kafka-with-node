const { kafka } = require("./client");

async function init(){
    const consumer = kafka.consumer({groupId: "user-1"});
    consumer.connect();

    await consumer.subscribe({
        topics: ["Users1"],
        fromBeginning: true
    })

    await consumer.run({
        eachMessage : async ({topic,partition,message,heartbeat,pause}) =>{
            console.log(`output :-- {[${topic}] : PART:${partition}  ${message.value.toString()}}`)
        }
    });

    // await consumer.disconnect();
}

init().catch((err)=>console.log('error',err))