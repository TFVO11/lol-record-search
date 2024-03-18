function dataFormat (user) {
  const [userName, userTag] = user.split(" #");

  const userInfo = {
    Name: userName,
    Tag: userTag
  };

  return userInfo;
}

export default dataFormat
