using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace BJJ_Scoreboard.Hubs
{
    public class ScoringHub:Hub
    {
        public async Task SendMessage(int currentPoints, int points){
            currentPoints += points;
            await Clients.All.SendAsync("ReceiveMessage",currentPoints);
        }
    }
}