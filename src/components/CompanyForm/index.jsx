import { useState } from 'react';

const ForumModal = ({ isOpen, onClose }) => {
  const [socialMedia, setSocialMedia] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Сюда можно добавить логику отправки формы
    console.log('Отправленные данные:', { socialMedia });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Форум</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="socialMedia">Соцсеть:</label>
            <input
              type="text"
              id="socialMedia"
              value={socialMedia}
              onChange={(e) => setSocialMedia(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Отправить
          </button>
        </form>
        <div className="social-links">
          <a href="https://www.facebook.com" className="social-link">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" className="social-link">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" className="social-link">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <style jsx>{`
        /* Стили остаются те же, что и в предыдущем коде */
      `}</style>
    </div>
  );
};

const MyComponent = () => {
  const [isForumOpen, setIsForumOpen] = useState(false);

  const openForum = () => {
    setIsForumOpen(true);
  };

  const closeForum = () => {
    setIsForumOpen(false);
  };

  return (
    <div>
      <h1>Мой компонент</h1>
      <button onClick={openForum}>Открыть форум</button>
      <ForumModal isOpen={isForumOpen} onClose={closeForum} />
    </div>
  );
};

export default MyComponent;