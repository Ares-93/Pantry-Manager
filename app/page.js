import { Box, Stack } from "@mui/material";

const items = [
  "tomato",
  "garlic",
  "potato ",
  "brocolli",
  "carrot",
  "tamarind",
  "onion",
  "ginger",
  "chilli",
  "cucumber",
];

export default function Home() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Stack width="800px" height="400px" spacing={2} overflow={"scroll"}>
        {items.map((item) => (
          <Box
            key={item}
            bgcolor="black"
            color="crimson"
            p={2}
            textAlign="center"
            fontWeight={700}
          >
            {item}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
