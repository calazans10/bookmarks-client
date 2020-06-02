# Bookmarks Client

## Usage

1.  Clone this repository

        $ git clone git@github.com:calazans10/bookmarks-client.git

2.  Change directory to the application folder

        $ cd bookmarks-client

3.  Install the dependencies

        $ npm install

4.  Run the server

        $ npm start

5.  Using a browser, go to `http://localhost:5000` to load the initial page

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

## Contribute

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Submit a pull request

## License

MIT © [Jeferson Farias Calazans](http://calazans10.com)
