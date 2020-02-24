using System;
using System.Collections.Generic;

namespace EmployeeManagment.Models
{
    public partial class Employee
    {
        public Employee()
        {
            EmployeeTask = new HashSet<EmployeeTask>();
        }

        public decimal Id { get; set; }
        public string NameEn { get; set; }
        public string NameAr { get; set; }
        public decimal EmpNo { get; set; }
        public DateTime HiringDate { get; set; }

        public virtual ICollection<EmployeeTask> EmployeeTask { get; set; }
    }
}
