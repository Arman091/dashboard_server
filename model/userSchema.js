import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,

  },
  email: {
    type: String,
  },
  password: {
    type: String,

  },
  profile: {
    type: String,
    default: "web developer",
  },
  followers: {
    type: Number,
    default: 0,
  },
  following: {
    type: Number,
    default: 102,
  },
  About: String,
  Experiences: {
    type: [
      {
        name: String,
        position: String,
        duration: String,
        detail: String,
      },
    ],
    default: [
      {
        name: "TechCorp Inc.",
        position: "Senior Developer",
        duration: "2019 - Present",
        detail: "hello i will add some words",
      },
    ],
  },
  Education: {
    type: [
      {
        name: String,
        degree: String,
        graduationYear: Number,
      },
    ],
    default: [
      {
        name: "University of Tech",
        degree: "Bachelor's in Computer Science",
        graduationYear: 2017,
      },
    ],
  },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel; 
