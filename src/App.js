import LottoGame from './LottoGame.js';
import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';

class App {
  async run() {
    try {
      const money = await InputView.readPurchaseAmount();
      const game = new LottoGame(money);

      OutputView.printLottoTickets(game.getTickets());

      const winningNumbers = await InputView.readWinningNumbers();
      const bonuseNumber = await InputView.readBonusNumber();

      const results = game.checkResult(winningNumbers, bonuseNumber);
      const profitRate = game.calculateProfitRate();

      OutputView.printStatistics(results, profitRate);
    } catch (error) {
      OutputView.printError(error.message);
    }
  }
}

export default App;
