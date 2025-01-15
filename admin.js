const { kafka } = require("./client");


async function init(){
    const admin = kafka.admin();
    console.log("admin connecting ....")
    await admin.connect();
    console.log("admin sucesfully conected....")

    await admin.createTopics({
        topics: [
            {
                topic: "Users",
                numPartitions :2
            }
        ]
    })

    console.log("Topic created...");
    console.log("Disconnecting ....");
    await admin.disconnect();
}

init().catch((err)=> console.log(err));