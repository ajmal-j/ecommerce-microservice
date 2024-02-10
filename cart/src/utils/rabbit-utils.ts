export function dataFromMessage(data: any) {
  return JSON.parse(data.content.toString());
}
