const homeController = (req, res) => {
  // this .render() method allows us to handle ejs content/files
  res.render("index");
};
export { homeController };
