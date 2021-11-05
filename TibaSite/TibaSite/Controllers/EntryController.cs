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
    public class EntryController : ControllerBase
    {
        private readonly ILogger<EntryController> _logger;

        public EntryController(ILogger<EntryController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        [Route("[action]")]
        public ResponceEx EntryExecute(Object obj)
        {
            var jsonString = obj.ToString();
            var res = new ResponceEx();
            TPlayer player = JsonSerializer.Deserialize<TPlayer>(jsonString);
            if (player.isExist(player)) {
                res.Response = "そのユーザーは既に存在します。";
                return res;
            }
            //var isOK
            //if()
            player.Register(player);
            res.Response = "登録しました。";
            return res;
        }


    }
}
