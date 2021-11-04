













using System.Collections;
using System.Collections.Generic;
using System.Linq;
using NEETLibrary.Tiba.Com.Attribute;
using NEETLibrary.Tiba.Com.Models;


[DatabaseName(DatabaseName = "FortniteDB")]
public class TTournament : BaseModel
{

    [AutoIncrement]
    public long tournamentId { get; set; } 

    
    public long teamId { get; set; } 

    
    public string datetime { get; set; } 

    
    public string title { get; set; } 

    
    public string content { get; set; } 

}

[DatabaseName(DatabaseName = "FortniteDB")]
public class TPlayer : BaseModel
{
    [AutoIncrement]
    public long playerId { get; set; } = 3;
    public string playerName { get; set; }
    public string description { get; set; }
    public string imagePath { get; set; }
    public long twitterId { get; set; }
}

[DatabaseName(DatabaseName = "FortniteDB")]
public class TTeam : BaseModel
{

    [AutoIncrement]
    public long teamId { get; set; } 

    
    public long playerId { get; set; } 

    
    public string teamName { get; set; } 

    
    public string description { get; set; } 

}
