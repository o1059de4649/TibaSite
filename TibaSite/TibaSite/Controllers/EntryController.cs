using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using NEETLibrary.Tiba.Com.Methods;
using NEETLibrary.Tiba.Com.SqlConnection;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
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
        public Object EntryExecute(Object obj)
        {
            var jsonString = obj.ToString();
            TPlayer player = JsonSerializer.Deserialize<TPlayer>(jsonString);
            player.Register(player);
            return obj;
        }
    }
}
