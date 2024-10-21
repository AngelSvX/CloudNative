import React from 'react';
import { Character } from './Character';

type setPage = React.Dispatch<React.SetStateAction<number>>

export interface ContextType {
  characters: Character[];
  statusColor: (status: string) => string;
  isLoading: boolean;
  setPage: setPage;
  page: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  handleOpen: () => void
  handleClose: () => void
}