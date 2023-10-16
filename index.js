import { addArt, getAllArt } from "./src/art.js";

await addArt({
  artist: "Van Gough",
  title: "Irises",
  media: "Oil",
});

await addArt({
  artist: "da Vinci",
  title: "Last Supper",
  media: "Oil",
});

await getAllArt();
