import React from 'react'

export const fff = () => {
  return (
    <div>
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
    </div>
  )
}
