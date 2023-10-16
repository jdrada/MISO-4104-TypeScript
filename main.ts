import { Aprendiz, NivelEducativo } from "./aprendiz";

export const ap = new Aprendiz(
  "Juan Carlos",
  "Ortiz Drada",
  "avatar.png",
  30,
  NivelEducativo.POSGRADO
);

console.log(ap);
