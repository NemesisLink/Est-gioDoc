using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EstagioDoc2.Models;
using Microsoft.EntityFrameworkCore;

namespace EstagioDoc2.Data
{ }
    public class UserContext: DbContext
    {




        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
    public object Usuarios { get; internal set; }
}

