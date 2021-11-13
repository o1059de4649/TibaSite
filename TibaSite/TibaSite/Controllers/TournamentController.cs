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

        [HttpPost]
        [Route("[action]")]
        public ResponceEx EntryExecute(Object obj)
        {
            //参加登録完了
            TournamentForm tournamentForm = JsonSerializer.Deserialize<TournamentForm>(obj.ToString());
            ResponceEx responce = new ResponceEx();
            var tournament = new TTournament() {
                teamId = tournamentForm.targetTeam.teamId,
                tournamentId = tournamentForm.targetTournament.tournamentId,
            };
            tournament.Register(tournament);
            return responce;
        }

        class TournamentForm
        {
            public MTeam targetTeam { get; set; }
            public MTournament targetTournament { get; set; }
        }
    }
}
