import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const alertSuccessContent = (msg) => {
  MySwal.fire({
    title: "Success!",
    text: msg,
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

export const alertFailedContent = (errorMsg) => {
  MySwal.fire({
    title: "Oops!",
    text: errorMsg,
    icon: "error",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};
