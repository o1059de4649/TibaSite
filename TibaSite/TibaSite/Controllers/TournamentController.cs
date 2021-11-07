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
    public class TournamentController : ControllerBase
    {
        private readonly ILogger<TournamentController> _logger;

        public TournamentController(ILogger<TournamentController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("[action]")]
        public List<MTournament> TournamentGetAll()
        {
            var tournament = new MTournament();
            var modelList = BaseModel.GetFindAll(tournament);
            return modelList;
        }
    }
}
