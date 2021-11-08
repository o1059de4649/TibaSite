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
using NEETLibrary;
using System.Collections.Specialized;

namespace TibaSite.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TeamController : ControllerBase
    {
        private readonly ILogger<TeamController> _logger;

        public TeamController(ILogger<TeamController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("[action]")]
        public TeamList TeamGetAll()
        {
            var teamList = new TeamList();

            var mteam = new MTeam();
            var list = MTeam.GetFindAll(mteam);
            foreach (var item in list)
            {
                Handler.URL = CommonData.connectionStringSelect;
                var values = new NameValueCollection();
                values["sql"] = $@"
                    SELECT 
                        t_player.player_id
                        ,t_player.twitter_id
                        ,t_player.password
                        ,t_player.player_name
                        ,t_player.screen_name
                        ,t_player.description
                        ,t_player.mail_address
                        ,t_player.image_path
                    FROM 
                        {CommonData.DBName}.m_team
                    INNER JOIN 
                        {CommonData.DBName}.t_team 
                    ON 
                        t_team.team_id = m_team.team_id
                    INNER JOIN 
                        {CommonData.DBName}.t_player
                    ON 
                        t_player.player_id = t_team.player_id
                    WHERE 
                        t_team.team_id = {item.teamId}
                ";
                string result = Handler.DoPost(values);
                var dicList = Handler.ConvertDeserialize(result);
                var playerList = new List<TPlayer>();
                foreach (var dic in dicList)
                {
                    var player = TPlayer.DictionaryToClass<TPlayer>(dic);
                    playerList.Add(player);
                }

                var TeamRowModel = new TeamRowModel() { 
                    mTeam = item,
                    players = playerList,
                };
                teamList.teamList.Add(TeamRowModel);
            }
            return teamList;
        }

        [HttpPost]
        [Route("[action]")]
        public ResponceEx AddTeam(Object obj)
        {
            var teamForm = JsonSerializer.Deserialize<TeamForm>(obj.ToString());

            //teamIdの取得
            Handler.URL = CommonData.connectionStringSelect;
            var values = new NameValueCollection();
            values["sql"] = $@"SELECT IFNULL(MAX(team_id),0)as teamId FROM {CommonData.DBName}.{NeetCommonMethod.CamelToSnake(nameof(MTeam))}";
            string result = Handler.DoPost(values);
            var dic = Handler.ConvertDeserialize(result);
            var teamId = (dic[0]["teamId"].ToString().ToLongValue() + 1);

            var mteam = new MTeam(){
                teamId = teamId,
                teamName = teamForm.teamName,
            };
            mteam.Register(mteam);
            foreach (var item in teamForm.playerList)
            {
                var target = new TTeam()
                {
                    teamId = teamId,
                    playerId = item.playerId,
                };
                target.Register(target);
                
            }
            var res = new ResponceEx() { 
                Response = "OK"
            };
            return res;
        }
    }

    public class TeamForm {
       public List<TPlayer> playerList { get; set; }
       public string teamName { get; set; }
    }

    public class TeamList
    {
        public List<TeamRowModel> teamList { get; set; } = new List<TeamRowModel>();
    }

    public class TeamRowModel
    {
        public MTeam mTeam { get; set; }
        public List<TPlayer> players { get; set; }
    }
}
