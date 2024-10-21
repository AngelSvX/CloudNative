import { Button, Stack } from "@mui/material";
import React from "react";
import { useCharacter } from "../../context/RickyContext";

export const PaginationCharacter: React.FC = () => {

  const { page, handleNextPage, handlePrevPage } = useCharacter()

  return (
    <div className="w-1/2 rounded-2xl p-4">
      <Stack direction={"row"} className="flex items-center justify-evenly">
        <Button variant="outlined" size="large" onClick={handlePrevPage}> Back </Button>
        <p className="font-maven text-xl font-bold border-[1px] rounded-full border-blue-400 w-10 h-10 flex items-center justify-center ease-in-out duration-300 hover:bg-blue-300 hover:bg-opacity-20 select-none text-blue-300">{page}</p>
        <Button variant="outlined" size="large" onClick={handleNextPage}> Next </Button>
      </Stack>
    </div>
  );
};
