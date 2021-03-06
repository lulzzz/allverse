using System;
using Newtonsoft.Json; 
using NPoco; 

namespace WebApplication.Models.app
{
    [JsonObject(MemberSerialization.OptOut)]
    [TableName("article")]
    [PrimaryKey("id", AutoIncrement=true)]
    [ExplicitColumns]  
    public class ArticleModel
    {
        [Column] 
        public Int64 id;
        [Column]  
        public string userID;
        [Column]  
        public string title;
        [Column] 
        public string link;
        [Column]  
        public string text;
        [Column]  
        public string subverse; 
        [Column]
        public int votes; 
        [Column] 
        public int islocked=0; 
        [Column]
        public int isstickied=0; 
        [Column]
        public Int64 time; 

        [JsonPropertyAttribute]
        public int commentCount=0; 

        public string time_ago; 

        //will either be 1 or -1 
        public int userVote=0; 
    }
}
