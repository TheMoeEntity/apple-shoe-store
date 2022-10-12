import axios from "axios"

export default async function handler(req, res) {
    const {method} = req

    if (method === "GET") {
        try {
               
            const data  = await fetch("http://localhost:5000/posts")
            const res = data.json()
            res.status(200).json(res)
                
        } catch (error) {
            res.status(500).json(err)
        }
    }
  }