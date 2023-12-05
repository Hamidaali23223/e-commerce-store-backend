exports.register = async (req, res) => {
  try {
    const { firstName, lastName, password, email } = req.body;
    if (!firstName || !lastName || !password || !email) {
      return res.status(401).json({
        message: "Please Enter All Fields",
      });
    }

    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
