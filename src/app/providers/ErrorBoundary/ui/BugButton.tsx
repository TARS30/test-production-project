import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

const BugButton = () => {
  const { t } = useTranslation();

  const [error, setError] = useState(false);

  const bugCreator = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={bugCreator}>
      {t('create-bug')}
    </Button>
  );
};

export default BugButton;

// тестовый компонент для генерации ошибки
