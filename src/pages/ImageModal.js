import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'; // Уточните путь, если необходимо

Modal.setAppElement('#root'); // Установите appElement, как требует React Modal, чтобы предотвратить ошибки в скрытом содержимом

const ImageModal = ({ imageUrl, closeModal }) => (
  <Modal
    isOpen={true} // Установите ваши условия для открытия и закрытия модального окна
    onRequestClose={closeModal}
    contentLabel="Image Modal"
  >
    <img src={imageUrl} alt="Изображение" style={{width: 500}} />
    <button onClick={closeModal}>Закрыть</button>
  </Modal>
);

export default ImageModal;