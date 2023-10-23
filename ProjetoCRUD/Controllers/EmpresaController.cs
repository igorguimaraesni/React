using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoCRUD.Models;
using System.Diagnostics.Contracts;


namespace ProjetoCRUD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresaController : ControllerBase
    {
        private readonly DBALOCContext _dbcontext;

        public EmpresaController(DBALOCContext context)
        {

            _dbcontext = context;

        }

        [HttpGet]
        [Route("ListaEmpresa")]
        public async Task<IActionResult> ListaEmpresa()
        {

            List<Empresa> listaempresa = await _dbcontext.Empresas.OrderByDescending(c => c.Id).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, listaempresa);
        }

        [HttpPost]
        [Route("Salvar")]
        public async Task<IActionResult> Salvar([FromBody] Empresa request)
        {

            await _dbcontext.Empresas.AddAsync(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Empresa request)
        {

            _dbcontext.Empresas.Update(request);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");

        }

        [HttpDelete]
        [Route("Deletar/{id:int}")]
        public async Task<IActionResult> Deletar(int id)
        {

            Empresa empresa = _dbcontext.Empresas.Find(id);

            _dbcontext.Empresas.Remove(empresa);
            await _dbcontext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

    }
}
