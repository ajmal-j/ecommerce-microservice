export default (userRepository: any) => {
  return async () => {
    return await userRepository.users();
  };
};
