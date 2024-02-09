import amqp from "amqplib";

const connection = await amqp.connect("amqp://rabbitmq:5672");
export default connection;