import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

function SaleAlert({ time, discount }) {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, time * 1000);
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <>
      {alert && (
        <Alert variant="warning" className="my-3">
          <p className="m-0">
            {time}초동안 {discount}프로 할인
          </p>
        </Alert>
      )}
    </>
  );
}

export default SaleAlert;
