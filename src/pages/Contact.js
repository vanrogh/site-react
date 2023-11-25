import { Form, redirect, useActionData } from "react-router-dom"
import styles from '../styles/Contact.css';

export default function Contact() {
    const data = useActionData()

    return (
        <div className="contact">
            <h1>Контакты</h1>
            <p>Вы можете связаться с нами посредством нижеприведенной формы. Письмо с этой формы поступит на электронный адрес студии и мы в ближайшее время вам ответим.</p>

            <form>
                <label>
                    <span>Ваше имя:</span>
                    <input type="text" name="name" />
                </label>
                <label>
                    <span>Компания:</span>
                    <input type="text" name="company" />
                </label>
                <label>
                    <span>Город:</span>
                    <input type="text" name="city" />
                </label>
                <label>
                    <span>Контактный телефон:</span>
                    <input type="tel" name="tel" />
                </label>
                <label>
                    <span>Ваш e-mail:</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Тема сообщения:</span>
                    <input type="text" name="subject" />
                </label>
                <label>
                    <span>Текст письма:</span>
                    <textarea name="message"></textarea>
                </label>
                <label>
                    <span>Как вы узнали о нашей студии:</span>
                    <input type="text" name="text" />
                </label>
                <button>Отправить</button>
        </form>
        </div>
    )
}