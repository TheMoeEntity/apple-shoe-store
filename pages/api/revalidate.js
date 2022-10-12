export default async function handler(req, res) {
    if (req.query.secret !== process.env.TOKEN) {
        return res.status(401).json({message: 'Invalid Token'})
    }

    try {
       await res.revalidate('/groups') 
       return res.json({revalidated:true})
    } catch (err) {
        return res.status(500).send('Error Revalidating')
    }
}