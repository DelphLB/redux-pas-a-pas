// 31) Liaison action et reducer en routage
import {ADD_TODO, TOGGLE_TODO} from "../actionTypes";

// 31) initialisation du store
const initialState = {
  allIds: [],
  byIds: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    // 38) fonction reducer pour ajouter une todo et modifier le store actuel par le store après l'ajout
    case ADD_TODO: {
      const {id, content} = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    }
    // 32) fonction reducer toggle qui avec récupérer toutes les todos
    // et modifier une todo en particulier pour la passer en complet ou non
    case TOGGLE_TODO: {
      const {id} = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    default:
      return state;
  }
}
