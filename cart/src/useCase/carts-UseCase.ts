export default (cartRepository: any) => {
  return async (id: string) => {
    return await cartRepository.getAll(id);
  };
};
