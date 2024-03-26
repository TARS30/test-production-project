/* eslint-disable i18next/no-literal-string */
import { useEffect } from 'react';
import { USER_COUNTER_KEY } from '@/shared/const/localStorage';
import { Button } from '@/shared/ui/Button/Button';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
  const counterValue = useCounterValue();

  useEffect(() => {
    localStorage.setItem(USER_COUNTER_KEY, '0');
  }, []);

  const {
    add,
    decrement,
    increment,
    remove,
    reset,
  } = useCounterActions();

  const incrementHandler = () => {
    increment();
  };
  const decrementHandler = () => {
    decrement();
  };
  const resetHandler = () => {
    reset();
  };
  const addTen = () => {
    add(10);
  };
  const removeTen = () => {
    remove(10);
  };
  const addHundred = () => {
    add(100);
  };
  const removeHundred = () => {
    remove(100);
  };

  const counterLessZero = counterValue <= -1;
  const counterLessMinusTwo = counterValue < -2;
  const counterLessMinusFive = counterValue < -5;
  const counterMoreThanOne = counterValue > 0;
  const counterIsZero = counterValue === 0;

  const isVisible = counterMoreThanOne || !counterLessMinusFive;

  return (
    <div>
      {isVisible
        ? (
          <>
            <h1 data-testid="value-title">{counterValue}</h1>
            <VStack>
              <HStack>
                <Button data-testid="increment-btn" onClick={incrementHandler}>+</Button>
                <Button data-testid="decrement-btn" onClick={decrementHandler}>-</Button>
              </HStack>
              <HStack>
                <Button onClick={addTen}>+10</Button>
                <Button onClick={removeTen}>-10</Button>
              </HStack>
              <HStack>
                <Button onClick={addHundred}>+100</Button>
                <Button onClick={removeHundred}>-100</Button>
              </HStack>
            </VStack>
            {counterMoreThanOne && (
            <Text
              theme={TextTheme.CORRECT}
              text="ОТАК НОМАЛЬНА"
            />
            )}
            {counterIsZero && <Text text="ZERO" />}
          </>
        ) : (
          <>
            <Text text="Ф - ФСЁ. А ХУЛЬ ТЫ ДУМАЛ?" />
            <Button onClick={resetHandler}>reset button</Button>
          </>

        )}
      {counterLessZero && !counterLessMinusTwo && !counterLessMinusFive
      && (
        <Text
          theme={TextTheme.ERROR}
          text="ТЫ ШО ЕБАНУТЫЙ ХТОШ СЧИТАЕТ В МИНУС?"
        />
      ) }

      {counterLessMinusTwo && !counterLessMinusFive
        && <Text text="Э НАХОЙ, Я ПОСЛЕ ПЯТИ СЪЁБУЮ" theme={TextTheme.ERROR} />}
    </div>
  );
};
