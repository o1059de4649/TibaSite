using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;

namespace TibaSite
{
    public class Startup
    {
        public Startup(IHostEnvironment env)
        {
            var builder = new ConfigurationBuilder()
            .SetBasePath(env.ContentRootPath)
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
            .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);
            var configuration = builder.Build();

            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddControllersWithViews();

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            //app.UseForwardedHeaders();
            //app.Use(async (context, next) =>
            //{
            //    if (context.Request.IsHttps || context.Request.Headers["X-Forwarded-Proto"] == Uri.UriSchemeHttps)
            //    {
            //        await next();
            //    }
            //    else
            //    {
            //        //string queryString = context.Request.QueryString.HasValue ? context.Request.QueryString.Value : string.Empty;
            //        //var https = "https://" + context.Request.Host + context.Request.Path + queryString;
            //        //context.Response.Redirect(https);
            //    }
            //});

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage(); 
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            //app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseRouting();
            //app.UseAuthentication();
            //app.UseAuthorization();
            //app.UseCors("default");
            app.UseEndpoints(endpoints => {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });
            app.UseSpa(spa => {

                if (env.IsDevelopment())
                {
                    spa.Options.SourcePath = "ClientApp";
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
                else
                {
                    spa.Options.SourcePath = "ClientApp/build";
                }
            });

        }
    }
}
