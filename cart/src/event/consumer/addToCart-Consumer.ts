import { addToCartUseCase } from "../../useCase";
import { dataFromMessage } from "../../utils/rabbit-utils";
import amqp from "amqplib";
export default async function buildAddToCartConsumer() {
  try {
    const connection = await amqp.connect("amqp://rabbitmq:5672");
    const channel = await connection.createChannel();
    await channel.assertQueue("addToCart");
    channel.consume("addToCart", async (msg) => {
      const data = dataFromMessage(msg);
      console.log('first', data)
      try {
        await addToCartUseCase(data);
      } catch (error) {
        console.log(error);
      } finally {
        if (msg) channel.ack(msg);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
