using Microsoft.AspNetCore.Mvc;
using moviesApi.Dtos.MovieDTO;
using moviesApi.Interfaces;
using moviesApi.Model;

namespace moviesApi.Controllers
{
        [Route("api/movie")]
        [ApiController]
        public class MoviesController : ControllerBase
        {
            private readonly IMoviesRepository _movieRepo;

            public MoviesController( IMoviesRepository moviesRepository)
            {
                _movieRepo = moviesRepository;
            }

            [HttpGet]
            public async Task<ActionResult<IEnumerable<Movie>>> GetMovies()
            {
                return await _movieRepo.GetMovies();
            }

            [HttpGet("{id}")]
            public async Task<ActionResult<Movie>> GetMovie([FromRoute] int id)
            {
                var movie = await _movieRepo.GetMovie(id);
                if (movie == null) return NotFound();
                return movie;
            }

            [HttpPost]
            public async Task<ActionResult<Movie>> PostMovie([FromBody] Movie movie)
            {
                
                await _movieRepo.PostMovie(movie);
                return CreatedAtAction(nameof(GetMovie), new { id = movie.Id }, movie);
            }

            [HttpPut("{id}")]
            public async Task<IActionResult> PutMovie([FromRoute] int id,[FromBody] UpdateMovieRequestDto movie)
            {
                var movieModel = await _movieRepo.PutMovie(id, movie);
            if (movieModel == null) return NotFound();

            return Ok(movieModel);
        }

        [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteMovie([FromRoute] int id)
            {
                var movie = await _movieRepo.DeleteMovie(id);
                if (movie == null) return NotFound();

                return NoContent();
            }
        }
    }
