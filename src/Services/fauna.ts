import faunadb from 'faunadb'

export const client = new faunadb.Client({
    secret: process.env.FAUNADB_KEY,
    // domain: 'db.fauna.com',
    // scheme: 'https',
})