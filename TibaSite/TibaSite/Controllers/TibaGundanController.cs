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
    public class TibaGundanController : ControllerBase
    {
        private readonly ILogger<TibaGundanController> _logger;

        public TibaGundanController(ILogger<TibaGundanController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("[action]")]
        public List<MTibaGundan> TibaGundanGetAll()
        {
            var tibaGundan = new MTibaGundan();
            var modelList = BaseModel.GetFindAll(tibaGundan);
            return modelList;
        }
    }
}
