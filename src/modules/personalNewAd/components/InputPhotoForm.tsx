import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AddImage from '@/shared/img/add-image.png';

const InputPhoto = ({
  formik,
  setFieldValue,
}: {
  formik: any;
  setFieldValue: any;
}) => {
  const [previewPhotos1, setPreviewPhotos1] = useState<string[]>([]);
  const [previewPhotos2, setPreviewPhotos2] = useState<string[][]>([
    [],
    [],
    [],
    [],
    [],
  ]);

  const handleFileChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setFieldValue('photos1', files);
    setPreviewPhotos1(files.map(file => URL.createObjectURL(file)));
  };

  const handleFileChange2 = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const files = Array.from(event.target.files || []);
    const newPhotos: string[] = [];

    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newPhotos.push(reader.result as string);
        if (newPhotos.length === files.length) {
          setFieldValue(`photos2[${index}]`, files);
          setPreviewPhotos2(prevState => {
            const updatedPreviews = [...prevState];
            updatedPreviews[index] = newPhotos;
            return updatedPreviews;
          });
        }
      };
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    return () => {
      previewPhotos1.forEach(photoUrl => URL.revokeObjectURL(photoUrl));
      previewPhotos2.forEach(photos => {
        photos.forEach(photoUrl => URL.revokeObjectURL(photoUrl));
      });
    };
  }, [previewPhotos1, previewPhotos2]);

  return (
    <div className="w-[325px] md:w-full xl:w-[325px] bg-white rounded-[20px] px-5 py-6">
      <label htmlFor="photos1" className="mb-6 text-xl">
        Додати фото 1*
      </label>
      <p className="text-sm text-gray-600 mb-6">
        Формат jpg, jpeg, png. розмір файлу до 2Мб,
      </p>
      <div className="flex flex-col md:flex-row xl:flex-col gap-3">
        <div className="form-group flex flex-col">
          <div className="relative">
            <input
              type="file"
              id="photos1"
              name="photos1"
              accept=".jpg, .jpeg, .png"
              className="absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange1}
            />
            <div className="relative flex gap-2 flex-col mb-3">
              {previewPhotos1.length === 0 ? (
                <div className="absolute top-[274px] left-[133px] md:relative md:top-0 md:left-0 w-[121px] h-[113px] md:w-[262px] md:h-[243px] rounded-[20px] flex items-center justify-center border">
                  <div className="flex flex-col">
                    <div className="w-[47px] h-[53px] md:w-[115px] md:h-[112px] mb-[5px]">
                      <Image
                        className="w-full h-full"
                        width={0}
                        height={0}
                        sizes="100vh"
                        src={AddImage}
                        alt="Order photo"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute top-[274px] left-[133px] md:relative md:top-0 md:left-0 w-[121px] h-[113px] md:w-[262px] md:h-[243px]">
                  <Image
                    src={previewPhotos1[0]}
                    alt={`Uploaded photo 1`}
                    className="object-cover w-full h-full rounded-[20px]"
                    width={0}
                    height={0}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <ul className="flex flex-wrap gap-3">
          {[1, 2, 3, 4, 5].map(index => (
            <li key={index} className="form-group flex flex-col">
              <label htmlFor={`photos2-${index}`} className="text-xl"></label>
              <div className="relative">
                <input
                  type="file"
                  id={`photos2-${index}`}
                  name={`photos2-${index}`}
                  accept=".jpg, .jpeg, .png"
                  className="absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer"
                  multiple
                  onChange={e => handleFileChange2(e, index - 1)}
                />
                <div className="relative flex gap-2 flex-wrap">
                  {previewPhotos2[index - 1].length === 0 ? (
                    <div className="relative w-[121px] h-[113px] border rounded-[20px] flex items-center justify-center">
                      <div className="w-[47px] h-[53px]">
                        <Image
                          className="w-full h-full"
                          width={0}
                          height={0}
                          sizes="100vh"
                          src={AddImage}
                          alt="Order photo"
                        />
                      </div>
                    </div>
                  ) : (
                    previewPhotos2[index - 1].map((photoUrl, idx) => (
                      <div key={idx} className="relative w-[121px] h-[113px]">
                        <Image
                          src={photoUrl}
                          alt={`Uploaded photo ${index} - ${idx + 1}`}
                          className="object-cover w-full h-full rounded-[20px]"
                          width={121}
                          height={113}
                        />
                      </div>
                    ))
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InputPhoto;
