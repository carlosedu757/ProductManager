using Microsoft.AspNetCore.Mvc;
using ProductManager.Models;

namespace ProductManager.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProdutoController : ControllerBase
    {
        private static readonly List<Produto> _produtos = [];
        private static int _proximoId = 1;

        [HttpPost]
        public IActionResult AdicionarProduto([FromBody] Produto produto)
        {
            if (produto == null)
            {
                return BadRequest("O produto não pode ser nulo.");
            }

            produto.Id = _proximoId++;
            _produtos.Add(produto);

            return CreatedAtAction(nameof(AdicionarProduto), new { id = produto.Id }, produto);
        }

        [HttpGet]
        public ActionResult<IEnumerable<Produto>> GetProdutos()
        {
            return Ok(_produtos);
        }
    }
}