'use client';

import { useState } from 'react';
import { useFormik } from 'formik';

import {
  ArrowButton,
  Container,
  FormInput,
  OrangeButton,
  Section,
} from '@/shared/components';

import {
  optionsAvailability,
  optionsLocation,
  optionsUnit,
} from './helpers/dropdown-data';

import CheckboxForm from './components/СheckboxForm';
import InputPhoto from './components/InputPhotoForm';
import DropDownForm from './components/DropDownForm';
import ModalForm from './components/ModalForm';
import validationSchemaNewAd from './helpers/validationSchemaNewAd';
import useModal from '@/shared/hooks/useModal';
import CatalogForm from './components/СatalogForm';
import { descriptionPlaceholder } from './helpers/description-placeholder-data';

import Modal from '@/shared/components/Modal/Modal';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectAdverts } from '@/redux/adverts/advertsSlice';
import { createAdvertThunk } from '@/redux/adverts/operations';
import { toast } from 'react-toastify';

interface Category {
  id: string;
  name: string;
  sub_categories: SubCategory[];
}

interface SubCategory {
  id: string;
  name: string;
  sub_categories: SubSubCategory[];
}

interface SubSubCategory {
  id: string;
  name: string;
}

export default function PersonalNewAd() {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isCheckedPay, setIsCheckedPay] = useState<boolean>(false);

  const [catalogData, setCatalogData] = useState<Category[]>([]);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [subSubCategories, setSubSubCategories] = useState<SubSubCategory[]>(
    []
  );

  const { isOpenModal, handleOpenModal, handleCloseModal } = useModal();
  const [isDeleteModal, setIsDeleteModal] = useState(true);

  const dispatch = useAppDispatch();

  const handleSubmit = (values: any, { resetForm }: any): void => {
    const formData = new FormData();

    const categoryName =
      catalogData.find(cat => cat.id === values.category)?.name || '';
    const subCategoryName =
      subCategories.find(sub => sub.id === values.subCategory)?.name || '';
    const subSubCategoryName =
      subSubCategories.find(subSub => subSub.id === values.subSubCategory)
        ?.name || '';

    formData.append('category', categoryName);
    formData.append('subCategory', subCategoryName);
    formData.append('subSubCategory', subSubCategoryName);

    // for (const key in values) {
    //   if (key === 'photos') {
    //     values.photos.forEach((photo: File) => {
    //       formData.append('photos', photo);
    //     });
    //   } else if (!['category', 'subCategory', 'subSubCategory'].includes(key)) {
    //     if (Array.isArray(values[key])) {
    //       values[key].forEach((value: any) => {
    //         formData.append(key, value);
    //       });
    //     } else {
    //       formData.append(key, values[key]);
    //     }
    //   }
    // }

    // dispatch(createAdvertThunk(formData))
    //   .unwrap()
    //   .then(() => {
    //     console.log(formData);
    //   })
    //   .catch(error => {
    //     toast.error(error);
    //   });

    // formData.forEach((value, key) => {
    //   const data = { key: value };
    //   console.log(data);
    // });

    resetForm();
    handleOpenModal();
    setIsDeleteModal(true);
  };

  // const { entris } = useAppSelector(selectAdverts);
  // console.log(entris);

  const handleCancel = () => {
    handleOpenModal();
    setIsDeleteModal(false);
  };

  const handleDeleteForm = () => {
    formik.resetForm();
    handleCloseModal();
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      category: '',
      subCategory: '',
      subSubCategory: '',
      description: '',
      quantity: 0,
      unit: '',
      availability: '',
      location: '',
      deliveryMethods: [],
      deliveryCom: '',
      pay: [],
      card: '',
      comment: '',
      photos: [],
    },
    validationSchema: validationSchemaNewAd,
    onSubmit: handleSubmit,
    validateOnChange: true,
    validateOnBlur: true,
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
                label={
                  <span>
                    Назва оголошення <span className="text-red-900">*</span>
                  </span>
                }
                inputType="text"
                classNameLogin="!text-xl mb-4 !ml-0"
              />
              <CatalogForm
                formik={formik}
                catalogData={catalogData}
                subCategories={subCategories}
                subSubCategories={subSubCategories}
                setCatalogData={setCatalogData}
                setSubCategories={setSubCategories}
                setSubSubCategories={setSubSubCategories}
              />
              <FormInput
                formik={formik}
                name="description"
                placeholder={descriptionPlaceholder}
                label={'Опис товару'}
                inputType="textarea"
                classNameLogin="!text-xl mb-4 !ml-0"
                textAreaStyle="h-auto resize-none overflow-hidden"
              />
              <span className="flex flex-col md:flex-row gap-6 mt-6 mb-6">
                <span className="w-full md:w-[301px]">
                  <FormInput
                    formik={formik}
                    name="quantity"
                    placeholder="Вартість"
                    label={
                      <span>
                        Вартість<span className="text-red-900"> *</span>
                      </span>
                    }
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
                    options={optionsUnit}
                    stylesInput="py-1.5"
                    placeholder="Оберіть одиницю"
                    dropdownIndicatorClassName="text-gray-600"
                    menuClassName="text-gray-900"
                    wrapperClassName="text-gray-600"
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
                    <span className="text-red-900"> *</span>
                  </label>
                  <DropDownForm
                    formik={formik}
                    name="availability"
                    options={optionsAvailability}
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
              <div className="mb-6">
                <label
                  htmlFor="availability-dropdown"
                  className="block text-xl text-gray-900 mb-4"
                >
                  Місце розташування товару
                  <span className="text-red-900"> *</span>
                </label>
                <DropDownForm
                  formik={formik}
                  name="location"
                  options={optionsLocation}
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
                <span className="text-xl">
                  Доставка <span className="text-red-900"> *</span>
                </span>
                <span className="flex gap-8 md:gap-[113px] mt-4 mb-6">
                  <span onChange={() => setIsChecked(!isChecked)}>
                    <CheckboxForm
                      name="deliveryMethods"
                      labelText="Самовивіз"
                      formik={formik}
                    />
                  </span>
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
                {isChecked && (
                  <FormInput
                    formik={formik}
                    name="diliveryComment"
                    placeholder="Львів"
                    label={''}
                    inputType="textarea"
                    classNameLogin="text-xl text-gray-600"
                  />
                )}
                <span className="flex flex-col mb-4 mt-6">
                  <span className="text-xl mb-4">Оплата</span>
                  <span className="flex flex-col md:flex-row gap-6">
                    <span className="w-full md:w-[487px]">
                      <span onChange={() => setIsCheckedPay(!isCheckedPay)}>
                        <CheckboxForm
                          name="pay"
                          labelText="На картку продавця"
                          formik={formik}
                        />
                      </span>
                      <FormInput
                        formik={formik}
                        name="card"
                        placeholder="0000 0000 0000 0000"
                        label={'Вкажіть номер картки'}
                        inputType="number"
                        classNameLogin="text-xl mt-4 mb-2 text-gray-600 !ml-0"
                        readOnly={!isCheckedPay}
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
                        textAreaStyle="h-auto"
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
        <Modal
          stylesWrapper="!pt-[48px]"
          isOpen={isOpenModal}
          onClose={handleCloseModal}
        >
          <ModalForm
            handleClose={handleCloseModal}
            isDeleteModal={isDeleteModal}
            handleDelete={handleDeleteForm}
          />
        </Modal>
      </Container>
    </Section>
  );
}
