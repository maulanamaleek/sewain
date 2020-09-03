import React from "react";

export default function slider() {
  return (
    <div className="slider">
      <div className="slide-content">
        <div className="slide">
          <h1>Temukan Properti Terbaik Saat Ini Juga</h1>
          <h1>
            <b>#TemukanPropertimu</b>
          </h1>
          <p>Dapatkan properti impianmu dengan Sewain</p>
          <form className="search">
            <input
              type="text"
              placeholder="Cari rumah, kantor, tanah, dan lainnya"
            />
            <button type="submit">cari</button>
          </form>
        </div>
      </div>
    </div>
  );
}
