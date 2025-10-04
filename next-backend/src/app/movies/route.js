import { movies } from "./db";

export async function GET() {
  return Response.json(movies);
}

export async function POST(req) {
  let movie = await req.json();
  const newMoview = { ...movie };
  movies.push(newMoview);
  return new Response(JSON.stringify(newMoview));
}

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");

  const filteredCommets = query
    ? movies.filter((m) => m.title.toLowerCase().includes(query.toLowerCase()))
    : movies;

  return Response.json(filteredCommets);
}
