const loops = (req, res) => {
  const data = {
    range: 10,
  };
  res.render("loop", data);
};
export { loops };
