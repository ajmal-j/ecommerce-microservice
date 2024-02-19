import amqp from "amqplib";

export default async function updateProductInCartEvent(data: any) {
  try {
    const connection = await amqp.connect("amqp://rabbitmq:5672");
    const channel = await connection.createChannel();
    await channel.assertQueue("editProduct");
    channel.sendToQueue("editProduct", Buffer.from(JSON.stringify(data)));
  } catch (error) {
    console.log(error);
    return error;
  }
}
