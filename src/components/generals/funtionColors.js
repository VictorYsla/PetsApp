import { RFPercentage } from "react-native-responsive-fontsize";

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
    borderColor: "#c96b31",
    borderRadius: 20,
    borderWidth: 1,
    height: RFPercentage(5),
    marginLeft: RFPercentage(4),
    // marginBottom: RFPercentage(5),
    width: "85%",
  };
};

export const backgroundInput2 = (parametro) => {
  return {
    backgroundColor: parametro,
    borderColor: "#c96b31",
    borderRadius: 20,
    borderWidth: 1,
    height: RFPercentage(5),
    marginLeft: RFPercentage(4),
    // marginBottom: RFPercentage(15),
    width: "85%",
  };
};

export const backgroundInput3 = (parametro) => {
  return {
    backgroundColor: parametro,
    borderColor: "#c96b31",
    borderRadius: 20,
    borderWidth: 1,
    height: RFPercentage(5),
    marginLeft: RFPercentage(4),
    marginBottom: RFPercentage(15),
    width: "85%",
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
