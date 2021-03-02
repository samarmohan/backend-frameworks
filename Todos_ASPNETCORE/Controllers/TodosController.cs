using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Todos_ASPNETCORE.Models;

namespace Todos_ASPNETCORE.Controllers
{
	[Route("api/[controller]/")]
	[ApiController]
	public class TodosController : ControllerBase
	{
		private readonly TodoContext _context;

		public TodosController(TodoContext context)
		{
			_context = context;
		}

		// GET: api/Todos
		[HttpGet]
		public async Task<IEnumerable<Todo>> GetTodos()
		{
			return await _context.Todos.ToListAsync();
		}

		// GET: api/Todos/5
		[HttpGet("{id}/")]
		public async Task<ActionResult<Todo>> GetTodo(long id)
		{
			var todo = await _context.Todos.FindAsync(id);

			if (todo == null)
			{
				return NotFound();
			}

			return Ok(todo);
		}

		// PUT: api/Todos/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{id}/")]
		public async Task<IActionResult> PutTodo(long id, Todo todo)
		{
			if (id != todo.Id)
			{
				return BadRequest();
			}

			_context.Entry(todo).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!TodoExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}

			return Ok(todo);
		}

		// POST: api/Todos
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost]
		public async Task<ActionResult<Todo>> PostTodo(Todo todo)
		{
			await _context.Todos.AddAsync(todo);
			await _context.SaveChangesAsync();

			return CreatedAtAction(nameof(GetTodo), new { id = todo.Id }, todo);
		}

		// DELETE: api/Todos/5
		[HttpDelete("{id}/")]
		public async Task<IActionResult> DeleteTodo(long id)
		{
			var todo = await _context.Todos.FindAsync(id);
			if (todo == null)
			{
				return NotFound();
			}

			_context.Todos.Remove(todo);
			await _context.SaveChangesAsync();

			return Ok(todo);
		}

		private bool TodoExists(long id)
		{
			return _context.Todos.Any(e => e.Id == id);
		}
	}
}
