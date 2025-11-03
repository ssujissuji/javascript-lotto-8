export const ERROR_PREFIX = '[ERROR]';

export const ERROR = {
  INVALID_ISNAN: `${ERROR_PREFIX} 입력값은 숫자여야 합니다.`,
  INVALID_POSITIVE_NUMBER: `${ERROR_PREFIX} 숫자는 양의 정수만 입력할 수 있습니다.`,
  INVALID_MONEY_1000: `${ERROR_PREFIX} 구입 금액은 1,000원 단위의 숫자여야 합니다.`,
  INVALID_WINNING_NUMBERS_6: `${ERROR_PREFIX} 당첨 번호는 6개의 숫자여야 합니다.`,
  INVALID_NUMBER_OUT_OF_RANGE: `${ERROR_PREFIX} 번호는 1~45 사이의 숫자여야 합니다.`,
  INVALID_BONUS_NUMBER_ONE: `${ERROR_PREFIX} 보너스 번호는 1개여야 합니다.`,
  INVALID_NUMBER_DUPLICATE: `${ERROR_PREFIX} 번호는 중복될 수 없습니다.`,
};
