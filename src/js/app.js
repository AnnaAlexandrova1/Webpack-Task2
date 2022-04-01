const game = new Game();
game.start();

import { 
    Game as classGame, // объявлена переменная Game, конфликт имен
    GameSavingData,
    readGameSaving as loadGame,
    writeGameSaving as saveGame,
} from './game.js'