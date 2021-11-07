using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using NEETLibrary.Tiba.Com.Methods;
using NEETLibrary.Tiba.Com.SqlConnection;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using NEETLibrary.Tiba.Com.Models;

namespace TibaSite.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlayerController : ControllerBase
    {
        private readonly ILogger<PlayerController> _logger;

        public PlayerController(ILogger<PlayerController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("[action]")]
        public List<TPlayer> PlayerGetAll()
        {
            var player = new TPlayer();
            var modelList = BaseModel.GetFindAll(player);
            return modelList;
        }
    }
}
