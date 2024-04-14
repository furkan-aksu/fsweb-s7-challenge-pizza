import { FormGroup, Input, Label } from "reactstrap";
import "./orderpizza.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function OrderPizza() {
  return (
    <>
      <div>
        <header className="header">
          <img src="../../Assets/mile1-assets/logo.svg" alt="" />
          <nav>
            <a href="/">Anasayfa</a>-<a href="/">Seçenekler</a>
            <a href="/">Sipariş Oluştur</a>
          </nav>
        </header>
        <div>
          <p>Position Absolute Acı Pizza</p>
          <p>84.50</p>
          <p>4.9</p>
          <p>(200)</p>
          <p>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
          <FormGroup tag="fieldset">
            <legend>Hamur Seç</legend>
            <FormGroup check>
              <Input name="Küçük" type="radio" />
              <Label check>Küçük</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="Orta" type="radio" />
              <Label check>Küçük</Label>
            </FormGroup>
            <FormGroup check>
              <Input name="Büyük" type="radio" />
              <Label check>Küçük</Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Hamur Seç</Label>
            <Input id="exampleSelect" name="select" type="select">
              <option>Hamur Kalınlığı</option>
              <option>İnce</option>
              <option>Kalın</option>
            </Input>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Pepperoni</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Sosis</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Kanada Jambonu</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Tavuk Izgara</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Soğan</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Domates</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Mısır</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Sucuk</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Jalepeno</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Sarımsak</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Biber</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Sucuk</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Ananas</Label>
          </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox" />
            <Label check>Kabak</Label>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Sipariş Notu</Label>
            <Input id="exampleText" name="text" type="textarea"></Input>
          </FormGroup>
          <p>----------------------------------------</p>
          <div>
            <button>-</button>
            <p>sayı</p>
            <button>+</button>
          </div>
          <div>
            <p>Sipariş Toplamı</p>
            <p>Seçimler</p>
            <p>Seçim Toplamı</p>
            <p>Toplam</p>
            <p>Toplam tl</p>
            <Link>SİPARİŞ VER</Link>
          </div>
        </div>
      </div>
    </>
  );
}
