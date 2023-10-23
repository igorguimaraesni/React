using System;
using System.Collections.Generic;

namespace ProjetoCRUD.Models
{
    public partial class Empresa
    {
        public int Id { get; set; }
        public string? Cnpj { get; set; }
        public string? NomeFantasia { get; set; }
        public string? Cep { get; set; }
    }
}
