import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      harga: "",
      dp: 0,
      cicil: 0,
      durasi: 1,
    };
    this.handleHarga = this.handleHarga.bind(this);
    this.handleDurasi = this.handleDurasi.bind(this);
  }
  handleDurasi(e) {
    const cicil = this.state.cicil;
    const durasi = parseFloat(e.target.value);
    this.setState({ durasi: durasi });
    if (durasi === 1) {
      this.setState({ cicil: Math.round(cicil * 2) });
    } else {
      this.setState({ cicil: Math.round(cicil / 2) });
    }
  }

  handleHarga(e) {
    const hargaDP = e.target.value * 0.3;
    let cicil;
    this.setState({
      dp: Math.round(hargaDP),
    });

    this.setState({ harga: e.target.value });

    if (this.state.durasi === 1) {
      cicil = (e.target.value * 1.2 * 0.7) / 10;
    } else if (this.state.durasi === 2) {
      cicil = (e.target.value * 1.2 * 0.7) / 20;
    }
    this.setState({ cicil: Math.round(cicil) });
  }

  onSubmit(e) {
    e.preventDefault();
    window.confirm("Thank you");
  }
  render() {
    const { harga, dp, cicil, durasi } = this.state;
    return (
      <div className="calculator">
        <div className="calculator-container">
          <div className="calculator-satu">
            <Link to="/">
              <a href="#">Kembali</a>
            </Link>
            <h1>Hitung Budget Sewa Anda</h1>
            <h3>Harga Sewa Properti / Tahun</h3>
            <form>
              <input
                type="number"
                onChange={this.handleHarga}
                placeholder={harga.toLocaleString(navigator.language, {
                  minimumFractionDigits: 0,
                })}
              />
              <select
                name="waktu"
                value={durasi}
                onChange={this.handleDurasi}
                id="waktu"
              >
                <option value="1">1 Tahun</option>
                <option value="2">2 Tahun</option>
              </select>
            </form>
          </div>
          <div className="calculator-dua">
            <form onSubmit={this.onSubmit}>
              <caption>
                Harga Cicilan
                <input
                  type="number"
                  onChange={null}
                  // value={cicil}
                  placeholder={`Rp. ${cicil
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                />
              </caption>
              <caption>
                Down Payment
                <input
                  type="number"
                  placeholder={`Rp. ${dp
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
                />
              </caption>
              <caption>
                Durasi Cicilan
                <input
                  type="text"
                  value={`${durasi * 10} kali selama ${durasi} tahun`}
                />
              </caption>
              <button type="submit">Ajukan Sewa</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
