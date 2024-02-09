import buildAddToCartConsumer from "./consumer/addToCart-Consumer";

import ampq from "./config/index";
const channel = await ampq.createChannel();

buildAddToCartConsumer(channel);
