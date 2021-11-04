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
    public class BaseExController : ControllerBase
    {
        private readonly ILogger<BaseExController> _logger;

        public BaseExController(ILogger<BaseExController> logger)
        {
            _logger = logger;
        }
    }
}
