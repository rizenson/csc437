export interface Profile {
  userid: string;
  name: string;
  password: string;
  dateCreated: string;
  numGamesStarted: number;
  numGamesCompleted: number;
  averageTime: number;
  longestNoHintStreak: number;
  longestWinStreak: number;
  currentWinStreak: number;
}
