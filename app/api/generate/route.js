import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");
    const normalizedShortUrl = body.shorturl.trim().toLowerCase();

    if (!body.url || !body.shorturl) {
      return Response.json(
        { error: "URL and short URL are required" },
        { status: 400 }
      );
    }

    const doc = await collection.findOne({shorturl: normalizedShortUrl});
    if (doc) {
      return Response.json(
        { error: "Short URL already exists" },
        { status: 409 }
      );
    }

   await collection.insertOne({
    url: body.url.trim(),
    shorturl: normalizedShortUrl,
    createdAt: new Date(),
  });

    return Response.json({
      success: true,
      message: "URL generated successfully",
      shorturl: normalizedShortUrl,
    });
  } catch (err) {
    console.error(err);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
