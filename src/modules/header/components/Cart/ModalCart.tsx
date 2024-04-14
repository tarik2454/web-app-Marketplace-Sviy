import Modal from '@/shared/components/Modal/Modal';
import Cart from './Cart';

type ModalCartProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  showCatalog: boolean;
  showSearch: boolean;
};

export default function ModalCart({
  isModalOpen,
  closeModal,
  showCatalog,
  showSearch,
}: ModalCartProps) {
  return (
    <Modal
      stylesWrapper={`max-w-[375px] h-screen px-5 py-6 md:bg-neutral-50 overflow-y-auto rounded-none 
        md:max-w-[704px] md:max-h-[90%] md:h-auto md:m-auto md:py-5 md:px-4 md:rounded-default 
        xl:max-w-[1280px] xl:p-[32px]`}
      stylesCloseButton="top-[30.5px] right-4 md:top-[25px] md:right-4 xl:top-[32px] xl:right-[32px]"
      isOpen={isModalOpen}
      onClose={closeModal}
      showCatalog={showCatalog}
      showSearch={showSearch}
    >
      <Cart closeModal={closeModal} />
    </Modal>
  );
}
