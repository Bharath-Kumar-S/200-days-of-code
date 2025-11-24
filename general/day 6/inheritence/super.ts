class MusicPlayer {
  volume: number;

  constructor() {
    this.volume = 50; // Instance field
  }
}

class SmartMusicPlayer extends MusicPlayer {
  constructor() {
    super();
  }

  increaseVolume(): string {
    // TODO: Correctly implement volume increase functionality for the SmartMusicPlayer, increasing volume by 10
    this.volume += 10;
    return `Volume increased to ${this.volume}`;
  }
}

const player = new SmartMusicPlayer();
console.log(player.increaseVolume()); // Expected Output: Volume increased to 60
console.log(`Current Volume: ${player.volume}`); // Expected Output: Current Volume: 60
