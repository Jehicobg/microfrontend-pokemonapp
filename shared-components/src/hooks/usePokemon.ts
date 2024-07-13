import { useEffect, useReducer } from "react";
import axios from "axios";
import { urls_api } from "../config/apiConfig";

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

interface State {
  data: Pokemon | null;
  loading: boolean;
  error: string | null;
}

const ACTIONS = {
  API_REQUEST: "api-request",
  FETCH_DATA: "fetch-data",
  ERROR: "error",
};

const initialState: State = {
  data: null,
  loading: true,
  error: null,
};

const reducer = (
  state: State,
  action: { type: string; payload?: any }
): State => {
  switch (action.type) {
    case ACTIONS.API_REQUEST:
      return { ...state, data: null, loading: true, error: null };
    case ACTIONS.FETCH_DATA:
      return { ...state, data: action.payload, loading: false, error: null };
    case ACTIONS.ERROR:
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};

const usePokemon = (pokemonId: number): State => {
  const apiUrl = `${urls_api.pokemon.base_url}/${pokemonId}`;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.API_REQUEST });
    axios
      .get<Pokemon>(apiUrl)
      .then((res) => {
        dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: ACTIONS.ERROR, payload: error.message });
      });
  }, [pokemonId]);

  return state;
};

export default usePokemon;
