using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using moviesApi.Data;
using moviesApi.Model;

namespace moviesApi.Controllers
{
        [Route("api/movie")]
        [ApiController]
        public class MoviesController : ControllerBase
        {
            private readonly ApplicationDbContext _context;

            public MoviesController(ApplicationDbContext context)
            {
                _context = context;
            }

            [HttpGet]
            public async Task<ActionResult<IEnumerable<Movie>>> GetMovies()
            {
                return await _context.Movies.ToListAsync();
            }

            [HttpGet("{id}")]
            public async Task<ActionResult<Movie>> GetMovie([FromRoute] int id)
            {
                var movie = await _context.Movies.FindAsync(id);
                if (movie == null) return NotFound();
                return movie;
            }

            [HttpPost]
            public async Task<ActionResult<Movie>> PostMovie([FromBody] Movie movie)
            {
                _context.Movies.Add(movie);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetMovie), new { id = movie.Id }, movie);
            }

            [HttpPut("{id}")]
            public async Task<IActionResult> PutMovie([FromRoute] int id,[FromBody] Movie movie)
            {
                if (id != movie.Id) return BadRequest();

                _context.Entry(movie).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!_context.Movies.Any(e => e.Id == id)) return NotFound();
                    else throw;
                }

            return Ok(movie);
        }

        [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteMovie([FromRoute] int id)
            {
                var movie = await _context.Movies.FindAsync(id);
                if (movie == null) return NotFound();

                _context.Movies.Remove(movie);
                await _context.SaveChangesAsync();

                return Ok(movie);
            }
        }
    }
