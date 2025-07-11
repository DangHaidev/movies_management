using System.ComponentModel.DataAnnotations;

namespace moviesApi.Dtos.MovieDTO
{
    public class MovieDTO
    {    
        public string Title { get; set; } = string.Empty;

        public string? Genre { get; set; }

        public int? ReleaseYear { get; set; }

        public string? Director { get; set; }

        public string? Description { get; set; }

        public string? PosterUrl { get; set; } = "https://static.wikia.nocookie.net/vsbattles/images/3/37/Doraemon_renderImproved.png/revision/latest/scale-to-width-down/250?cb=20190730170109";
    }
    
    public class UpdateMovieRequestDto
    {
        public string Title { get; set; } = string.Empty;

        public string? Genre { get; set; }

        public int? ReleaseYear { get; set; }

        public string? Director { get; set; }

        public string? Description { get; set; }

        public string? PosterUrl { get; set; }
    }
}
