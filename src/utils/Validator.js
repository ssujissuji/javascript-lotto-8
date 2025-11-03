import { LOTTO_NUMBER_MAX, LOTTO_NUMBER_MIN } from '../constants/lotto.js';
import { ERROR } from '../constants/messages.js';

const Validator = {
  validatePositiveInteger(value) {
    const num = Number(value);
    if (!Number.isInteger(num) || num <= 0) {
      throw new Error(ERROR.INVALID_POSITIVE_NUMBER);
    }
  },

  validateMoney(money) {
    const num = Number(money);
    this.validatePositiveInteger(num);
    if (num % 1000 !== 0) {
      throw new Error(ERROR.INVALID_MONEY_1000);
    }
  },

  validateWinningNumbers(numbers) {
    if (numbers.length !== 6) {
      throw new Error(ERROR.INVALID_WINNING_NUMBERS_6);
    }

    const hasNonNumber = numbers.some((num) => Number.isNaN(Number(num)));
    if (hasNonNumber) {
      throw new Error(ERROR.INVALID_ISNAN);
    }

    numbers.forEach((num) => this.validatePositiveInteger(num));

    const hasOutOfRangeNumber = numbers.some(
      (num) => Number(num) < LOTTO_NUMBER_MIN || Number(num) > LOTTO_NUMBER_MAX,
    );
    if (hasOutOfRangeNumber) {
      throw new Error(ERROR.INVALID_NUMBER_OUT_OF_RANGE);
    }

    const unique = new Set(numbers.map(Number));
    if (unique.size !== numbers.length) {
      throw new Error(ERROR.INVALID_NUMBER_DUPLICATE);
    }
  },

  validateBonusNumber(winningNums, bonusNum) {
    const num = Number(bonusNum);

    if (Number.isNaN(num)) {
      throw new Error(ERROR.INVALID_ISNAN);
    }

    this.validatePositiveInteger(num);

    if (Number(num) < LOTTO_NUMBER_MIN || Number(num) > LOTTO_NUMBER_MAX) {
      throw new Error(ERROR.INVALID_NUMBER_OUT_OF_RANGE);
    }

    const isDuplicate = winningNums.map(Number).includes(num);
    if (isDuplicate) {
      throw new Error(ERROR.INVALID_NUMBER_DUPLICATE);
    }
  },
};

export default Validator;
