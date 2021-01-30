// This is going to export the function that is going to retrieve a user's information by username
import firebase from "firebase";
import "firebase/functions";

const getUserInfo = async (username) => {
  const result = await firebase.functions().httpsCallable("getUserInfo")({
    username,
  });

  console.log(result)

  if (result.data.collector.length === 0) {
    return "User is Private";
  }

  return result.data;
};

export { getUserInfo };
