import HeroImage from "../../../assets/food/food4.webp";

export default function Heading() {
  return (
    <><header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>About Us</h1>
      </div>
    </header><article className="about-us-section">
        <p>
          Welcome to Little Lemon, where our passion is to create delightful
          dining experiences. Our restaurant is a place where good food and great
          memories come together. Our chefs work tirelessly to prepare
          mouthwatering dishes that are made with the finest, freshest ingredients,
          ensuring a burst of flavors in every bite. It's no wonder our loyal
          customers keep coming back for more. We take pride in offering a diverse
          menu that caters to all tastes and occasions. Whether you're celebrating a
          special event or simply looking for a delicious meal, you'll find it
          here at Little Lemon. We invite you to savor our dishes and experience the
          warmth and hospitality that we bring to every table. Come join us and
          taste the difference today!
        </p>
      </article></>
  );
}

