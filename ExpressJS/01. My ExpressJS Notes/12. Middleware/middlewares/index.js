const userCredentials = (req, res, next) => {
  console.log("Name: (Rahul)");
  console.log("Age: (19)");
  console.log("Email: (rms595787@gmail.com)");
  console.log("Contact no.: (9999XXXXXX)");
  next();
};
export default userCredentials;
