'use client';

import { useFormik } from 'formik';

import {
  ArrowButton,
  Container,
  FormInput,
  OrangeButton,
  Section,
} from '@/shared/components';

import CheckboxForm from './components/СheckboxForm';
import InputPhoto from './components/InputPhotoForm';
import DropDownForm from './components/DropDownForm';
import validationSchemaNewAd from './helpers/validationSchemaNewAd';

const PersonalNewAd: React.FC = () => {
  const handleSubmit = (values: any, { resetForm }: any): void => {
    const formData = new FormData();

    for (const key in values) {
      if (Array.isArray(values[key])) {
        values[key].forEach((item: any, index: number) => {
          if (Array.isArray(item)) {
            item.forEach((subItem, subIndex) => {
              formData.append(`${key}[${index}][${subIndex}]`, subItem);
            });
          } else {
            formData.append(`${key}[${index}]`, item);
          }
        });
      } else {
        formData.append(key, values[key]);
      }
    }

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    resetForm();
  };

  const handleCancel = () => {
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      description: '',
      quantity: 1,
      unit: '',
      availability: '',
      location: '',
      deliveryMethods: [],
      pay: [],
      card: '',
      comment: '',
      photos1: [],
      photos2: [[], [], [], [], []],
    },
    validationSchema: validationSchemaNewAd,
    onSubmit: handleSubmit,
  });

  return (
    <Section className="pt-0 xl:pt-0 md:pt-0 pb-[80px] md:pb-[104px] xl:pb-[164px]">
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <span className="flex flex-col gap-6 xl:flex-row">
            <span className="basik-3/4">
              <FormInput
                formik={formik}
                name="title"
                placeholder="Назва оголошення"
                label={'Назва оголошення'}
                inputType="text"
                classNameLogin="!text-xl mb-4 !ml-0"
              />
              <div className="mt-6 mb-6 md:mb-10 md-mt-10">
                <label
                  htmlFor="category-dropdown"
                  className="block text-xl text-gray-900 mb-4"
                >
                  Категорія/підкатегорія
                </label>
                <DropDownForm
                  formik={formik}
                  options={[
                    { value: 'category-1', label: 'Категорія 1' },
                    { value: 'category-2', label: 'Категорія 2' },
                  ]}
                  name="category"
                  placeholder="Оберіть категорію"
                  dropdownIndicatorClassName="text-gray-600"
                  stylesInput="py-1.5"
                  id="category-dropdown"
                  onChange={selectedOption =>
                    formik.setFieldValue(
                      'category',
                      selectedOption ? selectedOption.value : ''
                    )
                  }
                />
              </div>
              <FormInput
                formik={formik}
                name="description"
                placeholder="Опис товару"
                label={'Опис товару'}
                inputType="textarea"
                classNameLogin="!text-xl mb-4 !ml-0"
              />
              <span className="flex flex-col md:flex-row gap-6 mt-6 mb-6 md:mt-10 md:mb-10">
                <span className="w-full md:w-[301px]">
                  <FormInput
                    formik={formik}
                    name="quantity"
                    placeholder="Вартість"
                    label={'Вартість'}
                    inputType="number"
                    classNameLogin="!text-xl mb-4 !ml-0"
                  />
                </span>
                <div className="w-full md:w-[301px]">
                  <label
                    htmlFor="unit-dropdown"
                    className="block mb-4 text-xl text-gray-900"
                  >
                    Одиниця
                  </label>
                  <DropDownForm
                    formik={formik}
                    name="unit"
                    options={[
                      { value: 'шт', label: 'Шт' },
                      { value: 'кг', label: 'Кг' },
                      { value: 'гр', label: 'Гр' },
                      { value: 'літ', label: 'Літ' },
                    ]}
                    stylesInput="py-1.5"
                    placeholder="Оберіть одиницю"
                    dropdownIndicatorClassName="text-gray-600"
                    id="unit-dropdown"
                    onChange={selectedOption =>
                      formik.setFieldValue(
                        'unit',
                        selectedOption ? selectedOption.value : ''
                      )
                    }
                  />
                </div>
                <div className="w-full md:w-[301px]">
                  <label
                    htmlFor="availability-dropdown"
                    className="block mb-4 text-xl text-gray-900"
                  >
                    Наявність
                  </label>
                  <DropDownForm
                    formik={formik}
                    name="availability"
                    options={[
                      { value: 'available', label: 'В наявності' },
                      { value: 'preorder', label: 'Під замовлення' },
                    ]}
                    placeholder="Оберіть наявність"
                    stylesInput="py-1.5"
                    dropdownIndicatorClassName="text-gray-600"
                    id="availability-dropdown"
                    onChange={selectedOption =>
                      formik.setFieldValue(
                        'availability',
                        selectedOption ? selectedOption.value : ''
                      )
                    }
                  />
                </div>
              </span>
              <div className="mb-6 md:mb-10">
                <label
                  htmlFor="availability-dropdown"
                  className="block text-xl text-gray-900 mb-4 md:mb-8"
                >
                  Місце розташування товару
                </label>
                <DropDownForm
                  formik={formik}
                  name="location"
                  options={[
                    { value: 'Весь Львів', label: 'Весь Львів' },
                    { value: 'Галицький', label: 'Галицький р-н' },
                    { value: 'Сихівський', label: 'Сихівський р-н' },
                    { value: 'Залізничний', label: 'Залізничний р-н' },
                    { value: 'Залізничний', label: 'Залізничний р-н' },
                    { value: 'Личаківський', label: 'Личаківський р-н' },
                    { value: 'Шевченківський', label: 'Шевченківський р-н' },
                  ]}
                  placeholder="Оберіть місце розташування"
                  dropdownIndicatorClassName="text-gray-600"
                  stylesInput="py-1.5"
                  id="availability-dropdown"
                  onChange={selectedOption =>
                    formik.setFieldValue(
                      'location',
                      selectedOption ? selectedOption.value : ''
                    )
                  }
                />
              </div>
              <span>
                <span className="text-xl">Доставка</span>
                <span className="flex gap-8 md:gap-[113px] mt-6 mb-6 md:mb-10">
                  <CheckboxForm
                    name="deliveryMethods"
                    labelText="Самовивіз"
                    formik={formik}
                  />
                  <CheckboxForm
                    name="deliveryMethods"
                    labelText="Нова Пошта"
                    formik={formik}
                  />
                  <CheckboxForm
                    name="deliveryMethods"
                    labelText="Кур’єр"
                    formik={formik}
                  />
                </span>
                <span className="flex flex-col mb-4">
                  <span className="text-xl mb-6">Оплата</span>
                  <span className="flex flex-col md:flex-row gap-6">
                    <span className="w-full md:w-[487px]">
                      <CheckboxForm
                        name="pay"
                        labelText="На картку продавця"
                        formik={formik}
                      />
                      <FormInput
                        formik={formik}
                        name="card"
                        placeholder="0000 0000 0000 0000"
                        label={'Вкажіть номер картки'}
                        inputType="number"
                        classNameLogin="text-xl mt-4 mb-2 text-gray-600 !ml-0"
                      />
                    </span>
                    <span className="w-full md:w-[378px]">
                      <CheckboxForm
                        name="pay"
                        labelText="Оплата під час отримання товару"
                        formik={formik}
                      />
                      <FormInput
                        formik={formik}
                        name="comment"
                        placeholder="Наприклад: Бескоштовна доставка на суму від 1000 грн"
                        label={'Коментар'}
                        inputType="textarea"
                        classNameLogin="text-xl mt-4 mb-2 text-gray-600 !ml-0"
                      />
                    </span>
                  </span>
                </span>
              </span>
            </span>
            <span className="basik-1/4 mb-8 md:mb-10 xl:mb-0">
              <InputPhoto
                formik={formik}
                setFieldValue={formik.setFieldValue}
              />
            </span>
          </span>
          <span className="flex gap-2">
            <OrangeButton cssSettings="text-white" type="submit">
              Опублікувати
            </OrangeButton>
            <ArrowButton
              onClick={handleCancel}
              cssSettings="sm:px-2 md:py-2.5 md:px-8"
              svgCssSettings="sm:hidden md:block "
            >
              Скасувати
            </ArrowButton>
          </span>
        </form>
      </Container>
    </Section>
  );
};

export default PersonalNewAd;
