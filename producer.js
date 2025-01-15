const { kafka } = require("./client");
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

async function init (){
    const producer = kafka.producer();
    console.log("connecting producer....");

    await producer.connect();

    console.log("Producer connected successfully....");

    rl.setPrompt("Enter the name and location : >");
    rl.prompt();

    rl.on('line', async (line) => {
        const [name, location] = line.split(" ");
        await producer.send({
            topic: "Users1",
            messages: [
                {
                    partition: 0,
                    key: "location",
                    value: JSON.stringify({
                        name: name,
                        location: location
                    })
                }
            ]
        })
    }).on('close', async () => {
        // console.log("Messge sent sucessfully....")
        await producer.disconnect();
        console.log('Connection is closed....')
    })
}

init().catch((err)=> console.log(err));