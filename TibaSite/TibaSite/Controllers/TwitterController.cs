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
        public OAuthSession OpenTwitter()
        {
            var session = OAuth.Authorize(CommonData.TwitterAPIKey, CommonData.TwitterAPIKeySecret);
            var url = session.AuthorizeUri.AbsoluteUri; // -> user open in browser
            NeetNetAccessor.OpenURL(url);
            return session;
        }

        [HttpPost]
        [Route("[action]")]
        async public Task<Tokens> GetTokens(Object obj)
        {
            TwitterMember pinSession = JsonSerializer.Deserialize<TwitterMember> (obj.ToString());
            var pin = pinSession.pin;
            var tokens = await pinSession.session.GetTokensAsync(pin);
            return tokens;
        }


    }
    public class TwitterMember {
        public string pin { get; set; }
        public OAuthSession session { get; set; }
    }
}
