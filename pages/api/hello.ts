// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse): any => {
  res.status(200).json({ name: 'John Doe' })
  return {}
}

export default handler
