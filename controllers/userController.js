
import  UserModel  from "../model/userSchema.js";
export const userSignup = async (req, res) => {
  try {
    const exist = await UserModel.findOne({ name: req.body.name });
    if (exist) {
      return res.status(404).json({ message: "This userName already exists" });
    }

    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();
    let data = await UserModel.findOne({ email: req.body.email });

  
    res.status(200).json({ userdata:data});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const userLogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    let user = await UserModel.findOne({ email: email, password: password });

    if (user) {
      return res.status(200).json({ data: user });
    } else {
      return res.status(401).json("Invalid Login");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};