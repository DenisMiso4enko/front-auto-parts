//? Документация использования модального окна
    // Стейт и хэндлеры для управления модалкой (создаём в компоненте, из которого будем вызывать модальное окно)

    // const [ showModal, setShowModal ] = React.useState(false)
    // const handlerOn... = () => {
    //   setShowModal(prev => !prev)
    //   console.log('...Что-то будет по этому событию')
    // }
    // const handlersOnCloseModal = () => {
    //     setShowModal(false)
    // }
    // const handlerOnConfirmModal = () => {
    //     setShowModal(false)
    //     console.log('Произойдёт всё, что пожелаешь')
    // }

    // Импортим в компонент и прокидываем пропсы
    // В contolled прокидываем какого типа модалка нам нужна (с подтверждением или ознакомительная).
    // В active прокидываем showModal и управляем setShowModal (показать/скрыть).
    // В title залетает заголовок модалки.
    // В children соответственно текст контента.
    // onClose и onConfirm соответственно, принимают функции для закрытия окна и действия при подтверждении.
    // Рендерить её можно в любом месте, так как она рендерится через портал и будет лежать около div#root
//?----------------------------------------------

import React, { PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import './Modal.scss'

interface IModalProps {
  controlled: boolean,
  active: boolean,
  title?: string,
  onConfirm?: () => void
  onClose?: () => void
}

export const Modal = ({ controlled, active, title, onConfirm, onClose, children }: PropsWithChildren<IModalProps>): any => {
    //Ref and Stop Scroll on anable Menu
    const { current } = React.useRef(document.body)
    React.useEffect(() => {
        active ? disableBodyScroll(current) : enableBodyScroll(current)
        return () => clearAllBodyScrollLocks()
    }, [active])

    if (!active) return null

    const handlerOnStopPropagation = (event: any) => event.stopPropagation()

    const portalElement = document.querySelector('#root')
    if (portalElement) {
        return ReactDOM.createPortal((
            <div className='modal' onClick={onClose}>
                <div className={controlled ? 'modal__content--controlled' : 'modal__content'} onClick={handlerOnStopPropagation}>
                    <div className='modal__top'>
                        <h2 className='modal__title'>{title}</h2>
                    </div>
                    <div className='modal__body'>{children}</div>
                    {controlled &&
                <div className='modal__footer'>
                    {onConfirm ? (
                        <>
                            <button onClick={onConfirm}>YES</button>
                            <button onClick={onClose}>NO</button>
                        </>) : (
                        <>
                            <button onClick={onClose}>OK</button>
                        </>)}
                </div>
                    }
                </div>
            </div>
        ), portalElement)
    }
}