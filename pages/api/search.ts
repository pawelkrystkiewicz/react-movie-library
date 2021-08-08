import fetch from 'node-fetch'

export default async function searchHandler(req, res) {
  const { type, search, page } = req.query

  const response = await fetch(
    `${process.env.API_URL}?apikey=${process.env.API_KEY}&type=${type}&s=${search}&page=${page}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
  )

  res.send(await response.json())
}
