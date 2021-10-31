using System.Collections;
using System.Collections.Generic;
using System.Linq;

public class TTournament
{
    public long tournamentId { get; set; } 
    public long teamId { get; set; } 
    public string datetime { get; set; } 
    public string title { get; set; } 
    public string content { get; set; } 

}
public class TPlayer
{
    public long playerId { get; set; } 
    public string playerName { get; set; } 
    public string profile { get; set; } 
    public string imagePath { get; set; } 
    public string twitterId { get; set; } 

}
public class TTeam
{
    public long teamId { get; set; } 
    public long playerId { get; set; } 
    public string teamName { get; set; } 
    public string description { get; set; } 

}
