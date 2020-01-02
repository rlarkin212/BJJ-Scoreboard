namespace BJJ_Scoreboard.Models {
    public class MatchModel {
        public FighterModel FighterOne { get; set; }
        public FighterModel FighterTwo { get; set; }
        public double WeightCategory { get; set; }
        public ScoringModel ScoringFighterOne { get; set; }
        public ScoringModel ScoringFighterTwo { get; set; }
    }
}