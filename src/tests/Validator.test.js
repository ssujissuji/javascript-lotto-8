import Validator from '../utils/Validator.js';
import { ERROR } from '../constants/messages.js';

describe('Validator 테스트', () => {
  describe('validateWinningNumbers', () => {
    test('배열이 아닌 값이 들어오면 예외가 발생한다.', () => {
      expect(() => {
        Validator.validateWinningNumbers('1,2,3,4,5,6');
      }).toThrow(ERROR.INVALID_WINNING_NUMBERS_6);
    });

    test('당첨 번호가 6개가 아니면 예외가 발생한다.', () => {
      expect(() => {
        Validator.validateWinningNumbers([1, 2, 3, 4, 5]);
      }).toThrow(ERROR.INVALID_WINNING_NUMBERS_6);
    });

    test('숫자가 아닌 값이 하나라도 있으면 예외가 발생한다.', () => {
      expect(() => {
        Validator.validateWinningNumbers([1, 'a', 3, 4, 5, 6]);
      }).toThrow(ERROR.INVALID_ISNAN);
    });

    test('0이 포함되면 양의 정수 예외가 발생한다.', () => {
      expect(() => {
        Validator.validateWinningNumbers([0, 2, 3, 4, 5, 6]);
      }).toThrow(ERROR.INVALID_POSITIVE_NUMBER);
    });

    test('1~45 범위를 벗어나면 범위 예외가 발생한다.', () => {
      expect(() => {
        Validator.validateWinningNumbers([1, 2, 3, 4, 5, 46]);
      }).toThrow(ERROR.INVALID_NUMBER_OUT_OF_RANGE);
    });

    test('중복된 번호가 있으면 예외가 발생한다.', () => {
      expect(() => {
        Validator.validateWinningNumbers([1, 2, 3, 4, 5, 5]);
      }).toThrow(ERROR.INVALID_NUMBER_DUPLICATE);
    });

    test('정상적인 6개 번호면 예외가 발생하지 않는다.', () => {
      expect(() => {
        Validator.validateWinningNumbers([1, 2, 3, 4, 5, 6]);
      }).not.toThrow();
    });
  });

  describe('validateMoney', () => {
    test('숫자가 아니거나 양의 정수가 아니면 예외가 발생한다.', () => {
      expect(() => {
        Validator.validateMoney('abc');
      }).toThrow(ERROR.INVALID_POSITIVE_NUMBER);

      expect(() => {
        Validator.validateMoney(0);
      }).toThrow(ERROR.INVALID_POSITIVE_NUMBER);
    });

    test('1,000원 단위가 아니면 예외가 발생한다.', () => {
      expect(() => {
        Validator.validateMoney(1500);
      }).toThrow(ERROR.INVALID_MONEY_1000);
    });

    test('정상 금액은 통과한다.', () => {
      expect(() => {
        Validator.validateMoney(3000);
      }).not.toThrow();
    });
  });

  describe('validateBonusNumber', () => {
    const winningNums = [1, 2, 3, 4, 5, 6];

    test('보너스 번호가 숫자가 아니면 예외가 발생한다.', () => {
      expect(() => {
        Validator.validateBonusNumber(winningNums, 'a');
      }).toThrow(ERROR.INVALID_ISNAN);
    });

    test('보너스 번호가 0이면 양의 정수 예외가 발생한다.', () => {
      expect(() => {
        Validator.validateBonusNumber(winningNums, 0);
      }).toThrow(ERROR.INVALID_POSITIVE_NUMBER);
    });

    test('보너스 번호가 46이면 범위 초과 예외가 발생한다.', () => {
      expect(() => {
        Validator.validateBonusNumber(winningNums, 46);
      }).toThrow(ERROR.INVALID_NUMBER_OUT_OF_RANGE);
    });

    test('보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.', () => {
      expect(() => {
        Validator.validateBonusNumber(winningNums, 3);
      }).toThrow(ERROR.INVALID_BONUS_NUMBER_DUPLICATE);
    });

    test('정상적인 보너스 번호면 통과한다.', () => {
      expect(() => {
        Validator.validateBonusNumber(winningNums, 10);
      }).not.toThrow();
    });
  });
});
