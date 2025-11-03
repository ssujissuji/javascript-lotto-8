import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printLottoTickets(tickets) {
    Console.print(`\n${tickets.length}개를 구매했습니다.`);
    tickets.forEach((ticket) => {
      const numbers = ticket.getNumbers().join(', ');
      Console.print(`[${numbers}]`);
    });
  },

  printStatistics(results, profitRate) {
    Console.print('\n당첨 통계\n---');
    Console.print(`3개 일치 (5,000원) - ${results[3]}개`);
    Console.print(`4개 일치 (50,000원) - ${results[4]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results[5]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[5.5]}개`,
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${results[6]}개`);
    Console.print(`총 수익률은 ${profitRate}%입니다.`);
  },

  printError(message) {
    Console.print(message);
  },
};

export default OutputView;
