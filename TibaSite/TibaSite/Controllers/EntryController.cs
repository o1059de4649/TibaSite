using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TibaSite.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EntryController : ControllerBase
    {
        private readonly ILogger<EntryController> _logger;

        public EntryController(ILogger<EntryController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        [Route("[action]")]
        public void EntryExecute()
        {
            
        }
    }
}
