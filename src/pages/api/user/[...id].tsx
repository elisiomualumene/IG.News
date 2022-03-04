import { NextApiRequest, NextApiResponse} from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default  (request: NextApiRequest, response: NextApiResponse) => {

    console.log(request.query)

    const user = [
        {id: 1, nome:"Elisio"},
        {id: 2, nome:"Mary"},
        {id: 3, nome:"Marsai"}
    ]

    return response.json(user)
}