import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AddImage from '@/shared/img/add-image.png';
import { SpriteSVG } from '@/shared/img/SpriteSVG';

interface Photo {
  id: string;
  url: string;
  groupIndex: number;
}

export default function InputPhoto({
  formik,
  setFieldValue,
}: {
  formik: any;
  setFieldValue: any;
}) {
  const [photos, setPhotos] = useState<Photo[]>([]);
  // const [photos, setPhotos] = useState<Photo[]>([]);
  const [trashVisibleIndex, setTrashVisibleIndex] = useState<string | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    groupIndex: number
  ) => {
    setError(null);
    const files = Array.from(event.target.files || []);
    const newPhotos: Photo[] = [];
    const newFiles: File[] = [];
    let hasInvalidFile = false;

    files.forEach(file => {
      if (file.size > 2 * 1024 * 1024) {
        setError('Розмір файлу повинен бути не більше 2 МБ');
        hasInvalidFile = true;
      } else {
        newPhotos.push({
          id: URL.createObjectURL(file),
          url: URL.createObjectURL(file),
          groupIndex,
        });
        newFiles.push(file);
      }
    });

    if (!hasInvalidFile) {
      setPhotos(prevPhotos => [...prevPhotos, ...newPhotos]);
      setFieldValue('photos', [...formik.values['photos'], ...newFiles]);
    }
  };

  const handleDeletePhoto = (photoId: string) => {
    const photoToDelete = photos.find(photo => photo.id === photoId);
    if (!photoToDelete) return;

    setPhotos(prevPhotos => prevPhotos.filter(photo => photo.id !== photoId));

    const updatedPhotos = formik.values['photos'].filter(
      (_: any, index: number) => index !== photoToDelete.groupIndex
    );
    setFieldValue('photos', updatedPhotos);
  };

  useEffect(() => {
    return () => {
      photos.forEach(photo => URL.revokeObjectURL(photo.url));
    };
  }, [photos]);

  return (
    <div className="w-[325px] md:w-full xl:w-[325px] bg-white rounded-[20px] px-5 py-6">
      <label htmlFor="photos1" className="mb-6 text-xl">
        Додати фото 1*
      </label>

      <p className="text-sm text-gray-600 mb-6">
        Формат jpg, jpeg, png. розмір файлу до 2Мб,
      </p>
      {error && <p className="error !text-left">{error}</p>}

      <div className="flex flex-col md:flex-row xl:flex-col gap-3">
        <div className="form-group flex flex-col">
          <div className="relative w-[262px] h-[243px]">
            <input
              type="file"
              id="photos1"
              name="photos1"
              accept="image/png, image/jpeg, image/jpg"
              className="absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer"
              onChange={e => handleFileChange(e, 0)}
            />

            <div className="relative flex gap-2 flex-col mb-3 w-full h-full">
              {photos.filter(photo => photo.groupIndex === 0).length === 0 ? (
                <div className="w-full h-full flex items-center justify-center border rounded-[20px]">
                  <div className="w-[115px] h-[112px]">
                    <Image
                      className="w-full h-full"
                      width={0}
                      height={0}
                      sizes="100vh"
                      src={AddImage}
                      alt='Order photo'
                    />
                  </div>
                </div>
              ) : (
                photos
                  .filter(photo => photo.groupIndex === 0)
                  .map(photo => (
                    <div
                      key={photo.id}
                      className="relative z-10 w-[262px] h-[243px]"
                      onMouseEnter={() => setTrashVisibleIndex(photo.id)}
                      onMouseLeave={() => setTrashVisibleIndex(null)}
                    >
                      <Image
                        src={photo.url}
                        alt={`Uploaded photo`}
                        className="object-cover w-full h-full rounded-[20px]"
                        width={262}
                        height={243}
                      />
                      {trashVisibleIndex === photo.id && (
                        <button
                          className="absolute top-1/3 md:top-1/2 right-2 bg-neutral-500 rounded-lg p-1"
                          onClick={() => handleDeletePhoto(photo.id)}
                        >
                          <SpriteSVG name="trash" />
                        </button>
                      )}
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>

        <ul className="flex flex-wrap gap-3">
          {[1, 2, 3, 4, 5].map(index => (
            <li key={index} className="form-group flex flex-col">
              <label htmlFor={`photos-${index}`} className="text-xl"></label>
              <div className="relative">
                <input
                  type="file"
                  id={`photos-${index}`}
                  name={`photos-${index}`}
                  accept=".jpg, .jpeg, .png"
                  className="absolute inset-0 z-10 w-full h-full opacity-0 cursor-pointer"
                  multiple
                  onChange={e => handleFileChange(e, index)}
                />
                <div className="relative flex gap-2 flex-wrap">
                  {photos.filter(photo => photo.groupIndex === index).length ===
                  0 ? (
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
                    photos
                      .filter(photo => photo.groupIndex === index)
                      .map(photo => (
                        <div
                          key={photo.id}
                          className="relative z-10 w-[121px] h-[113px]"
                          onMouseEnter={() => setTrashVisibleIndex(photo.id)}
                          onMouseLeave={() => setTrashVisibleIndex(null)}
                        >
                          <Image
                            src={photo.url}
                            alt={`Uploaded photo`}
                            className="object-cover w-full h-full rounded-[20px]"
                            width={121}
                            height={113}
                          />
                          {trashVisibleIndex === photo.id && (
                            <button
                              className="absolute top-1/3 md:top-1/2 right-2 bg-neutral-500 rounded-lg p-1"
                              onClick={() => handleDeletePhoto(photo.id)}
                            >
                              <SpriteSVG name="trash" />
                            </button>
                          )}
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
}
