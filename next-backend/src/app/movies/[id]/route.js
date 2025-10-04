const { movies } = require("../db");

export async function GET(_req, { params }) {
  const { id } = await params;
  const movie = movies.find((movie) => movie.id == +id);
  return movie
    ? new Response(JSON.stringify(movie))
    : new Response("Movie not found", { status: 404 });
}

export async function PATCH(req, { params }) {
  const { id } = await params;
  const movie = movies.find((movie) => movie.id == +id);
  if (!movie) {
    return new Response(JSON.stringify({ error: "Movie not found:(" }), {
      status: 404,
    });
  }

  try {
    const updatedMovie = await req.json();
    const index = movies.findIndex((m) => m.id == +id);
    movies[index] = { ...movie, ...updatedMovie };
    return new Response(JSON.stringify(movies[index]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to parse Json" }), {
      status: 404,
    });
  }
}

export async function DELETE(req, { params }) {
  const { id } = await params;
  const movieId = +id;

  const index = movies.findIndex((m) => m.id == movieId);

  if (index == -1) {
    return new Response(JSON.stringify({ error: "Movie not found" }), {
      status: 404,
    });
  }

  movies.splice(index);

  return new Response(
    JSON.stringify({ message: "Movie deleted successfully" }),
    { status: 200 }
  );
}
