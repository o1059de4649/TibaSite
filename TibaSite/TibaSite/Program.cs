using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace TibaSite
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureLogging(logging =>
                {
                    logging.ClearProviders();
                    logging.AddConsole();
                })
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    //OS‚Ìî•ñ‚ğæ“¾‚·‚é
                    System.OperatingSystem os = System.Environment.OSVersion;
                    //OS‚Ìî•ñ‚ğ•\¦‚·‚é
                    Console.WriteLine(os.ToString());
                    var osStr = os.ToString();
                    var isDevelop = osStr.Contains("Windows");
                    if (isDevelop)
                    {
                        webBuilder
                        .UseContentRoot(Directory.GetCurrentDirectory())
                        .UseStartup<Startup>()
                        .UseUrls("http://*:5000");
                    }
                    else {
                        webBuilder
                        .UseKestrel()
                        .UseContentRoot(Directory.GetCurrentDirectory())
                        .UseStartup<Startup>()
                        .UseUrls("http://*:5000");
                    }

                });
    }
}
