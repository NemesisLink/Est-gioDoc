using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EstagioDoc2.Models
{
    public class Empresa
    {
        [Key]
        [ForeignKey("Empresa")]
        public int EmpresaId { get; set; }
        [Column(TypeName ="nvarchar(100)")]
        public string NomeFantasia { get; set; }
        [Column(TypeName = "nvarchar(13)")]
        public string CNPJ { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        public string TelefoneEmpresa { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; set; }







    }



}
