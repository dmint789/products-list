export const state = () => ({
  items: [
    {
      id: 1,
      title: 'Сумка',
      description: 'Красивая сумка',
      price: '10000',
      url: 'https://www.bragmybag.com/wp-content/uploads/2015/02/Loewe-Puzzle-Bag-blue.jpg',
    },
    {
      id: 2,
      title: 'Кошка',
      description: 'Милая кошка',
      price: '100',
      url: 'https://3.bp.blogspot.com/--3DlxklEVeQ/UDB3EBzbhpI/AAAAAAAAPfg/VGdEr7cTiPg/s1600/Cute+Kitten+6.jpg',
    },
    { id: 3, title: '', description: '', price: '', url: '' },
    { id: 4, title: '', description: '', price: '', url: '' },
    { id: 5, title: '', description: '', price: '', url: '' },
    { id: 6, title: '', description: '', price: '', url: '' },
    { id: 7, title: '', description: '', price: '', url: '' },
    { id: 8, title: '', description: '', price: '', url: '' },
    { id: 9, title: '', description: '', price: '', url: '' },
  ],
  title: '',
  description: '',
  url: '',
  price: '',
});

export const getters = {
  isValidItem: (state, getters) => () => {
    const { getInputError } = getters;
    return (
      getInputError('title') === '' &&
      getInputError('url') === '' &&
      getInputError('price') === ''
    );
  },
  getInputError: (state) => (field) => {
    if (!state[field]) {
      return 'Поле является обязательным';
    } else if (field === 'price') {
      if (Number(state.price).toString() !== state.price) {
        return 'Это поле должно быть числом';
      } else if (/[^0-9]/.test(state.price)) {
        return 'В этом поле могут быть только цифры';
      } else return '';
    } else return '';
  },
};

export const mutations = {
  addItem: (state) => {
    let price = '';
    for (let i = state.price.length - 1; i >= 0; i--) {
      if ((state.price.length - i - 1) % 3 === 0 && price.length > 0)
        price = ' ' + price;
      price = state.price[i] + price;
    }

    state.items.push({
      id: state.items.length + 1,
      title: state.title,
      description: state.description,
      url: state.url,
      price: price,
    });
  },
  deleteItem: (state, id) => {
    state.items = state.items.filter((i) => i.id !== id);
  },
  changeField: (state, { field, value }) => {
    state[field] = value;
  },
};

export const actions = {
  addNewItem({ commit }) {
    commit('addItem');
    commit('changeField', { field: 'title', value: '' });
    commit('changeField', { field: 'description', value: '' });
    commit('changeField', { field: 'url', value: '' });
    commit('changeField', { field: 'price', value: '' });
  },
};

export const modules = {};
