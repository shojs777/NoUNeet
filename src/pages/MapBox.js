import React, { Component } from 'react';
import '../App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import Calender from '../components/Calender';
import { Header } from '../components/header/Header';
import styles from './MapBox.css'
mapboxgl.accessToken =
  'pk.eyJ1IjoiZnUtdGEyNTExIiwiYSI6ImNrdHc3azZwYzI3bWwybm8xaDZlYzNuYTAifQ.iF3783k67PmflH1wPU-_gw';
class MapBox extends Component {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.container,
      style: 'mapbox://styles/fu-ta2511/cktye8opm2jb319o4uwvugxgo',
      center: [139.70048839, 35.68961569],
      zoom: 13,
    });
    this.map.addControl(new mapboxgl.NavigationControl());

    const html1 = `<h3>あばばば株式会社</h3>
            <span>-会社概要-</span>
            </br>
        <span>
        あばばば株式会社（Abababa.inc）は、東京都に跨る営利主義団体である。ビルの高さ3776.12 m、日本最高峰で日本国外でも日本の象徴として広く知られている。
        <span>
        <button class="map-button">企業の話を聞く</button>`;
    const popup1 = new mapboxgl.Popup({
      className: 'my-class',
      closeButton: true,
    })
      .setMaxWidth('400px')
      .setHTML(html1);
    new mapboxgl.Marker()
      .setLngLat([139.7174577, 35.72621461])
      .setPopup(popup1)
      .addTo(this.map)
      .togglePopup();

    const html2 = `<h3>なに見てんのよ協同組合</h3>
            <span>-会社概要-</span>
            </br>
        <span>なに見てんのよ協同組合は、「定時での退社。でなければ、帰れ」を社訓として2018年に設立した協同組合です。<span>
        <button class="map-button">企業の話を聞く</button>`;
    const popup2 = new mapboxgl.Popup({
      className: 'my-class',
      closeButton: true,
    })
      .setMaxWidth('400px')
      .setHTML(html2);
    new mapboxgl.Marker()
      .setLngLat([139.75264115, 35.70006172])
      .setPopup(popup2)
      .addTo(this.map)
      .togglePopup();

    const html3 = `<h3>げへへへ証券</h3>
            <span>-会社概要-</span>
            </br>
        <span>げへへへ証券は働きやすい環境を維持するために、インターンでなるべく目立とうとした方から順に落としていきます😊✨<span>
        <button class="map-button">企業の話を聞く</button>`;
    const popup3 = new mapboxgl.Popup({
      className: 'my-class',
      closeButton: true,
    })
      .setMaxWidth('400px')
      .setHTML(html3);
    new mapboxgl.Marker()
      .setLngLat([139.6937361, 35.69823936])
      .setPopup(popup3)
      .addTo(this.map)
      .togglePopup();
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <>
        <Header />
        <div className={'map'} style={{}} ref={(e) => (this.container = e)}>
          <Calender className={'calender'} />
        </div>
      </>
    );
  }
}

export default MapBox;
