import { colores } from "./Temas";

export const validacion1 = (checkList, setCheckList) => {
  if (checkList === true) {
    return setCheckList(false);
  } else {
    return setCheckList(true);
  }
};

export const validacion2 = (checkList) => {
  if (checkList === true) {
    return colores.fondoCheckList;
  } else {
    return "white";
  }
};
