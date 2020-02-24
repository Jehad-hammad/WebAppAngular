using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EmployeeManagment.Models;

namespace EmployeeManagment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeTasksController : ControllerBase
    {
        private readonly STSEmployeeManagmentContext _context;

       

        public EmployeeTasksController(STSEmployeeManagmentContext context)
        {
            _context = context;
        }

        // GET: api/EmployeeTasks
        [HttpGet]
        public ActionResult<IEnumerable<EmployeeTask>> GetEmployeeTask()
        {
            var EmTask = (from emtask in _context.EmployeeTask
                          join em in _context.Employee on emtask.EmployeeId equals em.Id
                          join task in _context.Task on emtask.TaskId equals task.Id
                          select new
                          {
                              empName = em.NameEn,
                              taskName = task.NameEn,
                              taskStatus = task.Status,
                              taskCreated = task.CreatedDate

                          }).ToList();
            return Ok(EmTask);




            // return await _context.EmployeeTask.ToListAsync();
        }

        // GET: api/EmployeeTasks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EmployeeTask>> GetEmployeeTask(decimal id)
        {
            var employeeTask = await _context.EmployeeTask.FindAsync(id);

            if (employeeTask == null)
            {
                return NotFound();
            }

            return employeeTask;
        }

        // PUT: api/EmployeeTasks/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmployeeTask(decimal id, EmployeeTask employeeTask)
        {
            if (id != employeeTask.Id)
            {
                return BadRequest();
            }

            _context.Entry(employeeTask).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeTaskExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EmployeeTasks
        [HttpPost]
        public async Task<ActionResult<EmployeeTask>> PostEmployeeTask([FromBody]EmployeeTask employeeTask)
        {
            _context.EmployeeTask.Add(employeeTask);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmployeeTask", new { id = employeeTask.Id }, employeeTask);
        }

        // DELETE: api/EmployeeTasks/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<EmployeeTask>> DeleteEmployeeTask(decimal id)
        {
            var employeeTask = await _context.EmployeeTask.FindAsync(id);
            if (employeeTask == null)
            {
                return NotFound();
            }

            _context.EmployeeTask.Remove(employeeTask);
            await _context.SaveChangesAsync();

            return employeeTask;
        }

        private bool EmployeeTaskExists(decimal id)
        {
            return _context.EmployeeTask.Any(e => e.Id == id);
        }
    }
}
