using System;
using System.Collections.Generic;

namespace EmployeeManagment.Models
{
    public partial class Task
    {
        public Task()
        {
            EmployeeTask = new HashSet<EmployeeTask>();
        }

        public decimal Id { get; set; }
        public string NameEn { get; set; }
        public string NameAr { get; set; }
        public DateTime CreatedDate { get; set; }
        public string Status { get; set; }

        public virtual ICollection<EmployeeTask> EmployeeTask { get; set; }
    }
}
