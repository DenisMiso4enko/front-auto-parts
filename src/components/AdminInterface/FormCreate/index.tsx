import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { AppDispatch, RootState } from "../../../store";
import { fetchGetMe } from "../../../store/slices/userSlice";
import { PATHDOMAIN } from "../../../constants";
import { onChangeInputFile } from "./formHandlers";
import "./index.scss";
import { httpRequest } from "../../../httpRequests";

export function FormCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchGetMe());
  }, []);

  const { userId } = useSelector((state: RootState) => state.user);
  const [images, setImages] = useState([]);

  const handlerDeleteImage = (img) => {
    //
  };

  const handleChangeFile = onChangeInputFile(`${PATHDOMAIN}/upload`, setImages);

  // me
  const { id } = useParams();

  const { autos, options } = useSelector((state: RootState) => state.settings);
  const [mark, setMark] = useState("");
  const [modelVal, setModelVal] = useState("");
  const [yearVal, setYearVal] = useState("");
  const [volumeVal, setVolumeVal] = useState("");
  const [fuelVal, setFuelVal] = useState("");
  const [typeVal, setTypeVal] = useState("");
  const [bodyTypeVal, setBodyTypeVal] = useState("");
  const [boxValue, setBoxValue] = useState("");
  const [productVal, setProductVal] = useState("");
  const [statVal, setStateVal] = useState("");
  const [articleVal, setArticleVal] = useState("");
  const [numberVal, setNumberVal] = useState("");
  const [descVal, setDescVal] = useState("");
  const [priceVal, setPriceVal] = useState("");
  const [currencyVal, setCurrencyVal] = useState("");

  const [models, setModels] = useState([]);

  const marks = autos?.map((el) => el.mark);
  const years = options?.map((el) => el.years);
  const typeEngine = options?.map((el) => el.type);
  const bodyType = options?.map((el) => el.bodyType);
  const currency = ["BYN", "USD", "RUB"];

  const modelsUpdate = autos?.find((el) => el.mark === mark);

  const handlerOnChangeMarks = (e: any) => {
    // не правильно работает при изменении туда сюда
    const mark = e.target.value;
    setMark(mark);
    const { models } = autos?.find((el) => el.mark === mark);
    setModels(models);
  };

  const handlerOnCreatePost = async (e: any) => {
    e.preventDefault();
    try {
      const formInfo = {
        mark: mark,
        model: modelVal,
        year: yearVal,
        volume: volumeVal,
        fuel: fuelVal,
        type: typeVal,
        bodyType: bodyTypeVal,
        box: boxValue,
        product: productVal,
        state: statVal,
        imagesUrl: images,
        article: articleVal,
        numberOfProduct: numberVal,
        description: descVal,
        price: priceVal,
        currency: currencyVal,
      };

      const response = await httpRequest(
        `${PATHDOMAIN}/admin/createProduct`,
        "POST",
        formInfo
      );
      if (response.ok) navigate("/admin/dashboard");
    } catch (e) {
      console.log(e.message());
    }
  };

  const handlerOnUpdatePost = async (e) => {
    e.preventDefault();
    try {
      const formInfo = {
        mark: mark,
        model: modelVal,
        year: yearVal,
        volume: volumeVal,
        fuel: fuelVal,
        type: typeVal,
        bodyType: bodyTypeVal,
        box: boxValue,
        product: productVal,
        state: statVal,
        imagesUrl: images,
        article: articleVal,
        numberOfProduct: numberVal,
        description: descVal,
        price: priceVal,
        currency: currencyVal,
      };

      const response = await httpRequest(
        `${PATHDOMAIN}/admin/updateProduct/${id}`,
        "PATCH",
        formInfo
      );
      if (response.ok) navigate("/admin/dashboard");
    } catch (e) {
      console.log(e.message());
    }
  };

  const getOnePost = async (id) => {
    try {
      const request = await httpRequest(
        `${PATHDOMAIN}/admin/getOne/${id}`,
        "GET"
      );
      const post = await request.json();
      setMark(post.mark);
      setModelVal(post.model);
      setYearVal(post.year);
      setPriceVal(post.price);
      setDescVal(post.description);
      setArticleVal(post.article);
      setBoxValue(post.box);
      setProductVal(post.product);
      setImages(post.imagesUrl);
      setNumberVal(post.numberOfProduct);
      setStateVal(post.state);
      setCurrencyVal(post.currency);
      setVolumeVal(post.volume);
    } catch (e) {
      console.log(e.message());
    }
  };

  useEffect(() => {
    if (id) {
      getOnePost(id);
    }
  }, []);

  if (!userId) return <h1>Авторизуйтесь!</h1>;
  return (
    <div className="form-wrapper">
      <h2>{id ? "Редактирование обьявления" : "Создание нового обьявления"}</h2>
      <Form
        className="form-create"
        onSubmit={id ? handlerOnUpdatePost : handlerOnCreatePost}
      >
        <Form.Group as={Row} className="mb-3 custom-group">
          <Form.Label htmlFor="typeDescription" column sm={2}>
            Марка*
          </Form.Label>
          <Col sm={10} className="custom-block">
            <Form.Select
              aria-label="Default select example"
              value={mark}
              required={true}
              onChange={handlerOnChangeMarks}
            >
              <option value="Марка">Марка</option>
              {marks?.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 custom-group">
          <Form.Label htmlFor="typeDescription" column sm={2}>
            Модель*
          </Form.Label>
          <Col sm={10} className="custom-block">
            <Form.Select
              aria-label="Default select example"
              value={modelVal}
              required={true}
              onChange={(e) => setModelVal(e.target.value)}
            >
              <option value="Модель">Модель</option>
              {id
                ? modelsUpdate?.models?.map((el) => (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  ))
                : models?.map((el) => (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  ))}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 custom-group">
          <Form.Label htmlFor="typeDescription" column sm={2}>
            Год выпуска*
          </Form.Label>
          <Col sm={10} className="custom-block">
            <Form.Select
              aria-label="Default select example"
              value={yearVal}
              required={true}
              onChange={(e) => setYearVal(e.target.value)}
            >
              <option value="Год">Год</option>
              {years &&
                years[0].map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-6 custom-group">
          <Form.Label column sm={2}>
            Объём (л)
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              defaultValue={volumeVal}
              value={volumeVal}
              type="text"
              placeholder="1.1"
              required={false}
              onChange={(e) => setVolumeVal(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 custom-group">
          <Form.Label htmlFor="typeDescription" column sm={2}>
            Топливо
          </Form.Label>
          <Col sm={10} className="custom-block">
            <Form.Select
              aria-label="Default select example"
              defaultValue={fuelVal}
              value={fuelVal}
              onChange={(e) => setFuelVal(e.target.value)}
            >
              <option value="Топливо">Топливо</option>
              <option value="Бензин">Бензин</option>
              <option value="Дизель">Дизель</option>
            </Form.Select>
            <Form.Text id="typeDescription" muted>
              Выберите тип топлива
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 custom-group">
          <Form.Label htmlFor="typeDescription" column sm={2}>
            Тип
          </Form.Label>
          <Col sm={10} className="custom-block">
            <Form.Select
              aria-label="Default select example"
              value={typeVal}
              onChange={(e) => setTypeVal(e.target.value)}
            >
              <option value="Тип">Тип двигателя</option>
              {typeEngine &&
                typeEngine[0].map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 custom-group">
          <Form.Label htmlFor="typeDescription" column sm={2}>
            Тип кузова
          </Form.Label>
          <Col sm={10} className="custom-block">
            <Form.Select
              aria-label="Default select example"
              value={bodyTypeVal}
              required={false}
              onChange={(e) => setBodyTypeVal(e.target.value)}
            >
              <option value="тип кузова">Тип кузова</option>
              {bodyType &&
                bodyType[0].map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 custom-group">
          <Form.Label htmlFor="typeDescription" column sm={2}>
            КПП
          </Form.Label>
          <Col sm={10} className="custom-block">
            <Form.Select
              aria-label="Default select example"
              defaultValue={boxValue}
              value={boxValue}
              onChange={(e) => setBoxValue(e.target.value)}
            >
              <option value="Коробка">Коробка</option>
              <option value="АКПП">АКПП</option>
              <option value="МКПП">МКПП</option>
            </Form.Select>
            <Form.Text id="typeDescription" muted>
              Выберите тип КПП
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-6 custom-group">
          <Form.Label column sm={2}>
            Запчасть*
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              defaultValue={productVal}
              value={productVal}
              type="text"
              placeholder="Введите название запчасти"
              required={true}
              onChange={(e) => setProductVal(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 custom-group">
          <Form.Label htmlFor="typeDescription" column sm={2}>
            Состояние
          </Form.Label>
          <Col sm={10} className="custom-block">
            <Form.Select
              aria-label="Default select example"
              value={statVal}
              defaultValue={statVal}
              onChange={(e) => setStateVal(e.target.value)}
            >
              <option value="Состояние">Состояние</option>
              <option value="Новое">Новое</option>
              <option value="Б/У">Б/У</option>
            </Form.Select>
            <Form.Text id="typeDescription" muted>
              Информация о состоянии запчасти
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3 custom-group">
          <Form.Label column sm={2}>
            Фотографии
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="file"
              placeholder="Выберите фото"
              multiple={true}
              onChange={handleChangeFile}
            />
            <Form.Text id="typeDescription" muted>
              <div className="image-preview">
                {images &&
                  images.map((img, i) => (
                    <>
                      {/*<button onClick={() => handlerDeleteImage(img)}>X</button>*/}
                      <img
                        key={i}
                        className="image-preview__item"
                        src={PATHDOMAIN + img}
                        alt="uploaded"
                      />
                    </>
                  ))}
              </div>
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-6 custom-group">
          <Form.Label column sm={2}>
            Артикул
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              defaultValue={articleVal}
              value={articleVal}
              type="text"
              placeholder="Введите артикул запчасти"
              required={false}
              onChange={(e) => setArticleVal(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-6 custom-group">
          <Form.Label column sm={2}>
            Номер
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              defaultValue={numberVal}
              value={numberVal}
              type="text"
              placeholder="Введите номер запчасти"
              required={false}
              onChange={(e) => setNumberVal(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 custom-group">
          <Form.Label column sm={2}>
            Описание
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              defaultValue={descVal}
              value={descVal}
              onChange={(e) => setDescVal(e.target.value)}
              type="textarea"
              placeholder="Напишите описание запчасти"
              style={{ minHeight: "100px" }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-6 custom-group">
          <Form.Label column sm={2}>
            Цена
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              defaultValue={priceVal}
              value={priceVal}
              onChange={(e) => setPriceVal(e.target.value)}
              type="text"
              placeholder="Введите цену запчасти"
              required={false}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 custom-group">
          <Form.Label htmlFor="typeDescription" column sm={2}>
            Валюта
          </Form.Label>
          <Col sm={10} className="custom-block">
            <Form.Select
              defaultValue={currencyVal}
              aria-label="Default select example"
              value={currencyVal}
              required={true}
              onChange={(e) => setCurrencyVal(e.target.value)}
            >
              <option value="Валюта">Валюта</option>
              {currency?.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 custom-group">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">
              {id ? "Сохранить изменения" : "Добавить обьявление"}
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
