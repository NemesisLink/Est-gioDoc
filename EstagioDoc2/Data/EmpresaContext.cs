using EstagioDoc2.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EstagioDoc2.Data
{ }
    public class EmpresaContext : DbContext
    {



        public EmpresaContext(DbContextOptions<EmpresaContext> options) : base(options)

        {
        }

        public DbSet<Empresa> Empresas { get; set; }
    
 
}
