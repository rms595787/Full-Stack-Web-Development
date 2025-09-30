const conditionalStatement = (req, res) => {
  const data = {
    userId: 20,
  };
  res.render("conditional_statements", data);
};
export { conditionalStatement };
