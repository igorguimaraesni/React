using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoCRUD.Models;


namespace ProjetoCRUD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FornecedorController : ControllerBase
    {

        private readonly DBALOCContext _dbcontext;

        public FornecedorController(DBALOCContext context)
        {

            _dbcontext = context;

        }

        [HttpGet]
        [Route("ListaFornecedor")]
        public async Task<IActionResult> ListaFornecedor()
        {

            List<Fornecedor> listafornecedor = await _dbcontext.Fornecedors.OrderByDescending(c => c.Id).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, listafornecedor);
        }

        [HttpPost]
        [Route("Salvar")]
        public async Task<IActionResult> Salvar([FromBody] Fornecedor request)
        {

            await _dbcontext.Fornecedors.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Fornecedor request)
        {

            _dbcontext.Fornecedors.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }

        [HttpDelete]
        [Route("Deletar/{id:int}")]
        public async Task<IActionResult> Deletar(int id)
        {

            Fornecedor fornecedor = _dbcontext.Fornecedors.Find(id);

            _dbcontext.Fornecedors.Remove(fornecedor);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }


    }
}
