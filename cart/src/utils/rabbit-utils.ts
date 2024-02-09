export function dataFromMessage(data) {
  return JSON.parse(data.content.toString());
}
