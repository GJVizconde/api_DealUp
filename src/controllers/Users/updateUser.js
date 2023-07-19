const updateUser = async (
  id,
  name,
  email,
  rol,
  password,
  gender,
  birthdate,
  phone,
  country,
  avatar,
  status,
  thirdPartyCreated
) => {
  const updatedUser = await User.findByPk(id);

  console.log(updatedUser);
};

module.exports = updateUser;
