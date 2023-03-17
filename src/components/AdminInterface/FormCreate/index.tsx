import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { AppDispatch, RootState } from "../../../store";
import { fetchGetMe } from "../../../store/slices/userSlice";
import { PATHDOMAIN } from "../../../constants";
import { onChangeInputFile, onSubmitForm } from "./formHandlers";
import { formFields } from "./formFields";
import "./FormCreate.scss";

export function FormCreate() {
  const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
    dispatch(fetchGetMe())
  }, [])

  const { userId } = useSelector((state: RootState) => state.user);
  const [images, setImages] = useState([]);

  //onChangeInputFile(path: string, setState)
  const handleChangeFile = onChangeInputFile(`${PATHDOMAIN}upload`, setImages)
  // onSubmitForm(state, path: string)
  const handlerOnCreatePost = onSubmitForm(images, `${PATHDOMAIN}admin/createProduct`)

  if (!userId) return <h1>Авторизуйтесь!</h1>;
  return (
    <div className="form-wrapper">
      <Form onSubmit={handlerOnCreatePost}>
        {formFields.map(input => {
          if (input.type === 'text') {
            return (
              <Form.Group
                key={input.label}
                as={Row}
                className="mb-6 custom-group"
                controlId="formCreate"
              >
                <Form.Label column sm={2}>
                  {input.label}
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="text"
                    placeholder={input.placeholder}
                    required={input.required}
                  />
                </Col>
              </Form.Group>
              )
          } else if (input.type === 'select') {
            return (
              <Form.Group
                key={input.label}
                as={Row}
                className="mb-3 custom-group"
                controlId="formCreate"
              >
                <Form.Label htmlFor="typeDescription" column sm={2}>
                  {input.label}
                </Form.Label>
                <Col sm={10} className="custom-block">
                  <Form.Select aria-label="Default select example">
                    {input.option.map(i => <option key={i} value={i}>{i}</option>)}
                  </Form.Select>
                  <Form.Text id="typeDescription" muted>
                    {input.text}
                  </Form.Text>
                </Col>
              </Form.Group>
            )
          } else if (input.type === 'file') {
            return (
              <Form.Group
                key={input.label}
                as={Row}
                className="mb-3 custom-group"
                controlId="formCreate"
              >
                <Form.Label column sm={2}>
                  {input.label}
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="file"
                    placeholder={input.placeholder}
                    multiple={input.multiple}
                    onChange={handleChangeFile}
                  />
                </Col>
              </Form.Group>
            )
          } else if (input.type === 'textarea') {
            return (
              <Form.Group
                key={input.label}
                as={Row}
                className="mb-3 custom-group"
                controlId="formCreate"
              >
                <Form.Label column sm={2}>
                  {input.label}
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    type="textarea"
                    placeholder={input.placeholder}
                    style={{ minHeight: "100px" }}
                  />
                </Col>
              </Form.Group>
            )
          } else {
            return (
              <Form.Group
                key={input.label}
                as={Row}
                className="mb-3 custom-group">
                <Form.Label as="legend" column sm={2}>
                  {input.label}
                </Form.Label>
                <Col sm={10}>
                  {input.value.map(i => (
                    <Form.Check
                      key={i}
                      type="radio"
                      label={i}
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                      value={i}
                    />
                  ))}
                </Col>
              </Form.Group>
            )
          }
        })}
        <Form.Group as={Row} className="mb-3 custom-group">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Добавить обьявление</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
