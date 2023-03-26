import { useEffect, useState } from "react";

function SaleAlert({ time, discount }) {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {alert && (
        <div className="my-alert2 bg-warning">
          <p>
            {time}초동안 {discount}프로 할인
          </p>
        </div>
      )}
    </>
  );
}

export default SaleAlert;
