
export async function POST(req) {
    const request = await req.json()
    console.log("req", request)
    return Response.json({ message: 'Hello from Next.js!' })
}