export const getStatusValues = (orderedItems: { status: string }[]) => {
  return orderedItems.map(item => {
    switch (item.status) {
      case 'new':
        return { class: 'border-blue-700', name: 'Нове' };
      case 'inprogress':
        return { class: 'border-amber-500', name: 'В роботі' };
      case 'fulfilled':
        return { class: 'border-green-700', name: 'Виконано' };
      case 'canceled':
        return { class: 'border-neutral-400', name: 'Скасовано' };
      default:
        return { class: '', name: '' };
    }
  });
};
