export const state = () => ({
  items: [
    {
      id: 0,
      title: 'ASUS ноутбук',
      description:
        'Быстрый ноутбук марки ASUS. В коробке и с полной комплектацией.',
      url: 'https://www.bhphotovideo.com/images/images2500x2500/asus_gl503vd_db74_i7_7700hq_2_8ghz_16gb_1tb_1356938.jpg',
      price: 53999,
    },
    {
      id: 1,
      title: 'iPhone',
      description:
        'Крутой телефон с самой новой версией iOS. Коробки, к сожалению, нет, но устройство в отличном состоянии. Зарядка в комплекте.',
      url: 'https://cell4pets.com/wp-content/uploads/2020/11/20201111_161248_resized.jpg',
      price: 49000,
    },
    {
      id: 2,
      title: 'Кошка',
      description: 'Милая кошка. Очень послушная и смешная.',
      url: 'https://3.bp.blogspot.com/--3DlxklEVeQ/UDB3EBzbhpI/AAAAAAAAPfg/VGdEr7cTiPg/s1600/Cute+Kitten+6.jpg',
      price: 1000,
    },
    {
      id: 3,
      title: 'Кубик Рубика 3х3',
      description: '',
      url: "https://3.bp.blogspot.com/-GSgR09KVGns/U8Gb6tFhP0I/AAAAAAAABFI/pY6o4leFvdQ/s1600/Rubik's+Cube+scrambled.jpg",
      price: 1490,
    },
    {
      id: 4,
      title: 'Сумка',
      description: 'Красивая сумка',
      url: 'https://www.bragmybag.com/wp-content/uploads/2015/02/Loewe-Puzzle-Bag-blue.jpg',
      price: 10000,
    },
  ],
  nextId: 5,
  sorting: 'name',
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
  reloadState: (state) => {
    let tempState = JSON.parse(localStorage.getItem('store'));

    tempState.title = '';
    tempState.description = '';
    tempState.url = '';
    tempState.price = '';

    Object.assign(state, tempState);
  },
  addItem: (state) => {
    state.items.push({
      id: state.nextId,
      title: state.title,
      description: state.description,
      url: state.url,
      price: Number(state.price),
    });
    // No need to update local storage, because it will be updated with the nextId mutation
  },
  deleteItem: (state, id) => {
    state.items = state.items.filter((i) => i.id !== id);
    localStorage.setItem('store', JSON.stringify(state));
  },
  sortItems: (state) => {
    let sortFunc;

    switch (state.sorting) {
      case 'name':
        sortFunc = (a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        };
        break;
      case 'pricemin':
        sortFunc = (a, b) => {
          if (a.price < b.price) return -1;
          if (a.price > b.price) return 1;
          return 0;
        };
        break;
      case 'pricemax':
        sortFunc = (a, b) => {
          if (a.price > b.price) return -1;
          if (a.price < b.price) return 1;
          return 0;
        };
        break;
    }

    state.items = state.items.sort(sortFunc);

    localStorage.setItem('store', JSON.stringify(state));
  },
  incrementNextId: (state) => {
    state.nextId = state.nextId + 1;
    localStorage.setItem('store', JSON.stringify(state));
  },
  changeField: (state, { field, value }) => {
    state[field] = value;
  },
};

export const actions = {
  addNewItem({ commit }) {
    commit('addItem');
    commit('incrementNextId');
    commit('sortItems');
    commit('changeField', { field: 'title', value: '' });
    commit('changeField', { field: 'description', value: '' });
    commit('changeField', { field: 'url', value: '' });
    commit('changeField', { field: 'price', value: '' });
  },
  changeItemSorting({ commit }, sorting) {
    commit('changeField', { field: 'sorting', value: sorting });
    commit('sortItems');
  },
};

export const modules = {};
