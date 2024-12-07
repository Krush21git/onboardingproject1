using System;
using System.Collections.Generic;

namespace sdonboarding.Server.Models;

public partial class Sale
{
    public int Id { get; set; }

    public int? ProductId { get; set; }

    public int? CustomerId { get; set; }

    public int? StoreId { get; set; }

    public DateTime? DateSold { get; set; }
}
