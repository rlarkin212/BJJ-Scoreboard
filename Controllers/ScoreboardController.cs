using System.Net.Http;
using System.Text.RegularExpressions;
using BJJ_Scoreboard.Models;
using Microsoft.AspNetCore.Mvc;

namespace BJJ_Scoreboard.Controllers {
    public class ScoreboardController : Controller {
        public IActionResult Index () {

            var model = new MatchModel {
                FighterOne = new FighterModel {
                    Name = "Ryan Larkin",
                    Club = "QUB BJJ"
                },
                FighterTwo = new FighterModel {
                    Name = "Jim Bob"
                },
                ScoringFighterOne = new ScoringModel {
                    Points = 0,
                    Advantages = 0,
                    Penalties = 0
                },
                ScoringFighterTwo = new ScoringModel {
                    Points = 0,
                    Advantages = 0,
                    Penalties = 0
                }
            };

            return View (model);
        }
    }
}