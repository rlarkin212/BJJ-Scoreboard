using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace BJJ_Scoreboard.Hubs {
    public class ScoringHub : Hub {
        public async Task UpdatePointsFighterOne (int currentPoints, int points) {
            currentPoints += points;
            await Clients.All.SendAsync ("RecieveUpdatedPointsFighterOne", currentPoints);
        }

         public async Task UpdatePointsFighterTwo (int currentPoints, int points) {
            currentPoints += points;
            await Clients.All.SendAsync ("RecieveUpdatedPointsFighterTwo", currentPoints);
        }
    }
}