using System.ComponentModel.DataAnnotations;

namespace moviesApi.Model
{
    public class Movie
    {
            public int Id { get; set; }

            [Required]
            [MaxLength(100)]
            public string Title { get; set; } = string.Empty;

            [MaxLength(50)]
            public string? Genre { get; set; }

            public int? ReleaseYear { get; set; }

            [MaxLength(100)]
            public string? Director { get; set; }

            [MaxLength(500)]
            public string? Description { get; set; }

            [MaxLength(255)]
            public string? PosterUrl { get; set; }
        
    }
}
