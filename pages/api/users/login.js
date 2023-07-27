import bcrypt from "bcryptjs";
import { signToken } from "../../../helpers/auth";
import client from "../../../helpers/client";

export default async function handler(req, res) {
  const user = await client.fetch(`*[_type == 'user' && email == $email][0]`, {
    email: req.body.email,
  });

  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = signToken({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
    const response = {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token,
    };
    console.log(response);
    res.send(response);
  } else {
    let isEmpty = false;
    for (const key in req.body) {
      if (Object.hasOwnProperty.call(req.body, key)) {
        const element = req.body[key];
        if (element == "") {
          isEmpty = true;
        }
      }
    }
    if (isEmpty) {
      return res.status(400).send({ message: ": Data is missing" });
    }
    console.log(req.body);
    res.status(401).send({
      message: "Invalid email/password! Try again",
    });
  }
}
