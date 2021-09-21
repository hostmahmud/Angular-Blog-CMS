using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoreBlogApi.Models
{
    public class Author
    {
        public Author()
        {
            //this.Posts = new HashSet<Post>();
        }

        [Key]
        public int AuthorId { get; set; }
        public string Name { get; set; }
        public DateTime Dob { get; set; }
        public string About { get; set; }

        //nav
        //public ICollection<Post> Posts { get; set; }
    }
}
