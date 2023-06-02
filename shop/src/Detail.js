import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { name } = useParams();
  //{}는 객체 분해 문법 => useParmas()로부터 반환된 객체에서 'name' 프로버티를 분해하여 'name' 변수에 할당.
  //{}를 쓰지 않는 방법 => name.name 처럼 접근해야함.
  console.log(name);
  const [alert, setAlert] = useState(true);
  const [price, setPrice] = useState("12,800원");

  useEffect(() => {
    const time = setTimeout(() => {
      setAlert(false);
      setPrice("20,000원");
    }, 3000);

    return () => {
      clearTimeout(time);
    };
  }, []);

  const getSubTitle = () => {
    if (name === "LovePoem") return "The 5th Mini Album";
    else if (name === "Lilac") return "The 5th Album";
    else if (name == "Palette") return "The 4th Album";
  };

  return (
    <div className="container">
      {alert === true ? (
        <div className="alert alert-warning">3초 안에 구매하면 30% 할인!!!</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img src={`./img/${name}.jpg`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{name}</h4>
          <p>{getSubTitle()}</p>
          <p>{price}</p>
          <button className="btn btn-primary">주문하기</button>
        </div>
      </div>
    </div>
  );
}
export default Detail;
