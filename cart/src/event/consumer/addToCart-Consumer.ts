import { Channel } from "amqplib";
import { addToCartUseCase } from "../../useCase";
import { dataFromMessage } from "../../utils/rabbit-utils";

export default async function buildAddToCartConsumer({
  channel,
}: {
  channel: Channel;
}) {
  try {
    await channel.assertQueue("addToCart");
    channel.consume("addToCart", async (msg) => {
      const data = dataFromMessage(msg);
      console.log(data, "from ampq");
      try {
        await addToCartUseCase(data);
      } catch (error) {
        console.log(error);
      } finally {
        channel.ack(msg);
      }
    });
  } catch (error) {
    console.log(error);
  }
}
