const learn_variables = (req, res) => {
  // passing value dynamically
  const data = {
    name: "Huxn",
  };
  res.render("learn_variables", data);
};
export {learn_variables};