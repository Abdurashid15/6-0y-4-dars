import React, {useState} from 'react'
import styles from './index.module.css'
function Form() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    address: '',
    employees: '',
    comments: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('companyData', JSON.stringify(formData));
  };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profilePicture, setProfilePicture] = useState(null);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      setProfilePicture(URL.createObjectURL(file));
      closeModal();
    };
  return (
    <>
    <div className={styles.form}>
      <h1>Kompaniya ma’lumotlari</h1>
      <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
      <div className={styles.picture}>
      {profilePicture ? (
        <img src={profilePicture} alt="Profile" className={styles.profilepicture} />
      ) : (
        <img src="../../../public/Ellipse 1.png" alt="" />
      )}
      <a onClick={openModal} className={styles.yuklash} >Yuklash</a>
      </div>
      <div>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalcontent}>
            <span className={styles.closebutton} onClick={closeModal}>
              &times;
            </span>
            <input  type="file" onChange={handleFileUpload} />
          </div>
        </div>
      )}


    </div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="Kompaniya-nomi">Kompaniya nomi:</label>
      <input
        type="text"
        id="Kompaniya-nomi"
        name="Kompaniya-nomi"
        value={formData.KompaniyaNomi}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="phone">Telefon raqami:</label>
      <input
        type="tel"
        id="Telefon"
        name="Telefon"
        value={formData.Telefon}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="country">Davlat:</label>
      <input
        type="text"
        id="Davlat"
        name="Davlat"
        value={formData.Davlat}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="city">Shahar:</label>
      <input
        type="text"
        id="Shahar"
        name="Shahar"
        value={formData.Shahar}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="joyi">Yashash joyi:</label>
      <input
        type="text"
        id="joyi"
        name="joyi"
        value={formData.joyi}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="Hodimlar">Hodimlar soni:</label>
      <input
        type="number"
        id="Hodimlar"
        name="Hodimlar"
        value={formData.Hodimlar}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="Izoh">Izoh:</label>
      <textarea
        id="Izoh"
        name="Izoh"
        value={formData.Izoh}
        onChange={handleInputChange}
      />

      <button type="Keyingi">Keyingi</button>
    </form>
    </div>
    </>
  )
}

export default Form;

