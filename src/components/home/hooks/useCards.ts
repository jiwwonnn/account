import {getCards} from "@remote/card";
import {useQuery} from "react-query";

export const useCards = () => {
  return useQuery(['cards'], () => getCards(), {
    suspense: true
  })
}