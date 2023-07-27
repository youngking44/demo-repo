const handleErrors = (err) => {
  let errors = {};

  if (err.code === 11000) {
    err.message.includes("username_1 dup key")
      ? (errors.username = "Username has been taken")
      : (errors.email = "Email has been taken");
  }

  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(
      ({ properties }) => (errors[properties.path] = properties.message)
    );
  }
  return errors;
};

module.exports = handleErrors;
