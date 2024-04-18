import { Form, FormGroup, Input, Label } from "reactstrap";
import "./orderpizza.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const malzemeler = [
  "Pepperoni",
  "Domates",
  "Biber",
  "Sosis",
  "Mısır",
  "Sucuk",
  "Kanada Jambonu",
  "Ananas",
  "Tavuk Izgara",
  "Jalepeno",
  "Kabak",
  "Soğan",
  "Sarımsak",
];

const errorMessage = {
  boyut: "Lütfen pizza boyutu seçiniz.",
  hamur: "Lütfen hamur kalınlığını seçiniz.",
  malzeme: "En az 4 malzeme seçmelisiniz.",
  isim: "En az üç karakterli isim giriniz.",
};

function OrderPizza() {
  const [count, setCount] = useState(0);
  const [secimler, setSecimler] = useState(0);
  const [total, setTotal] = useState(0);
  const [size, setSize] = useState("");
  const [secilenMalzemeler, setSecilenMalzemeler] = useState([]);

  const onChange = (type) => {
    type == "Arttır"
      ? setCount(count + 1)
      : type == "Azalt" && count > 0
      ? setCount(count - 1)
      : null;
  };

  const onChangeSecimler = (e) => {
    const malzeme = e.target.value;

    if (!secilenMalzemeler.includes(malzeme))
      setSecilenMalzemeler([...secilenMalzemeler, malzeme]);
    else {
      const newMalzeme = [...secilenMalzemeler];
      newMalzeme.splice(newMalzeme.indexOf(malzeme), 1);
      setSecilenMalzemeler(newMalzeme);
    }
  };

  console.log(secilenMalzemeler);
  const onChangeSize = (e) => {
    const newVal = e.target.value;
    setSize(newVal);
  };

  useEffect(() => {
    const sizeMoney =
      size == "Küçük"
        ? 85.5
        : size == "Orta"
        ? 105.5
        : size == "Büyük"
        ? 125.5
        : 0;

    setTotal(sizeMoney * count + secimler * count);
  }, [secimler, size, count]);

  useEffect(() => {
    setSecimler(secilenMalzemeler.length * 5);
  }, [secilenMalzemeler]);

  return (
    <>
      <div className="all">
        <header className="orderPizza">
          <img
            src="../../Assets/mile1-assets/logo.svg"
            alt="Teknolojik Yemekler"
          />
          <nav>
            <a href="">AnaSayfa-</a>
            <a href="">Seçenekler-</a>
            <a href="">Sipariş Oluştur</a>
          </nav>
        </header>

        <div className="main">
          <div className="container-orderpizza">
            <h2>Position Absolute Acı Pizza</h2>
            <div className="rakam">
              <p className="rakam-p">85.50₺</p>
              <div className="rakam2">
                <p>4.9</p>
                <p>(200)</p>
              </div>
            </div>
            <p>
              Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
            <div className="boyut-hamur">
              <FormGroup tag="fieldset">
                <Label>
                  Boyut Seç <span>*</span>
                </Label>
                <FormGroup check>
                  <Input
                    name="radio1"
                    type="radio"
                    value="Küçük"
                    onChange={onChangeSize}
                  />{" "}
                  <Label check>Küçük</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="radio1"
                    type="radio"
                    value="Orta"
                    onChange={onChangeSize}
                  />{" "}
                  <Label check>Orta</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="radio1"
                    type="radio"
                    value="Büyük"
                    onChange={onChangeSize}
                  />{" "}
                  <Label check>Büyük</Label>
                </FormGroup>
              </FormGroup>
              <FormGroup>
                <Label for="hamur">
                  Hamur Seç <span>*</span>
                </Label>
                <Input id="hamur" name="select" type="select">
                  <option>Hamur Kalınlığı</option>
                  <option>Kalın Kenar</option>
                  <option>Orta Kenar</option>
                  <option>İnce Kenar</option>
                </Input>
              </FormGroup>
            </div>
            <div className="malzeme-container">
              <p>Ek Malzemeler</p>
              <p>En Fazla 10 malzeme ,en az 4 malzeme seçebilirsiniz. 5₺</p>
              <Form>
                {malzemeler.map((malzeme, index) => {
                  return (
                    <FormGroup check inline>
                      <Input
                        type="checkbox"
                        onChange={onChangeSecimler}
                        value={malzeme}
                        key={index}
                        disabled={
                          secilenMalzemeler.includes(malzeme)
                            ? false
                            : secilenMalzemeler.length >= 10
                            ? true
                            : false
                        }
                      />
                      <Label check>{malzeme}</Label>
                    </FormGroup>
                  );
                })}
              </Form>
            </div>
            <FormGroup className="sipariş-notu">
              <Label for="exampleText">Sipariş Notu</Label>
              <Input
                id="exampleText"
                name="text"
                type="textarea"
                placeholder="Siparişine eklemek istediğin bir not var mı?"
              />
            </FormGroup>
            <hr />
            <div className="pizza-onay">
              <div className="sayac">
                <button onClick={() => onChange("Azalt")}>-</button>{" "}
                <p>{count}</p>{" "}
                <button onClick={() => onChange("Arttır")}>+</button>
              </div>
              <div className="sipariş-card">
                {" "}
                <div className="sipariş-genel">
                  <h5>Sipariş Toplamı</h5>
                  <div className="secimler">
                    <p>Seçimler</p> <p>{secimler}₺</p>
                  </div>
                  <div className="toplam">
                    <p>Toplam</p> <p>{total}₺</p>
                  </div>
                </div>
                <div className="link-pizza">
                  <Link to="/OrderSuccess">SİPARİŞ VER</Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPizza;
