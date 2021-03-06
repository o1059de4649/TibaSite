
























using System.Collections;
using System.Collections.Generic;
using System.Linq;
using NEETLibrary.Tiba.Com.Attribute;
using NEETLibrary.Tiba.Com.Models;


[DatabaseName(DatabaseName = "FortniteDB")]
public class TPlayer : BaseModel
{

    [AutoIncrement]
    public long playerId { get; set; } 

    
    public long twitterId { get; set; } 

    
    public string password { get; set; } 

    
    public string playerName { get; set; } 

    
    public string screenName { get; set; } 

    
    public string description { get; set; } 

    
    public string mailAddress { get; set; } 

    
    public string imagePath { get; set; } 

}

[DatabaseName(DatabaseName = "FortniteDB")]
public class TTeam : BaseModel
{

    [PrimaryProperty]
    public long teamId { get; set; } 

    [PrimaryProperty]
    public long playerId { get; set; } 

}

[DatabaseName(DatabaseName = "FortniteDB")]
public class MTeam : BaseModel
{

    [AutoIncrement]
    public long teamId { get; set; } 

    
    public string teamName { get; set; } 

    
    public string description { get; set; } 

}

[DatabaseName(DatabaseName = "FortniteDB")]
public class MTournament : BaseModel
{

    [AutoIncrement]
    public long tournamentId { get; set; } 

    
    public string datetime { get; set; } 

    
    public string title { get; set; } 

    
    public string content { get; set; } 

    
    public string imagePath { get; set; } 

}

[DatabaseName(DatabaseName = "FortniteDB")]
public class TTournament : BaseModel
{

    [PrimaryProperty]
    public long tournamentId { get; set; } 

    [PrimaryProperty]
    public long teamId { get; set; } 

}

[DatabaseName(DatabaseName = "FortniteDB")]
public class MTibaGundan : BaseModel
{

    [AutoIncrement]
    public long tibaPlayerId { get; set; } 

    
    public string playerName { get; set; } 

    
    public string subTitle { get; set; } 

    
    public string description { get; set; } 

    
    public string imagePath { get; set; } 

}
