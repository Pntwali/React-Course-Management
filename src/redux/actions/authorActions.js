import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function createAuthor(author) {
  return { type: types.CREATE_AUTHOR, author };
}
//usage of thunk functions.
export function loadAuthors() {
  return function (dispatch) {
    return authorApi.
      getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}

function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHOR_SUCCESS, authors };
}
