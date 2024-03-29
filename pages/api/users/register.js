import bcrypt from "bcryptjs";
import axios from "axios";
import config from "../../../sanity/sanity.config";
import { signToken } from "../../../helpers/auth";
import client from '../../../helpers/client'

export default async function handler(req, res) {
  const projectId = config.projectId;
  const dataset = config.dataset;
  const tokenWithWriteAccess = process.env.SANITY_TOKEN;
  const createMutations = [
    {
      create: {
        _type: "user",
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password),
        isAdmin: false,
      },
    },
  ];
  const userEmail = await client.fetch(`*[_type == 'user' && email == $email][0]`, {
    email:req.body.email
  })

  if (userEmail) {
      return res.status(401).send({message:'Email already exists. Try another email'})
  }

  const { data } = await axios.post(
    `https://${projectId}.api.sanity.io/v1/data/mutate/${dataset}?returnIds=true`,
    { mutations: createMutations },
    {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${tokenWithWriteAccess}`,
      },
    }
  );

  const userID = data.results[0].id;
  const user = {
    _id: userID,
    name: req.body.name,
    email: req.body.email,
    isAdmin: false,
  };
  const token = signToken(user);

  res.send({ ...user, token });
}
