import { Random } from '@woowacourse/mission-utils';
import {
  LOTTO_NUMBER_COUNT,
  LOTTO_NUMBER_MAX,
  LOTTO_NUMBER_MIN,
  LOTTO_PRICE,
  PRIZE_TABLE,
} from './constants/lotto.js';
import { ERROR } from './constants/messages.js';
import Lotto from './Lotto.js';

class LottoGame {
  #money;

  #tickets;

  #results;

  constructor(money) {
    LottoGame.#validateMoney(money);
    this.#money = Number(money);
    this.#tickets = this.#generateTickets();
    this.#results = {};
  }

  static #validateMoney(money) {
    const num = Number(money);
    if (!Number.isInteger(num) || num <= 0 || num % LOTTO_PRICE !== 0) {
      throw new Error(ERROR.INVALID_MONEY_1000);
    }
  }

  #calculateTicketCount() {
    return this.#money / LOTTO_PRICE;
  }

  #generateTickets() {
    const count = this.#calculateTicketCount();
    const tickets = [];

    for (let i = 0; i < count; i += 1) {
      const numbers = Random.pickUniqueNumbersInRange(
        LOTTO_NUMBER_MIN,
        LOTTO_NUMBER_MAX,
        LOTTO_NUMBER_COUNT,
      );
      tickets.push(new Lotto(numbers));
    }
    return tickets;
  }

  checkResult(winningNumbers, bonusNumber) {
    const results = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };

    this.#tickets.forEach((ticket) => {
      const matchCount = ticket.countMatchingNumbers(winningNumbers);
      const hasBonus = ticket.matchBonusNumber(bonusNumber);

      if (matchCount === 5 && hasBonus) {
        results[5.5] += 1;
      } else if (matchCount >= 3) {
        results[matchCount] += 1;
      }
    });
    this.#results = results;
    return results;
  }

  calculateProfitRate() {
    const totalPrize = Object.entries(this.#results).reduce(
      (sum, [match, count]) => sum + PRIZE_TABLE[match] * count,
      0,
    );

    const rate = (totalPrize / this.#money) * 100;
    return Number(rate.toFixed(2));
  }

  getTickets() {
    return [...this.#tickets];
  }
}

export default LottoGame;
