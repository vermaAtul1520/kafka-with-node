const { Kafka } = require('kafkajs')

exports.kafka = new Kafka({
    clientId: "kafka-practice",
    brokers: ["0.0.0.0:9092"]
})


