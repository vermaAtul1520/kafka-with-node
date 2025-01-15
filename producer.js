const { kafka } = require("./client");

async function init (){
    const producer = kafka.producer();
    console.log("connecting producer....");

    await producer.connect();

    console.log("Producer connected successfully....");

    await producer.send({
        topic:"Users1",
        messages: [
            {
                partition:0,
                key:"location",
                value : JSON.stringify({
                    name : "Johnn 1",
                    location : "NORTH 1"
                })
            }
        ]
    })

    console.log("Messge sent sucessfully....")

    await producer.disconnect();
}

init().catch((err)=> console.log(err));