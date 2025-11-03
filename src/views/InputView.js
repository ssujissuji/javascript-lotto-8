import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readPurchaseAmount() {
    const input = await Console.readLineAsync('구입 금액을 입력해 주세요. \n');
    return Number(input);
  },

  async readWinningNumbers() {
    const input = await Console.readLineAsync('당첨 번호를 입력해주세요. \n');
    return input.split(',').map((num) => Number(num.trim()));
  },

  async readBonusNumber() {
    const input = await Console.readLineAsync('보너스 번호를 입력해주세요. \n');
    return Number(input.trim());
  },
};

export default InputView;
