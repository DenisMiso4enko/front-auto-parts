export const formFields = [
  {
    type: 'text',
    label: 'Марка*',
    placeholder: 'Введите марку авто',
    required: true,

  },
  {
    type: 'text',
    label: 'Модель*',
    placeholder: 'Введите модель авто',
    required: true,
  },
  {
    type: 'text',
    label: 'Год выпуска*',
    placeholder: 'Введите год выпуска авто',
    required: true,
  },
  {
    type: 'text',
    label: 'Модификация',
    placeholder: 'Введите модификацию авто',
    required: false,
  },
  {
    type: 'text',
    label: 'Объём (л)',
    placeholder: 'Введите объём двигателя',
    required: false,
  },
  {
    type: 'select',
    label: 'Топливо',
    text: 'Выберите тип топлива',
    option: ['Бензин', 'Дизель'],
  },
  {
    type: 'select',
    label: 'Тип впуска',
    text: 'Выберите тип впуска двигателя',
    option: ['Атмосферный', 'Турбированный'],
  },
  {
    type: 'text',
    label: 'Тип кузова',
    placeholder: 'Введите тип кузова',
    required: false,
  },
  {
    type: 'select',
    label: 'КПП',
    text: 'Выберите тип КПП',
    option: ['Механическая', 'Автоматическая', 'Роботизированная'],
  },
  {
    type: 'text',
    label: 'Запчасть*',
    placeholder: 'Введите название запчасти',
    required: true,
  },
  {
    type: 'file',
    label: 'Фотографии',
    placeholder: 'Выберите фото',
    multiple: true,
  },
  {
    type: 'text',
    label: 'Артикул',
    placeholder: 'Введите артикул запчасти',
    required: false,
  },
  {
    type: 'text',
    label: 'Номер',
    placeholder: 'Введите номер запчасти',
    required: false,
  },
  {
    type: 'textarea',
    label: 'Описание',
    placeholder: 'Напишите описание запчасти',
  },
  {
    type: 'text',
    label: 'Цена',
    placeholder: 'Введите цену запчасти',
    required: false,
  },
  {
    type: 'radio',
    label: 'Валюта',
    value: ['BYN', 'USD', 'RUB']
  },
]