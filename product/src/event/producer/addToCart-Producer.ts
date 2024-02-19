import amqp from "amqplib";

export default async function addToCartEvent(data: any) {
  try {
    const connection = await amqp.connect("amqp://rabbitmq:5672");
    const channel = await connection.createChannel();
    await channel.assertQueue("addToCart");
    channel.sendToQueue("addToCart", Buffer.from(JSON.stringify(data)));
  } catch (error) {
    console.log(error);
    return error;
  }
}
