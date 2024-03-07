'use client';
import {
  FormInput,
  OrangeButton,
  FormHeading,
  Section,
} from '@/shared/components';
import { useFormik } from 'formik';
import { MouseEventHandler, useState, useEffect } from 'react';
import * as Yup from 'yup';
import Modal from '@/shared/components/Modal/Modal';
import PasswordChanged from '@/shared/components/ModalPassChanged/PassChanged';

type Props = {
  recoverPassword: 'page' | 'burger';
  signinClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function RecoverPasswordForm({
  recoverPassword,
  signinClick,
}: Props) {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [passChangedType, setPassChangedType] = useState('page');

  useEffect(() => {
    function handleResize() {
      // Визначення розміру екрану
      const isMobile = window.innerWidth < 768; // Припустимо, що мобільний розмір екрану менше 768px
      setPassChangedType(isMobile ? 'burger' : 'page'); // Якщо екран мобільний, то встановити 'burger', в іншому випадку - 'page'
    }

    // Встановлення розміру екрану при завантаженні сторінки
    handleResize();

    // Додавання прослуховувача подій на зміну розміру вікна
    window.addEventListener('resize', handleResize);

    // Прибирання прослуховувача подій при виході з компонента
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Пустий масив залежностей, щоб функція викликалася лише при монтуванні компонента

  const handleSubmit = async () => {
    setShowModal(true);
    setIsFormSubmitted(true);
  };

  const formik = useFormik({
    initialValues: {
      number: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      number: Yup.number().required('Потрібен код підтвердження'),
      password: Yup.string()
        .min(8, 'Пароль повинен мати довжину не менше 8 символів')
        .required('Потрібен пароль'),
    }),
    onSubmit: handleSubmit,
  });

  return (
    <Section className="py-[80px] md:pt-[104px] xl:py-[164px]">
      <FormHeading
        heading="Встановити новий пароль"
        additionalText="Для підтвердження вашої особи, введіть код, який був висланий на вашу електронну пошту."
      />
      <form
        className="flex flex-col justify-center max-w-[400px] mx-auto"
        onSubmit={formik.handleSubmit}
      >
        <div className="pb-2">
          <FormInput
            formik={formik}
            id="number"
            label={'Код підтвердження'}
            inputType="text"
          />
        </div>

        <button className="flex justify-start text-sm leading-tight text-blue-90 pl-5 pb-5">
          Надіслати повторно
        </button>

        <div className="pb-2 d">
          <FormInput
            formik={formik}
            id="password"
            label={'Ведіть новий пароль'}
            inputType="password"
          />
        </div>

        <p className="text-xs leading-none text-blue-900">
          Пароль повинен мати мінімум 8 символів. Для надійності пароля додайте
          великі, малі літери та цифри.
        </p>

        <div className="w-28 mt-10 mx-auto pb-6 flex justify-center">
          <OrangeButton onClick={() => {}} type="submit">
            Підтвердити
          </OrangeButton>
        </div>
      </form>
      {isFormSubmitted && showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <PasswordChanged
            signinClick={signinClick}
            passChangedType={passChangedType}
          />
        </Modal>
      )}
    </Section>
  );
}
