import Validator from './utils/Validator.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    Validator.validateWinningNumbers(numbers);
    this.#numbers = [...numbers].sort((a, b) => a - b);
  }

  // #validate(numbers) {

  // }

  // TODO: 추가 기능 구현
  countMatchingNumbers(winningNumbers) {
    return this.#numbers.filter((num) => winningNumbers.includes(num)).length;
  }

  matchBonusNumber(bonusNumber) {
    return this.#numbers.includes(bonusNumber);
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
