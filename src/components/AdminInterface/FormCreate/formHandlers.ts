import axios from "axios";
import { httpRequest } from "../../../httpRequests";

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

export const onSubmitForm = (state: any, path: string, nav: any) => {
  return async (event: any) => {
    event.preventDefault()
    try {
      const checkRadio = (event: any) => {
      const checkedElement = [event.target[16], event.target[17], event.target[18]].filter(el => el.checked)
      if (checkedElement) return checkedElement[0].value
      return 'BYN'
      };
      const formInfo = {
        mark: event.target[0].value,
        model: event.target[1].value,
        year: event.target[2].value,
        mode: event.target[3].value,
        volume: event.target[4].value,
        fuel: event.target[5].value,
        type: event.target[6].value,
        bodyType: event.target[7].value,
        box: event.target[8].value,
        product: event.target[9].value,
        state: event.target[10].value,
        imagesUrl: state,
        article: event.target[12].value,
        numberOfProduct: event.target[13].value,
        description: event.target[14].value,
        price: event.target[15].value,
        currency: checkRadio(event),
      };

      const response = await httpRequest(path, "POST", formInfo);
      if (response.ok) nav("/admin/dashboard");

    } catch (e) {
      alert(e.message)
    };
  };
};

export const onUpdateProduct = (state: any, path: string, nav: any) => {
  return async (event: any) => {
    event.preventDefault()
    try {
      const checkRadio = (event: any) => {
      const checkedElement = [event.target[16], event.target[17], event.target[18]].filter(el => el.checked)
      if (checkedElement) return checkedElement[0].value
      return 'BYN'
      };
      const formInfo = {
        mark: event.target[0].value,
        model: event.target[1].value,
        year: event.target[2].value,
        mode: event.target[3].value,
        volume: event.target[4].value,
        fuel: event.target[5].value,
        type: event.target[6].value,
        bodyType: event.target[7].value,
        box: event.target[8].value,
        product: event.target[9].value,
        state: event.target[10].value,
        imagesUrl: state,
        article: event.target[12].value,
        numberOfProduct: event.target[13].value,
        description: event.target[14].value,
        price: event.target[15].value,
        currency: checkRadio(event),
      };

      const responce = await httpRequest(path, "PATCH", formInfo);
      if (responce.ok) nav("/admin/dashboard");

    } catch (e) {
      alert(e.message)
    };
  };
};