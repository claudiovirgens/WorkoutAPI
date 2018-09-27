using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WorkoutAPI.Models
{
    public class WorkoutContext : DbContext
    {
        public WorkoutContext (DbContextOptions<WorkoutContext> options)
            : base(options)
        {
        }

        public DbSet<WorkoutAPI.Models.Workout> Workout { get; set; }
    }
}
