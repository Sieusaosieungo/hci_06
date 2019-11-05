import * as Types from "./../constants/ActionTypes";
import callApi from "./../utils/apiCaller";

export const showModal = payload => {
  return {
    type: Types.SHOW_MODAL,
    payload
  };
};

export const hideModal = payload => {
  return {
    type: Types.HIDE_MODAL,
    payload
  };
};

export const actFetchPostsRequest = () => {
  return dispatch => {
    return callApi("Posts", "GET", null).then(res => {
      dispatch(actFetchPosts(res.data));
    });
  };
};

export const actFetchPosts = POSTs => {
  return {
    type: Types.FETCH_POSTS,
    POSTs
  };
};

export const actDeletePPostRequest = id => {
  return dispatch => {
    return callApi(`Posts/${id}`, "DELETE", null).then(res => {
      dispatch(actDeletePost(id));
    });
  };
};

export const actDeletePost = id => {
  return {
    type: Types.DELETE_POST,
    id
  };
};

export const actAddPPostRequest = POST => {
  return dispatch => {
    return callApi("Posts", "POST", POST).then(res => {
      dispatch(actAddPost(res.data));
    });
  };
};

export const actAddPost = Post => {
  return {
    type: Types.ADD_POST,
    Post
  };
};

export const actGetPostRequest = id => {
  return dispatch => {
    return callApi(`Posts/${id}`, "GET", null).then(res => {
      dispatch(actGetPost(res.data));
    });
  };
};

export const actGetPost = Post => {
  return {
    type: Types.EDIT_POST,
    Post
  };
};

export const actUpdatePostRequest = Post => {
  return dispatch => {
    return callApi(`Posts/${Post.id}`, "PUT", Post).then(res => {
      dispatch(actUpdatePost(res.data));
    });
  };
};

export const actUpdatePost = Post => {
  return {
    type: Types.UPDATE_POST,
    Post
  };
};
