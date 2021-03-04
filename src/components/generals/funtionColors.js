import { RFPercentage } from "react-native-responsive-fontsize";
import { colors } from "../../constants/Temas";

// export const backgroundInput = (boolInput, contraseñaInput) => {
//   if (boolInput === true || contraseñaInput !== "") {
//     return {
//       backgroundColor: "white",
//       borderRadius: 10,
//       borderColor: "rgb(252, 234, 224)",
//       borderWidth: 2,
//       // height: RFPercentage(5),
//       flex: 1,
//       marginVertical: RFPercentage(2),
//       width: "90%",
//     };
//   } else {
//     return {
//       backgroundColor: "rgb(252, 234, 224)",
//       borderRadius: 10,
//       borderColor: "rgb(252, 234, 224)",
//       borderWidth: 2,
//       // height: RFPercentage(5),
//       flex: 1,
//       marginVertical: RFPercentage(2),
//       width: "90%",
//     };
//   }
// };
export const backgroundInput = (parametro) => {
  return {
    backgroundColor: parametro,
    borderColor: colors.borderInput,
    borderRadius: 10,
    borderWidth: 1,
    height: RFPercentage(6),
    marginLeft: RFPercentage(6.5),
    // marginBottom: RFPercentage(5),
    paddingHorizontal: 15,
    width: "77%",
  };
};

export const backgroundInput2 = (parametro) => {
  return {
    backgroundColor: parametro,
    borderColor: colors.borderInput,
    borderRadius: 10,
    borderWidth: 1,
    height: RFPercentage(6),
    marginLeft: RFPercentage(6.5),
    marginBottom: RFPercentage(15),
    paddingHorizontal: 15,
    width: "77%",
  };
};

export const backgroundInput3 = (parametro) => {
  return {
    backgroundColor: parametro,
    borderColor: colors.borderInput,
    borderRadius: 10,
    borderWidth: 1,
    height: RFPercentage(6),
    marginLeft: RFPercentage(6.5),
    marginBottom: RFPercentage(15),
    paddingHorizontal: 15,
    width: "77%",
  };
};

export const backgroundInputNo = (parametro) => {
  return {
    backgroundColor: parametro,
    borderColor: colors.borderInput,
    borderRadius: 10,
    borderWidth: 1,
    height: RFPercentage(6),
    marginLeft: RFPercentage(6.5),
    // marginBottom: RFPercentage(15),
    paddingHorizontal: 15,
    width: "77%",
  };
};

export const backgroundInputConfirma = (parametro) => {
  return {
    backgroundColor: parametro,
    borderColor: colors.borderInput,
    borderRadius: 10,
    borderWidth: 1,
    height: RFPercentage(6),
    marginLeft: RFPercentage(6.5),
    marginBottom: RFPercentage(25),
    paddingHorizontal: 15,
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
