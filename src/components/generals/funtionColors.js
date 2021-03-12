import { RFPercentage } from "react-native-responsive-fontsize";
import { colors, opacity } from "../../constants/Temas";

export const backgroundInput = (parametro) => {
  const border =
    parametro === colors.focusInput ? { borderWidth: 1 } : { borderWidth: 0 };

  return {
    backgroundColor: parametro,
    borderColor: opacity.borderInput,
    borderRadius: RFPercentage(1.6),
    ...border,
    height: RFPercentage(6),
    // marginLeft: RFPercentage(6.5),
    paddingHorizontal: RFPercentage(2.4),
    width: "77%",
  };
};

export const backgroundInput2 = (parametro) => {
  const border =
    parametro === colors.focusInput ? { borderWidth: 1 } : { borderWidth: 0 };

  return {
    backgroundColor: parametro,
    borderColor: opacity.borderInput,
    borderRadius: RFPercentage(1.6),
    // borderWidth: 1,
    ...border,
    height: RFPercentage(6),
    // marginLeft: RFPercentage(6.5),
    // marginBottom: RFPercentage(15),
    paddingHorizontal: RFPercentage(2.4),
    width: "77%",
  };
};

export const backgroundInputNewPassword = (parametro) => {
  const border =
    parametro === colors.focusInput ? { borderWidth: 1 } : { borderWidth: 0 };

  return {
    backgroundColor: parametro,
    borderColor: opacity.borderInput,
    borderRadius: RFPercentage(1.6),
    // borderWidth: 1,
    ...border,
    height: RFPercentage(6),
    // marginLeft: RFPercentage(6.5),
    // marginBottom: RFPercentage(15),
    paddingHorizontal: RFPercentage(2.4),
    width: "77%",
  };
};

export const backgroundInputConfirma = (parametro) => {
  const border =
    parametro === colors.focusInput ? { borderWidth: 1 } : { borderWidth: 0 };

  return {
    backgroundColor: parametro,
    borderColor: opacity.borderInput,
    borderRadius: RFPercentage(1.6),
    // borderWidth: 1,
    ...border,
    height: RFPercentage(6),
    // marginLeft: RFPercentage(6.5),
    // marginBottom: RFPercentage(25),
    paddingHorizontal: RFPercentage(2.4),
    width: "77%",
  };
};

export const backgroundBotonEmpecemos = (parametro) => {
  return {
    alignItems: "center",
    backgroundColor: parametro,
    borderRadius: 20,
    height: RFPercentage(6),
    justifyContent: "center",
    marginBottom: "15%",
    width: RFPercentage(30),
  };
};

export const colorEmpecemos = (parametro) => {
  return {
    color: parametro,
    fontSize: 18,
    fontWeight: "bold",
  };
};

export const userInput1 = (parametro) => {
  const border =
    parametro === colors.blanco ? { borderWidth: 1 } : { borderWidth: 0 };
  return {
    backgroundColor: parametro,
    borderColor: opacity.borderInput,
    borderRadius: 10,
    // borderWidth: 1,
    ...border,
    height: RFPercentage(6),
    marginLeft: RFPercentage(7),
    // marginBottom: RFPercentage(5),
    paddingHorizontal: RFPercentage(2.4),
    width: "77%",
  };
};

export const userInput2 = (parametro) => {
  const border =
    parametro === colors.blanco ? { borderWidth: 1 } : { borderWidth: 0 };
  return {
    backgroundColor: parametro,
    borderColor: opacity.borderInput,
    borderRadius: 10,
    ...border,
    height: RFPercentage(6),
    marginLeft: RFPercentage(7),
    // marginBottom: RFPercentage(5),
    paddingHorizontal: RFPercentage(2.4),
    width: "77%",
  };
};

export const userInput3 = (parametro) => {
  const border =
    parametro === colors.blanco ? { borderWidth: 1 } : { borderWidth: 0 };
  return {
    backgroundColor: parametro,
    borderColor: opacity.borderInput,
    borderRadius: 10,
    ...border,
    height: RFPercentage(6),
    marginLeft: RFPercentage(7),
    // marginBottom: RFPercentage(5),
    paddingHorizontal: RFPercentage(2.4),
    width: "77%",
  };
};
export const userInput4 = (parametro) => {
  const border =
    parametro === colors.blanco ? { borderWidth: 1 } : { borderWidth: 0 };
  return {
    backgroundColor: parametro,
    borderColor: opacity.borderInput,
    borderRadius: 10,
    ...border,
    height: RFPercentage(6),
    marginLeft: RFPercentage(7),
    // marginBottom: RFPercentage(5),
    paddingHorizontal: RFPercentage(2.4),
    width: "77%",
  };
};

export const userInput5 = (parametro) => {
  const border =
    parametro === colors.blanco ? { borderWidth: 1 } : { borderWidth: 0 };
  return {
    backgroundColor: parametro,
    borderColor: opacity.borderInput,
    borderRadius: 10,
    ...border,
    height: RFPercentage(6),
    marginLeft: RFPercentage(7),
    // marginBottom: RFPercentage(35),
    paddingHorizontal: RFPercentage(2.4),
    width: "77%",
  };
};

export const searchInput = (parametro) => {
  const border =
    parametro === colors.blanco ? { borderWidth: 1 } : { borderWidth: 0 };

  return {
    backgroundColor: parametro,
    borderColor: opacity.borderInput,
    borderRadius: 10,
    // borderWidth: 1,
    ...border,
    height: RFPercentage(6),
    marginLeft: RFPercentage(6.5),
    marginTop: RFPercentage(7),
    paddingHorizontal: RFPercentage(2.4),
    width: "77%",
  };
};
