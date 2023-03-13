import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { RootState } from "../../store";
import axios from "axios";
import "./FormCreate.scss";
import { useState } from "react";

export function FormCreate() {
  // const { login } = useSelector((state: RootState) => state.user);
  const [images, setImages] = useState([]);

  const handleChangeFile = async (e) => {
    try {
      const formData = new FormData();
      const files = e.target.files;
      for (const file in files) {
        formData.append("image", files[file]);
      }
      const { data } = await axios.post(
        "http://localhost:8888/upload",
        formData
      );
      setImages(data);
    } catch (e) {
      alert("ошиюка при загрузка файла");
    }
  };

  const handlerOnCreatePost = async (event: any) => {
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
      imagesUrl: images,
      article: event.target[11].value,
      numberOfProduct: event.target[12].value,
      description: event.target[13].value,
      price: event.target[14].value,
      currency: event.target[15].value,
      state: event.target[16].value,
    };
    const { data } = await axios.post(
      "http://localhost:8888/admin/createProduct",
      formInfo
    );
  };
  // if (!login) return <h1>Авторизуйтесь!</h1>;
  return (
    <div className="form-wrapper">
      <Form onSubmit={handlerOnCreatePost}>
        <Form.Group
          as={Row}
          className="mb-6 custom-group"
          controlId="formCreate"
        >
          <Form.Label column sm={2}>
            Марка*
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Введите марку авто"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
          controlId="formCreate"
        >
          <Form.Label column sm={2}>
            Модель*
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Введите модель авто"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
          controlId="formCreate"
        >
          <Form.Label column sm={2}>
            Год выпуска*
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Введите год выпуска авто"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
          controlId="formCreate"
        >
          <Form.Label column sm={2}>
            Модификация
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Введите модификацию авто" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
          controlId="formCreate"
        >
          <Form.Label column sm={2}>
            Объём (л)
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Введите объём двигателя" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
          controlId="formCreate"
        >
          <Form.Label htmlFor="typeDescription" column sm={2}>
            Топливо
          </Form.Label>
          <Col sm={10} className="custom-block">
            <Form.Select aria-label="Default select example">
              <option value="gas">Бензин</option>
              <option value="diesel">Дизель</option>
            </Form.Select>
            <Form.Text id="typeDescription" muted>
              Выберите тип топлива
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
          controlId="formCreate"
        >
          <Form.Label htmlFor="typeDescription" column sm={2}>
            Тип впуска
          </Form.Label>
          <Col sm={10} className="custom-block">
            <Form.Select aria-label="Default select example">
              <option value="atmo">Атмосферный</option>
              <option value="turbo">Турбированный</option>
            </Form.Select>
            <Form.Text id="typeDescription" muted>
              Выберите тип впрыска двигателя
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
          controlId="formCreate"
        >
          <Form.Label column sm={2}>
            Тип кузова
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Введите тип кузова"
              multiple
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
          controlId="formCreate"
        >
          <Form.Label htmlFor="typeDescription" column sm={2}>
            КПП
          </Form.Label>
          <Col sm={10} className="custom-block">
            <Form.Select aria-label="Default select example">
              <option value="mechanic">Механическая</option>
              <option value="avtomatic">Автоматическая</option>
              <option value="robot">Роботизированная</option>
            </Form.Select>
            <Form.Text id="typeDescription" muted>
              Выберите тип КПП
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
          controlId="formCreate"
        >
          <Form.Label column sm={2}>
            Запчасть*
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Введите название запчасти"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
          controlId="formCreate"
        >
          <Form.Label column sm={2}>
            Фотографии
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="file"
              placeholder="Выберите фото"
              multiple
              onChange={handleChangeFile}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
          controlId="formCreate"
        >
          <Form.Label column sm={2}>
            Артикул
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Введите артикул запчасти" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
          controlId="formCreate"
        >
          <Form.Label column sm={2}>
            Номер
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Введите номер запчасти" />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
          controlId="formCreate"
        >
          <Form.Label column sm={2}>
            Описание
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="textarea"
              placeholder="Напишите описание запчасти"
              style={{ minHeight: "100px" }}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
          controlId="formCreate"
        >
          <Form.Label column sm={2}>
            Цена
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Введите цену запчасти" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 custom-group">
          <Form.Label as="legend" column sm={2}>
            Валюта
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="BYN"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              value="byn"
            />
            <Form.Check
              type="radio"
              label="USD"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
              value="usd"
            />
            <Form.Check
              type="radio"
              label="RUB"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
              value="rub"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 custom-group">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Создать обьявление</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
