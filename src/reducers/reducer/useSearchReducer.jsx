import { ACTION } from "../../type/actionType";
import { user_search } from "../../type/initState";
import dataFormat from "../../util/dataFormat";

const initState = { 
  search_keywords: user_search.userName,
  game_tag: user_search.userTag,
};

const searchUser = (state = initState, action) => {
  switch (action.type) {
    case ACTION.getUser : {
      const [Name, Tag] = dataFormat(action.payload)

      return {
        ...state,
        search_keywords: Name,
        game_tag: Tag
      }
    }

    default: 
      return state;
  }
};

export default searchUser;
