using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using NEETLibrary.Tiba.Com.Methods;
using NEETLibrary.Tiba.Com.SqlConnection;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using CoreTweet;
using System.IO;
using System.Reflection.Metadata;

namespace TibaSite.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MemoryController : ControllerBase
    {
        private readonly ILogger<MemoryController> _logger;

        public MemoryController(ILogger<MemoryController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        [Route("[action]")]
        public FileInfo PostMemoryStream(Object obj)
        {
            var jsonString = obj.ToString();
            FileModel fileModel = JsonSerializer.Deserialize<FileModel>(jsonString);
            //Console.WriteLine(System.Environment.CurrentDirectory);
            //Console.WriteLine(System.IO.Directory.GetCurrentDirectory());
            var currentPath = System.Environment.CurrentDirectory;
            var resPath = currentPath + fileModel.filePath;
            FileInfo fileInfo = new FileInfo(resPath);
            //var response = new MemoryStream();
            //using (FileStream fileStream = new FileStream(resPath, FileMode.Open))
            //{
            //    fileStream.Seek(0, SeekOrigin.Begin);
            //    //fileStream.CopyTo(response);
            //    fileStream.
            //    return fileStream;
            //}
            //response.Seek(0, SeekOrigin.Begin);
            //return fileStream;
            return fileInfo;
        }

        [HttpGet]
        [Route("[action]")]
        public MemoryStream GetMemoryStream(string path)
        {
            var currentPath = System.Environment.CurrentDirectory;
            var resPath = currentPath + path;
            FileInfo fileInfo = new FileInfo(resPath);
            var response = new MemoryStream();
            using (FileStream fileStream = new FileStream(resPath, FileMode.Open))
            {
                fileStream.Seek(0, SeekOrigin.Begin);
                fileStream.CopyTo(response);
            }
            response.Seek(0, SeekOrigin.Begin);
            return response;
        }

        public class FileModel{
            public string filePath { get; set; }
        }

    }
}
