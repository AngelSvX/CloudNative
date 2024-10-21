import { Box, CircularProgress } from "@mui/material";

function Loading() {
  return (
    <div className="w-full h-[40vh] relative flex items-end justify-center">
      <Box>
        <CircularProgress size={'45px'}/>
      </Box>
    </div>
  );
}

export default Loading;
