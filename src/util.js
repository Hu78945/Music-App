import { v4 as uuidv4 } from "uuid";

export default function util() {
  return [
    {
      name: "Creater js",
      cov: "https://i.scdn.co/image/ab67616d0000b27336464bfa692b33ebc39730cd",
      artist: "jelo mediva",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21647",
      color: ["#FCA696", "#74385D"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Master js",
      cov: "https://i.scdn.co/image/ab67616d0000b27336464bfa692b33ebc39730cd",
      artist: "melo mediva",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21654",
      color: ["#FCA696", "#74385D"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "lena js",
      cov: "https://chillhop.com/wp-content/uploads/2021/06/23b2ff959731b56ea8545828b462311e8b1a2bcc-1024x1024.jpg",
      artist: "yellow mediva",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=20126",
      color: ["#3D2925", "#1B71C2"],
      id: uuidv4(),
      active: false,
    },
  ];
}
