const faunadb = require("faunadb")
const q = faunadb.query
const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET_KEY })

module.exports = async (req, res) => {
    const { email } = req.body
    try {
        const { data } = await client.query(
            q.Map(
                q.Paginate(q.Documents(q.Collection("Subscribers"))),
                q.Lambda("ref", q.Get(q.Var("ref")))
            )
        )
        const oldData = data.find(
            subs => subs.data && subs.data.email === email
        )
        if (!oldData) {
            const dbs = await client.query(
                q.Create(q.Collection("Subscribers"), {
                    data: {
                        email: email,
                    },
                })
            )
            res.status(200).json(dbs.data)
        } else {
            res.status(200).json({ message: "Email already exist" })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
