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
using CoreTweet;
using System.Collections.Specialized;

namespace TibaSite.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly ILogger<LoginController> _logger;

        public LoginController(ILogger<LoginController> logger)
        {
            _logger = logger;
        }


        [HttpPost]
        [Route("[action]")]
        public ResponceEx LogoutExecute(Object obj)
        {
            CommonData.self = null;
            var res = new ResponceEx();
            res.Response = "ログアウトしました。";
            return res;
        }

        [HttpPost]
        [Route("[action]")]
        public ResponceEx LoginExecute(Object obj)
        {
            var jsonString = obj.ToString();
            var res = new ResponceEx();

            TPlayer player = JsonSerializer.Deserialize<TPlayer>(jsonString);
            //CommonData.tokens2 = OAuth2.GetToken(CommonData.TwitterAPIKey, CommonData.TwitterAPIKeySecret);
            //var user = CommonData.tokens2.Users.Show(displayName => player.playerName);
            Handler.URL = CommonData.connectionStringSelect;
            var values = new NameValueCollection();
            values["sql"] = $@"SELECT * FROM {CommonData.DBName}.{NeetCommonMethod.CamelToSnake(nameof(TPlayer))} as tp 
                               WHERE tp.{NeetCommonMethod.CamelToSnake(nameof(player.screenName))} = '{player.screenName}'";
            string result = Handler.DoPost(values);
            var dic = Handler.ConvertDeserialize(result);
            var success = (dic.Count > 0);
            
            if (success) {
                var resPlayer = TPlayer.DictionaryToClass<TPlayer>(dic.FirstOrDefault());
                CommonData.self = resPlayer;
                res.Response = "ログインに成功しました。";
                return res;
            }
            res.Response = "ログインに失敗しました。";
            return res;
        }


    }
}
