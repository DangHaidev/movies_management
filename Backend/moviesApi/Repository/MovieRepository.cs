using Microsoft.EntityFrameworkCore;
using moviesApi.Data;
using moviesApi.Dtos.MovieDTO;
using moviesApi.Interfaces;
using moviesApi.Model;

namespace moviesApi.Repository
{
    public class MovieRepository : IMoviesRepository
    {
        private readonly ApplicationDbContext _context;

        public MovieRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Movie?> DeleteMovie(int id)
        {
            var movie = await _context.Movies.FirstOrDefaultAsync(x => x.Id == id);
            if (movie == null) return null;

            _context.Movies.Remove(movie);
            await _context.SaveChangesAsync();

            return movie;
        }

        public async Task<Movie?> GetMovie(int id)
        {
            var movie = await _context.Movies.FindAsync(id);
            if (movie == null) return null ;
            return movie;
        }

        public async Task<List<Movie>> GetMovies()
        {
            return await _context.Movies.ToListAsync();
        }

        public async Task<Movie> PostMovie(Movie movie)
        {
            _context.Movies.Add(movie);
            await _context.SaveChangesAsync();
            return movie ;
        }

        public async Task<Movie?> PutMovie(int id, UpdateMovieRequestDto updateMovieRequest)
        {
            var existingMovie = await _context.Movies.FirstOrDefaultAsync(x => x.Id == id);
            if (existingMovie == null) return null;

            existingMovie.Title = updateMovieRequest.Title;
            existingMovie.Director = updateMovieRequest.Director;
            existingMovie.Genre = updateMovieRequest.Genre;
            existingMovie.ReleaseYear = updateMovieRequest.ReleaseYear;
            existingMovie.Description = updateMovieRequest.Description;
            existingMovie.PosterUrl = updateMovieRequest.PosterUrl;

            await _context.SaveChangesAsync();
            return existingMovie;
        }
    }
}