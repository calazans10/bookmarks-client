# Bookmarks Client

## Naming convention

- **Action Types**

  - API related

    ```javascript
    export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
    export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
    export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';
    ```

  - Others

    ```javascript
    export const LOADING_REQUEST = 'LOADING_REQUEST';
    export const LOADING_SHOW = 'LOADING_SHOW';
    export const LOADING_HIDE = 'LOADING_HIDE';
    export const USERNAME_CHANGE = 'USERNAME_CHANGE';
    ```

- **Action Creators**

  - API related

    ```javascript
    export const doRequestGetPosts = () => ({});
    export const doSuccesGetPosts = () => ({});
    export const doFailureGetPosts = () => ({});
    ```

  - Others

    ```javascript
    export const doRequestLogin = () => ({});
    export const doShowLogin = () => ({});
    export const doHideLogin = () => ({});
    export const doChangeusername = () => ({});
    ```

- **Sagas**

  ```javascript
  export function* handleChangeUsername() {}
  export function* handleRequestLogin() {}
  export function* handleRequestGetPosts() {}
  ```

- **Reducers**

  ```javascript
  const loadingReducer = (state = INITIAL_STATE, action) => {};
  const modalReducer = (state = INITIAL_STATE, action) => {};
  ```

  - Helpers

    ```javascript
    const applyShowLoading = (state, action) => ({});
    const applyChangeUsername = (state, action) => ({});
    ```

  - Combined reducers

    ```javascript
    const uiReducer = combineReducers({
      loading: loadingReducer,
      modal: modalReducer,
    });
    ```

- **Selectors**

  - Boolean

    ```javascript
    export const isLoadingVisible = ({ ui }) => ui.loading.isVisible;
    export const hasPermission = ({ auth }) => auth.user.hasPermission;
    ```

  - Others

    ```javascript
    export const getUsername = ({ auth }) => auth.user.username;
    ```

- **API**

  ```javascript
  export const requestGetPosts = () => {};
  export const requestCreatePost = payload => {};
  export const requestGetPost = postId => {};
  export const requestUpdatePost = (postId, payload) => {};
  export const requestDeletePost = postId => {};
  ```

- **mapDispatchToProps**

  ```javascript
  import { doRequestLogin } from '../actions/auth';
  import { doShowLoading } from '../actions/ui';

  const mapDispatchToProps = {
    onRequestLogin: doRequestLogin,
    onShowLoading: doShowLoading,
  };

  export default connect(
    null,
    mapDispatchToProps
  )(Home);
  ```
