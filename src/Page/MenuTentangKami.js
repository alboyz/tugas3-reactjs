import React, { Component } from "react";

class MenuTentangKami extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tentang:
        "Warung Nusantara Adalah Restoran Yang Bernuansa Makanan Nusantara, Kami Ada Untuk Membuat Anda Nenikmati Makanan Khas Dari Nusantara",
      alamat:
        "Jl Swadaya IV, Pd. Ranggon Cipayung Kota Jakarta Timur DKI Jakarta 1380",
      kontak: "Kontak Kami: 08123456789"
    };
  }

  render() {
    return (
      <div>
        <center>
          <p>Tentang Kami</p>
          {this.state.tentang}
          <h3>{this.state.alamat}</h3>
          <p>
            <b>{this.state.kontak}</b>
          </p>
        </center>
      </div>
    );
  }
}

export default MenuTentangKami;
