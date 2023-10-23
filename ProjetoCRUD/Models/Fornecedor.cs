using System;
using System.Collections.Generic;

namespace ProjetoCRUD.Models
{
    public partial class Fornecedor
    {
        public int Id { get; set; }
        public string? CnpjCpf { get; set; }
        public string? Nome { get; set; }
        public string? Email { get; set; }
        public string? Cep { get; set; }
    }
}
