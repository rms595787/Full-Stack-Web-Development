// This file is known as controller file

// These all functions are known as controllers
const allStudent = (req, res) => {
  res.send("All Students");
};
const addStudent = (req, res) => {
  res.send("Add new Student");
};
const updateStudent = (req, res) => {
  res.send("Update Student");
};
const deleteStudent = (req, res) => {
  res.send("Delete Student");
};

export { allStudent, addStudent, updateStudent, deleteStudent };
