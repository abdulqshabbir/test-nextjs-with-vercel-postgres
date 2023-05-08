// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// database connection
import { sql } from "@vercel/postgres";

export default function handler(request, response) {

  response.status(200).json({ hello: 'Hello there, welcome to Next JS' })
}
