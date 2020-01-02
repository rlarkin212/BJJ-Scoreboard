using System.Net.WebSockets;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace BJJ_Scoreboard.Hubs {
    public class ScoringHub : Hub {
        public async Task UpdatePointsFighterOne (int currentPoints, int points) {
            currentPoints += points;
            await Clients.All.SendAsync ("RecieveUpdatedPointsFighterOne", currentPoints);
        }

        public async Task UpdateAdvantagesFighterOne (int currentAdvantages, int advantage) {
            currentAdvantages += advantage;
            await Clients.All.SendAsync ("RecieveUpdatedAdvantagesFighterOne", currentAdvantages);
        }

        public async Task UpdatePenaltiesFighterOne (int currentPenalties, int penalty) {
            currentPenalties += penalty;
            await Clients.All.SendAsync ("RecieveUpdatedPenaltiesFighterOne", currentPenalties);
        }

    }
}