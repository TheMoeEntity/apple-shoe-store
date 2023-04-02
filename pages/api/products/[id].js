import client from "../../../helpers/client"
export default async function handler(req, res) {
    const prodcuct = await client.fetch(`*[_type == "product" && _id == $id][0]`,{id:req.query.id})
    res.status(200).json(prodcuct)
  }