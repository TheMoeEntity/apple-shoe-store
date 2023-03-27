import bcrypt from "bcryptjs";
import axios from "axios";
import config from "../../../sanity/sanity.config";
import { signToken } from "../../../helpers/auth";
import client from "../../../helpers/client";

export default async function handler(req, res) {
    const user = await client.fetch(`*[_type == 'user' && email == $email][0]`, {
      email:req.body.email
    })

    if (user && bcrypt.compareSync(req.body.password,user.password)) {
      const token = signToken({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      })
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token
      })
    } else {

      res.status(401).send({
        message:'Invalid email/password! Try again'
      });
    }
}
