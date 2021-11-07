using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using NEETLibrary.Tiba.Com.Methods;
using NEETLibrary.Tiba.Com.SqlConnection;
using NEETLibrary.Tiba.Com.Net;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using System.Diagnostics;
using CoreTweet;
using static CoreTweet.OAuth;

namespace TibaSite.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TwitterController : ControllerBase
    {
        private readonly ILogger<TwitterController> _logger;

        public TwitterController(ILogger<TwitterController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        [Route("[action]")]
        public string OpenTwitter()
        {
            var session = OAuth.Authorize(CommonData.TwitterAPIKey, CommonData.TwitterAPIKeySecret);
            var url = session.AuthorizeUri.AbsoluteUri; // -> user open in browser
            CommonData.session = session;
            NeetNetAccessor.OpenURL(url);
            return "OK";
        }

        [HttpPost]
        [Route("[action]")]
        public ResponceEx GetTokenSelf(Object obj)
        {
            var res = new ResponceEx();
            TwitterMember twitterModel = JsonSerializer.Deserialize<TwitterMember>(obj.ToString());

            CommonData.tokens = OAuth.GetTokens(CommonData.session, twitterModel.pin);
            var user = CommonData.tokens.Users.Show(id => CommonData.tokens.UserId);
            var index = 1 + user.ProfileImageUrl.IndexOf("profile_images") + "profile_images".Length;
            var imageFileName = user.ProfileImageUrl.SubStringEx(index, user.ProfileImageUrl.Length - index);
            TPlayer player = new TPlayer() { 
                twitterId = CommonData.tokens.UserId,
                playerName = CommonData.tokens.ScreenName,
                description = user.Description,
                imagePath = imageFileName,
                password = twitterModel.password,
            };
            if (player.isExist(player))
            {
                res.Response = "そのユーザーは既に存在します。";
                return res;
            }
            player.Register(player);
            res.Response = "登録しました。";
            CommonData.self = player;
            return res;
        }

        [HttpPost]
        [Route("[action]")]
        public Object GetTokens(Object obj)
        {
            TwitterMember twitterModel = JsonSerializer.Deserialize<TwitterMember> (obj.ToString());
            CommonData.tokens2 = OAuth2.GetToken(CommonData.TwitterAPIKey, CommonData.TwitterAPIKeySecret);
            try
            {
                CommonData.user = CommonData.tokens2.Users.Show(id => twitterModel.playerName);
                return CommonData.user;
            }
            catch
            {
                return new {response = "No" };
            }
        }


    }
    public class TwitterMember {
        public string playerName { get; set; }
        public string pin { get; set; }
        public string password { get; set; }
    }
}
