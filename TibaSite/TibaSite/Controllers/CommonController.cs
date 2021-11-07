using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using NEETLibrary.Tiba.Com.Methods;
using NEETLibrary.Tiba.Com.SqlConnection;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using CoreTweet;

namespace TibaSite.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CommonController : ControllerBase
    {
        private readonly ILogger<CommonController> _logger;

        public CommonController(ILogger<CommonController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        [Route("[action]")]
        public TPlayer GetPlayer()
        {
            return CommonData.self;
        }
    }
}
