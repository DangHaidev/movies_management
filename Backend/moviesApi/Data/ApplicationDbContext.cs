using Microsoft.EntityFrameworkCore;
using moviesApi.Model;

namespace moviesApi.Data
{
    public class ApplicationDbContext : DbContext
    {
            public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
                : base(options)
            {

            }

            public DbSet<Movie> Movies { get; set; }
    }
}
