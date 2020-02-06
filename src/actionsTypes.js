import { func } from "prop-types";

/**
 * 
 * action types
 * **/

export const FILTER_HEREOS = 'FILTER_HEREOS';


/***
 * 
 * 
 * 
 * action creators
 */


 export function setFilter(filterBy){
    return({
        type: FILTER_HEREOS,
        payload: filterBy
    })
 }