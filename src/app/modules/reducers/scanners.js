import * as types from "../types";

const initialState = {};

const scanners = (state = initialState, action) => {
  switch (action.type) {
    case types.NETSTAT_FETCHED:
      return {...state, netstat: action.payload};

    case types.IFSTAT_FETCHED:
      return {...state, ifstat: action.payload};

    case types.NETWORK_COMMON_INFO_FETCHED:
      return {...state, network_common_info: action.payload};

    case types.PACKETS_INFO_FETCHED:
      return {...state, packets_info: action.payload};

    default:
      return state;
  }
};

export default scanners;