(() => {
  const student = {
    batch: "3",
    role: "moderator",
  };
  /**
   * Object Destructuring
   */
  //   const { batch, role } = student;
  //   console.log(role);

  /**
   * Rest & Spread Operator
   * Both uses '...' but, they are not same, actually they are opposite
   * Spread helps to expand whether Rest helps to combine
   */
  // Example of Rest Operator
  const newStudent = {
    ...student,
    name: "Miraz",
  };
  // Example of Spread Operator
  const { role, ...restValues } = newStudent;
  console.log(role, restValues);
})();
