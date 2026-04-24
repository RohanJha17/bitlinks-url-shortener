import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

export async function GET(req, { params }) {
  const { shorturl } = await params;

  const client = await clientPromise;
  const db = client.db("bitlinks");

  const doc = await db.collection("url").findOne({ shorturl });

  if (doc) {
    // OPTIONAL: click tracking
    await db.collection("url").updateOne(
      { shorturl },
      { $inc: { clicks: 1 } }
    );

    redirect(doc.url);
  }

  return new Response("URL not found", { status: 404 });
}
