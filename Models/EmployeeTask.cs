using System;
using System.Collections.Generic;

namespace EmployeeManagment.Models
{
    public partial class EmployeeTask
    {
        public decimal Id { get; set; }
        public decimal TaskId { get; set; }
        public decimal EmployeeId { get; set; }

        public virtual Employee Employee { get; set; }
        public virtual Task Task { get; set; }
    }
}
