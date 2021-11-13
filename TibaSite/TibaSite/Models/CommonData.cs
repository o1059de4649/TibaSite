using CoreTweet;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using static CoreTweet.OAuth;

static public class CommonData
{
    public static bool isLogin {
        get { return self != null; }
    }
    public static TPlayer self;
    public static OAuthSession session;
    public static User user;
    public static Tokens tokens;
    public static OAuth2Token tokens2;
    public const string TwitterAPIKey = "YxCvlvuWwF6NM6LuKrCLf8O9o";
    public const string TwitterAPIKeySecret = "D7GSkEAmrfnZY9r86tVhlCyd3PtlpGZarh0QZm4W9HGZACYxaw";
    public const string TwitterAPIToken = "AAAAAAAAAAAAAAAAAAAAAMm%2FVQEAAAAANQdMIqi71MX0B6wFQiCi5neFp6s%3D8Ls7sVqf8hdyuTh8to0YIWn9n4iKdmP90FyP0M9YE9J9lXHOfV";
    public const string connectionStringSelect = "http://www.tibaneet.com/SQL/Select.php";
    public const string connectionStringInsert = "http://www.tibaneet.com/SQL/InsertAndUpdate.php";
    public const string DBName = "FortniteDB";
    public static bool isLinux = true;
    public static void OpenURL(string url) {
        if (RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
        {
            //Windowsのとき  
            url = url.Replace("&", "^&");
            Process.Start(new ProcessStartInfo("cmd", $"/c start {url}") { CreateNoWindow = true });
        }
        else if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
        {
            //Linuxのとき  
            Process.Start("xdg-open", url);
        }
        else if (RuntimeInformation.IsOSPlatform(OSPlatform.OSX))
        {
            //Macのとき  
            Process.Start("open", url);
        }
        else
        {
            throw new Exception();
        }
    }
}

public class ResponceEx{
    public string Response { get; set; }
    public Object ResponseObj { get; set; }
}


