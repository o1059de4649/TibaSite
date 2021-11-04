using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;


static public class CommonData
{
    public const string TwitterAPIKey = "YxCvlvuWwF6NM6LuKrCLf8O9o";
    public const string TwitterAPIKeySecret = "D7GSkEAmrfnZY9r86tVhlCyd3PtlpGZarh0QZm4W9HGZACYxaw";
    public const string TwitterAPIToken = "AAAAAAAAAAAAAAAAAAAAAMm%2FVQEAAAAANQdMIqi71MX0B6wFQiCi5neFp6s%3D8Ls7sVqf8hdyuTh8to0YIWn9n4iKdmP90FyP0M9YE9J9lXHOfV";
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
