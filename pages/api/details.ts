import fetch from 'node-fetch'

export default async function detailsHandler(req, res) {
  const { id } = req.query

  const response = await fetch(
    `${process.env.API_URL}?apikey=${process.env.API_KEY}&i=${id}`,
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
