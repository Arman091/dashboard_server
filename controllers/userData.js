
import UserModel from "../model/userSchema.js";
export const userData = async (req, res) => {
   
  try {
      const users = await UserModel.find({ });

    if (!users) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ data: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
