import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { AppDispatch, RootState } from "../../../store";
import { fetchGetMe } from "../../../store/slices/userSlice";
import { PATHDOMAIN } from "../../../constants";
import { onChangeInputFile, onSubmitForm } from "./formHandlers";
import { formFields } from "./formFields";
import { clearEditId, clearEditProduct } from "../../../store/slices/productSlice";
import "./index.scss";

export function FormCreate() {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchGetMe())
    return ( () => {
      dispatch(clearEditId(''))
      dispatch(clearEditProduct(null))
    }
    )
  }, [])

  const { editId, editProduct } = useSelector(
    (state: RootState) => state.products
  );
  console.log(editProduct, 'PRODUCT')
  const { userId } = useSelector((state: RootState) => state.user);
  const [images, setImages] = useState([]);

  //onChangeInputFile(path: string, setState)
  const handleChangeFile = onChangeInputFile(`${PATHDOMAIN}upload`, setImages)
  // onSubmitForm(state, path: string)
  const handlerOnCreatePost = () => {
    onSubmitForm(images, `${PATHDOMAIN}admin/createProduct`, navigate)
  }

  if (!userId) return <h1>Авторизуйтесь!</h1>;
  return (
    <div className="form-wrapper">
      <h2>{editId ? 'Редактирование обьявления' : 'Создание нового обьявления'}</h2>
      <Form className='form-create' onSubmit={handlerOnCreatePost}>
        <Form.Group
          as={Row}
          className="mb-6 custom-group"
        >
          <Form.Label column sm={2}>
            Марка*
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder='Введите марку авто'
              required={true}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-6 custom-group"
        >
          <Form.Label column sm={2}>
            Модель*
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder='Введите модель авто'
              required={true}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-6 custom-group"
        >
          <Form.Label column sm={2}>
            Год выпуска*
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder='Введите год выпуска авто'
              required={true}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-6 custom-group"
        >
          <Form.Label column sm={2}>
            Модификация
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder='Введите модификацию авто'
              required={false}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-6 custom-group"
        >
          <Form.Label column sm={2}>
            Объём (л)
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder='Введите объём двигателя'
              required={false}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
        >
          <Form.Label htmlFor="typeDescription" column sm={2}>
            Топливо
          </Form.Label>
          <Col sm={10} className="custom-block">
            <Form.Select aria-label="Default select example">
              <option value='Бензин'>Бензин</option>
              <option value='Дизель'>Дизель</option>
            </Form.Select>
            <Form.Text id="typeDescription" muted>
              Выберите тип топлива
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
        >
          <Form.Label htmlFor="typeDescription" column sm={2}>
            Тип впуска
          </Form.Label>
          <Col sm={10} className="custom-block">
            <Form.Select aria-label="Default select example">
              <option value='Атмосферный'>Атмосферный</option>
              <option value='Турбированный'>Турбированный</option>
            </Form.Select>
            <Form.Text id="typeDescription" muted>
              Выберите тип впуска двигателя
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-6 custom-group"
        >
          <Form.Label column sm={2}>
            Тип кузова
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder='Введите тип кузова'
              required={false}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
        >
          <Form.Label htmlFor="typeDescription" column sm={2}>
            КПП
          </Form.Label>
          <Col sm={10} className="custom-block">
            <Form.Select aria-label="Default select example">
              <option value='Механическая'>Механическая</option>
              <option value='Автоматическая'>Автоматическая</option>
              <option value='Роботизированная'>Роботизированная</option>
            </Form.Select>
            <Form.Text id="typeDescription" muted>
              Выберите тип КПП
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-6 custom-group"
        >
          <Form.Label column sm={2}>
            Запчасть*
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder='Введите название запчасти'
              required={true}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
        >
          <Form.Label htmlFor="typeDescription" column sm={2}>
            Состояние
          </Form.Label>
          <Col sm={10} className="custom-block">
            <Form.Select aria-label="Default select example">
              <option value='Новое'>Новое</option>
              <option value='Б/У'>Б/У</option>
            </Form.Select>
            <Form.Text id="typeDescription" muted>
              Информация о состоянии запчасти
            </Form.Text>
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
        >
          <Form.Label column sm={2}>
            Фотографии
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="file"
              placeholder='Выберите фото'
              multiple={true}
              onChange={handleChangeFile}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-6 custom-group"
        >
          <Form.Label column sm={2}>
            Артикул
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder='Введите артикул запчасти'
              required={false}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-6 custom-group"
        >
          <Form.Label column sm={2}>
            Номер
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder='Введите номер запчасти'
              required={false}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 custom-group"
        >
          <Form.Label column sm={2}>
            Описание
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="textarea"
              placeholder='Напишите описание запчасти'
              style={{ minHeight: "100px" }}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-6 custom-group"
        >
          <Form.Label column sm={2}>
            Цена
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder='Введите цену запчасти'
              required={false}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 custom-group">
          <Form.Label as="legend" column sm={2}>
            Валюта
          </Form.Label>
          <Col sm={10}>
              <Form.Check
                inline
                type="radio"
                label='BYN'
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
                value='BYN'
              />
              <Form.Check
                inline
                type="radio"
                label='USD'
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
                value='USD'
              />
              <Form.Check
                inline
                type="radio"
                label='RUB'
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
                value='RUB'
              />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 custom-group">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">{editId ? 'Сохранить изменения' : 'Добавить обьявление'}</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
