import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";        

export default async function Page({ params }) {
  const { shorturl } = await params;

  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl });

  if (doc?.url) {
    redirect(doc.url);
  } else {
    redirect(process.env.NEXT_PUBLIC_HOST || "/");
  }
}
