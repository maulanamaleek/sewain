import React from "react";
import { Link, Route } from "react-router-dom";
import Calculator from "../calculator/Calculator";

export default function CalcBtn() {
  return (
    <div className="calc-btn">
      <Link to="/calculator">
        <button>Kalkulator Cicilan</button>
      </Link>
      <p>
        Hitung kebutuhan cicilanmu untuk menentukan DP dan lama cicilan sesuai
        kebutuhannmu
      </p>
    </div>
  );
}
