

using Microsoft.VisualBasic;
using moviesApi.Dtos.MovieDTO;
using moviesApi.Model;

namespace moviesApi.Interfaces
{
    public interface IMoviesRepository
    {
        Task<List<Movie>> GetMovies();
        Task<Movie?> GetMovie(int id);
        Task<Movie> PostMovie(Movie movie);
        Task<Movie?> PutMovie(int id, UpdateMovieRequestDto updateMovieRequest);
        Task<Movie?> DeleteMovie(int id);    


    }

}