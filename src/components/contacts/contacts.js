import "./contacts.css";

const Contacts = () => {
  return (
    <div className="contact">
      <div className="container" id="contacts">
        <div className="line"></div>
          <div className="contacts-main">
            <h2 className="ict-title">ICT Lab</h2>
            <div className="contacts-text">
              <h5>Контакты</h5>
              <ul>
                <li>ОсОО ИВТ Лаб</li>
                <li>Бишкек, Кыргызстан</li>
                <li className="log">Логвиненко, 27/2</li>
                <li>
                  <b>Phone:</b> +996(777) 20–28–65
                </li>
                <li>
                  <b>Email:</b> ubtlab@gmail.com
                </li>
              </ul>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Contacts;
