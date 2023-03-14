import axios from "axios";
import { httpRequest } from "../../httpRequests";

export const onChangeInputFile = (path: string, setState: any) => {
  return async (e) => {
    try {
      const formData = new FormData();
      const files = e.target.files;
      for (const file in files) {
        formData.append("image", files[file]);
      }
      const { data } = await axios.post(path, formData);
      setState(data);
    } catch (e) {
      alert("Ошибка при загрузке файла");
    }
  };
};

export const onSubmitForm = (state, path) => {
  return async (event: any) => {
    event.preventDefault();
    const formInfo = {
      mark: event.target[0].value,
      model: event.target[1].value,
      year: event.target[2].value,
      mode: event.target[3].value,
      volume: event.target[4].value,
      fuel: event.target[5].value,
      type: event.target[6].value,
      bodeType: event.target[7].value,
      box: event.target[8].value,
      product: event.target[9].value,
      imagesUrl: state,
      article: event.target[11].value,
      numberOfProduct: event.target[12].value,
      description: event.target[13].value,
      price: event.target[14].value,
      currency: event.target[15].value,
      state: event.target[16].value,
    };
    const request = await httpRequest(path, "POST", formInfo);
  };
};
