using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EstagioDoc2.Models
{
    public class User
    {

        [Key]
        [ForeignKey("User")]
        public int UserId { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string NomeCompleto { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string CPF { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string TelefoneUser { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Senha { get; set;}
        
    }
}
