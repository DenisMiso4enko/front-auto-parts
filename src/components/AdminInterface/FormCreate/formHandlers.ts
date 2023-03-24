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
