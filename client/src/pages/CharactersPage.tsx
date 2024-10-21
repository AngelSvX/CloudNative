import React, { useState } from "react";
import { useCharacter } from "../context/RickyContext";
import Loading from "../components/Loading";
import { PaginationCharacter } from "../components/CharactersPage/PaginationCharacter";
import { Box, Button, Modal } from "@mui/material";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Character } from "../types/RickyFetch/Character";

export const CharacterPage: React.FC = () => {
  const { characters, statusColor, isLoading } = useCharacter();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );

  const handleOpen = (character: Character) => {
    setSelectedCharacter(character);
  };

  const handleClose = () => {
    setSelectedCharacter(null);
  };

  if (isLoading) {
    return <Loading />;
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#1a1a1a",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="w-full h-screen bg-black">
      <ul className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 place-items-center gap-3 mt-10">
        {characters.map((character) => {
          return (
            <li
              className="bg-bgFetchCard bg-opacity-10 w-5/6 h-52 rounded-md flex flex-row"
              key={character.id}
            >
              <div className="w-2/5 h-full">
                <img
                  className="w-full h-full object-cover rounded-l-md"
                  src={character.image}
                  alt={character.name}
                />
              </div>
              <div className="w-3/5 h-full rounded-r-md pl-4 flex flex-col">
                <div className="w-full font-maven text-2xl font-bold opacity-30 mb-2 flex flex-row justify-between">
                  <div>{character.name}</div>
                  <div className="w-auto">
                    <Button
                      className="flex items-center justify-center"
                      onClick={() => handleOpen(character)}
                      endIcon={<OpenInFullIcon />}
                    ></Button>
                  </div>
                </div>
                <div className="w-full m-1 font-maven text-lg font-semibold flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full mr-2 ${statusColor(
                      character.status
                    )}`}
                  ></div>{" "}
                  <p>{`${character.status} - ${character.species}`}</p>
                </div>
                <div className="w-full m-1 font-maven text-lg font-semibold mb-4">
                  {character.gender}
                </div>
                <div className="w-full m-1">
                  <div className="text-xl font-maven font-semibold opacity-30">
                    Last seen on:{" "}
                  </div>
                  <div className="text-lg font-maven font-semibold">
                    {character.location.name}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="w-full flex items-center justify-center pt-6 pb-6">
        <PaginationCharacter />
      </div>
      {selectedCharacter && (
        <Modal open={!!selectedCharacter} onClose={handleClose}>
          <Box sx={style}>
            <div className="flex flex-col">
              <div className="w-full flex items-center justify-center">
                <img
                  className="w-full h-full object-cover rounded-l-md"
                  src={selectedCharacter.image}
                  alt={selectedCharacter.name}
                />
              </div>
              <div className="w-full h-full rounded-r-md flex flex-col">
                <div className="w-full font-maven text-2xl font-bold opacity-30 mb-2 flex flex-row justify-between">
                  <div>{selectedCharacter.name}</div>
                </div>
                <div className="w-full font-maven text-lg font-semibold flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full mr-2 ${statusColor(
                      selectedCharacter.status
                    )}`}
                  ></div>{" "}
                  <p>{`${selectedCharacter.status} - ${selectedCharacter.species}`}</p>
                </div>
                <div className="w-full font-maven text-lg font-semibold mb-4">
                  {selectedCharacter.gender}
                </div>
                <div className="w-full">
                  <div className="text-xl font-maven font-semibold opacity-30">
                    Last seen on:{" "}
                  </div>
                  <div className="text-lg font-maven font-semibold">
                    {selectedCharacter.location.name}
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
};
