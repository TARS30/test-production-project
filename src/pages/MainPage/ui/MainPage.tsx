import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';
import { MyListbox } from 'shared/ui/MyListbox/MyListbox';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('glavnaya-stranica')}
      <Counter />
      <HStack>
        <Text text="some text" />
        <MyListbox
          defaultValue="choose value"
          onChange={(value:string) => {}}
          value={undefined}
          items={[
            { value: '123', content: '3123123123' },
            { value: '123123', content: '31231231233123123123' },
            { value: '123123123', content: '312312312331231231233123123123' },
            { value: '1231', content: '331231231233123123123', disabled: true },
            { value: '1231asdas', content: '331231231233123123123adsdasdasd' },
          ]}
        />
      </HStack>
    </Page>
  );
};

export default MainPage;
