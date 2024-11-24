import { User } from "../../backend/models/user.model.js";
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Someting is missing",
      });
    }
    const hashedPassword = await bcrypt.has(password, 10);
    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });
    return res.status(201).json({
      success: true,
      message: "Account created successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};
