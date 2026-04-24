
import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body = await request.json() 

    // Validate URL
    try {
      new URL(body.url);
    } catch {
      return Response.json({
        success: false,
        message: "Invalid URL"
      });
    }

    const shorturl = body.shorturl || Math.random().toString(36).substring(2, 8);

    // Validate shorturl
    if (!/^[a-zA-Z0-9_-]+$/.test(shorturl)) {
      return Response.json({
        success: false,
        message: "Invalid short URL"
      });
    }

    try {
      const client = await clientPromise;
      const db = client.db("bitlinks")
      const collection = db.collection("url")

      // Check if the short url exists
      const doc = await collection.findOne({shorturl})
      if(doc){
          return Response.json({success: false, error: true,  message: 'URL already exists!' })
      }

      const result = await collection.insertOne({
          url: body.url,
          shorturl,
          clicks: 0,
          createdAt: new Date()
      })

      return Response.json({
          success: true,
          error: false,
          message: 'URL Generated Successfully',
          shorturl
      })
    } catch (err) {
      console.error("Database Error:", err);
      return Response.json({
        success: false,
        message: "Server Error"
      });
    }
  }