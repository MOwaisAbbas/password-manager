export async function GET() {

    const product = {
        name: 'Clock'
    }

    return Response.json(product)
}
