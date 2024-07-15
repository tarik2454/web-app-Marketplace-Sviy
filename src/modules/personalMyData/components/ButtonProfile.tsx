import { refreshThunk } from '@/redux/auth/operations';
import { useAppDispatch } from '@/redux/hooks';
import { BlueBorderButton, OrangeButton } from '@/shared/components';
import { useEffect } from 'react';

type ButtonProfileProps = {
  handleUpdateProfileButton?: () => void;
  handleDeleteProfileButton?: () => void;
};

export default function ButtonProfile({
  handleUpdateProfileButton,
  handleDeleteProfileButton,
}: ButtonProfileProps) {
  return (
    <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col gap-6 text-nowrap">
      <OrangeButton
        onClick={handleUpdateProfileButton}
        type="submit"
        cssSettings="text-white md:max-w-[159px] xl:max-w-[167px]"
      >
        Зберегти дані
      </OrangeButton>
      <BlueBorderButton
        onClick={handleDeleteProfileButton}
        type="button"
        cssSettings="md:max-w-[163px] xl:max-w-[201px]"
      >
        Видалити профіль
      </BlueBorderButton>
    </div>
  );
}
