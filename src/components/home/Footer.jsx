import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="kantor">
        <h3>Kantor</h3>
        <p>Jl. Abcdef XI No. 17</p>
        <p>Kecamatan Sukasuka </p>
        <p>Kota Sukasuka 12345 </p>
        <p>Indonesia</p>
      </div>
      <div className="overview">
        <h3>Overview</h3>
        <ul>
          <li>
            <a href="#">Tentang Kami</a>
          </li>
          <li>
            <a href="#">Hubungi Kami</a>
          </li>
          <li>
            <a href="#">Pertanyaan</a>
          </li>
          <li>
            <a href="#">Kebijakan</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
