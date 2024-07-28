import React, { useEffect } from 'react';
import DropDownForm from './DropDownForm';
import { fetchCatalog } from '@/config-api/catalog-api';

interface CatalogFormProps {
  formik: any;
  catalogData: Category[];
  subCategories: SubCategory[];
  subSubCategories: SubSubCategory[];
  setCatalogData: React.Dispatch<React.SetStateAction<Category[]>>;
  setSubCategories: React.Dispatch<React.SetStateAction<SubCategory[]>>;
  setSubSubCategories: React.Dispatch<React.SetStateAction<SubSubCategory[]>>;
}

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

export default function CatalogForm ({
  formik,
  catalogData,
  subCategories,
  subSubCategories,
  setCatalogData,
  setSubCategories,
  setSubSubCategories,
} : CatalogFormProps) {
  useEffect(() => {
    fetchCatalog()
      .then(data => setCatalogData(data))
      .catch(error => console.log(error));
  }, [setCatalogData]);

  useEffect(() => {
    const selectedCategory = catalogData.find(
      cat => cat.id === formik.values.category
    );
    if (selectedCategory) {
      setSubCategories(selectedCategory.sub_categories);
      setSubSubCategories([]);
      formik.setFieldValue('subCategory', '');
      formik.setFieldValue('subSubCategory', '');
    }
    // eslint-disable-next-line
  }, [
    formik.values.category,
    catalogData,
    setSubCategories,
    setSubSubCategories,
  ]);

  useEffect(() => {
    const selectedSubCategory = subCategories.find(
      sub => sub.id === formik.values.subCategory
    );
    if (selectedSubCategory) {
      setSubSubCategories(selectedSubCategory.sub_categories);
      formik.setFieldValue('subSubCategory', '');
    }
    // eslint-disable-next-line
  }, [formik.values.subCategory, subCategories, setSubSubCategories]);

  return (
    <div className="mb-6 md:mb-10">
      <label
        htmlFor="category-dropdown"
        className="block text-xl text-gray-900 mb-4"
      >
        Категорія/підкатегорія <span className="text-red-600">*</span>
      </label>
      <span className="flex flex-col md:flex-row gap-6">
        <DropDownForm
          formik={formik}
          options={catalogData.map(category => ({
            value: category.id,
            label: category.name,
          }))}
          name="category"
          placeholder="Оберіть категорію"
          dropdownIndicatorClassName="text-gray-600"
          wrapperClassName="w-full md:w-[301px]"
          stylesInput="py-1.5"
          id="category-dropdown"
          onChange={selectedOption =>
            formik.setFieldValue(
              'category',
              selectedOption ? selectedOption.value : ''
            )
          }
        />
        <DropDownForm
          formik={formik}
          options={subCategories.map(subCategory => ({
            value: subCategory.id,
            label: subCategory.name,
          }))}
          name="subCategory"
          placeholder="Оберіть підкатегорію"
          dropdownIndicatorClassName="text-gray-600"
          wrapperClassName="w-full md:w-[301px]"
          stylesInput="py-1.5"
          id="subcategory-dropdown"
          onChange={selectedOption =>
            formik.setFieldValue(
              'subCategory',
              selectedOption ? selectedOption.value : ''
            )
          }
        />
        <DropDownForm
          formik={formik}
          options={subSubCategories.map(subSubCategory => ({
            value: subSubCategory.id,
            label: subSubCategory.name,
          }))}
          name="subSubCategory"
          placeholder="Оберіть субкатегорію"
          dropdownIndicatorClassName="text-gray-600"
          wrapperClassName="w-full md:w-[301px]"
          stylesInput="py-1.5"
          id="subsubcategory-dropdown"
          onChange={selectedOption =>
            formik.setFieldValue(
              'subSubCategory',
              selectedOption ? selectedOption.value : ''
            )
          }
        />
      </span>
    </div>
  );
};

