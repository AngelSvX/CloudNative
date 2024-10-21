import axios from "axios";
import { Character } from "../types/RickyFetch/Character";
import React from "react";
const baseURL: string = "https://rickandmortyapi.com/api/character";

type SetCharacters = React.Dispatch<React.SetStateAction<Character[]>>
type SetIsLoading = React.Dispatch<React.SetStateAction<boolean>>

export const RickyFetch = async ( setCharacter:SetCharacters, setIsLoading:SetIsLoading, page:number,) => {
  try {
    const response = await axios.get(`${baseURL}?page=${page}`);
    setCharacter(response.data.results)
  } catch (error) {
    console.error("Error al traer los datos: ", error);
    throw error;
  } finally{
    setIsLoading(false)
  }
};