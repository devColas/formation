import {createStore, combineReducers} from 'redux';
import MainScreen from '../components/MainScreen/MainScreen';

const navInitialState = {
  screen: null,
};
const productsInitialState = {
  products: [],
  selectedProduct: {title: '', price: 0, img: '', description: ''},
};
function productsReducer(state = productsInitialState, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {...state, products: [...state.products, action.value]};
    case 'ADD_PRODUCTS':
      return {...state, products: action.values};
    case 'INIT_PRODUCTS_LIST':
      // pour test le fetch :
      //fetch('http://localhost:775/products').then(resp=>resp.json()).then(arr=>console.log(arr ));
      return fetch('http://desorbaix.alexandre.free.fr/phpRest/products/')
        .then(resp => resp.json())
        .then(arr => {
          console.log(arr);
          // a ne pas faire, il vaut mieux avoir un middleware pour cette étape
          store.dispatch({type: 'ADD_PRODUCTS', values: arr});
        });
      // l'appel precedent est asynchrone, en attendant la réponse on retourne le state passé en argument du switch
      return state;

    case 'SAVE_NEW_CURRENT_PRODUCT':
      return {
        ...state,
        products: [...state.products, state.selectedProduct],
        selectedProduct: productsInitialState.selectedProduct,
      };
    default:
      return state;
  }
}

const navReducer = (state = navInitialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_SCREEN':
      return {...state, screen: action.value};
    case 'GO_HOME':
      return {...state, screen: <MainScreen />};
    default:
      return state;
  }
};

/*
on ajoute au store un produit mais l'état reste uniquement sur le store et il n' y a pas de publish de l'info vers les interesse
let state=productsReducer(undefined, 
    {type:'ADD_PRODUCT' , value:{title:'Kouign amann', price:3.5, img:'http://www.ideemiam.com/upload/images/article/768x400/img_2262.jpg', description:'xx x x x xxx'}}
    );

console.log(state);

state=productsReducer(undefined, 
    {type:'ADD_PRODUCT' , value:{title:'granite triskel', price:5.5, img:'https://www.patisseriebretonne.fr/Files/119625/Img/08/Triskell.jpg', description:'xxxxx x x xxxx'}}
    );

console.log(state);
*/

// le store permet de m'abonner aux changements via la commande subscribe
// on combine les reducers dans le même store
const store = createStore(
  combineReducers({
    stock: productsReducer,
    navigation: navReducer,
  }),
);
export default store;

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'ADD_PRODUCT',
  value: {
    title: 'Kouign amann',
    price: 3.5,
    img: 'http://www.ideemiam.com/upload/images/article/768x400/img_2262.jpg',
    description: 'xx x x x xxx',
  },
});
