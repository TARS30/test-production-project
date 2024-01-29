/* eslint-disable i18next/no-literal-string */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { USER_COUNTER_KEY } from 'shared/const/localStorage';
import { Button } from 'shared/ui/Button/Button';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  useEffect(() => {
    localStorage.setItem(USER_COUNTER_KEY, '0');
  }, []);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  const counterLessZero = counterValue <= -1;
  const counterLessMinusTwo = counterValue < -2;
  const counterLessMinusFive = counterValue < -5;
  const counterMoreThanOne = counterValue > 0;

  const isVisible = counterMoreThanOne || !counterLessMinusFive;

  return (
    <div>
      {isVisible
        ? (
          <>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={increment}>+</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>-</Button>
            {counterMoreThanOne && (
            <Text
              theme={TextTheme.CORRECT}
              text="ОТАК НОМАЛЬНА"
            />
            )}
          </>
        ) : (
          <Text text="Ф - ФСЁ. А ХУЛЬ ТЫ ДУМАЛ?" />
        )}
      {counterLessZero && !counterLessMinusTwo && !counterLessMinusFive
      && (
        <Text
          theme={TextTheme.ERROR}
          text="ТЫ ШО ЕБАНУТЫЙ В МИНУС СЧЕТЧИК СТАВИТЬ?"
        />
      ) }

      {counterLessMinusTwo && !counterLessMinusFive
        && <Text text="Э НАХОЙ, Я ПОСЛЕ ПЯТИ СЪЁБУЮ" theme={TextTheme.ERROR} />}

    </div>
  );
};
