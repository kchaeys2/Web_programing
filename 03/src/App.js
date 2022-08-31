import './App.css';
import insta_01 from './image/instagram_img01.jpg';
import insta_02 from './image/instagram_img02.jpg';
import insta_03 from './image/instagram_img03.jpg';
import insta_04 from './image/instagram_img04.jpg';
import insta_05 from './image/instagram_img05.jpg';
import insta_06 from './image/instagram_img06.jpg';

import Header from './functions/Header';
import Slide from './functions/Slider';
import Goods from './functions/Goods';
import Footer from './functions/Footer';
import dummy from './Data.json';

import {BrowserRouter,Route,Switch} from 'react-router-dom';

function Homeimg(){
  return<div class="home_image">
    <Slide></Slide>
  </div>
}

function Ad(){
  return<section class = "ad">
    <img  alt="" src="https://product-image.kurly.com/banner/random-band/pc/img/e7b19a08-def2-4e5a-bcb5-dd48a20864fd.jpg"/>
  </section>
}
function Timegoods(){
  return<section class="spacialSale">
  <div class="chuseok">
      <div class="countdown">
          <h2>일일특가</h2>
          <h3>24시간 한정 특가</h3>
          <div class="timer">

          </div>
          <p>망설이면 늦어요!</p>
      </div>
      <div class="item">
          <div class="img">
              <div><span>일일특가</span></div>
              <img alt="" class="main" src="https://img-cf.kurly.com/shop/data/goods/1614747154996z0.jpg"/>
          </div>
          <div class="tag">
              <div class="name">
                  <small>매콤달콤한 매력의 밥도둑</small>
                  <h3>홍대주꾸미 쭈꾸미 볶음 300g(냉동)</h3>
              </div>
              <div class="price">
                  <span class="percent">40%</span><span class="salePrice">4,740원</span>
                  <span class="originPrice">7,900원</span>
              </div>
          </div>
      </div>
    </div>
  </section>
}
function Timegoods02(){
  return<section>
    <div class="dayday">
      <div class="countdown">
        <h2>일일특가</h2>
        <h3>24시간 한정 특가</h3>
        <div class="timer">

        </div>
        <p>망설이면 늦어요!</p>
      </div>
      <div class="dayItem">
        <div class="dayItem01">
          <div class="img">
            <div><span>일일특가</span></div>
            <img alt='' src="https://img-cf.kurly.com/shop/data/goods/1637921674319l0.jpg"/>
          </div>
          <div class="tag">
            <div class="name">
              <small>매콤달콤한 매력의 밥도둑</small>
              <h3>홍대주꾸미 쭈꾸미 볶음 300g(냉동)</h3>
            </div>
            <div class="price">
              <span class="percent">40%</span><span class="salePrice">4,740원</span>
              <span class="originPrice">7,900원</span>
            </div>
          </div>
        </div>
        <div class="dayItem01">
          <div class="img">
            <div><span>일일특가</span></div>
            <img alt='' src='https://img-cf.kurly.com/shop/data/goods/1601882398756l0.jpg'/>
          </div>
          <div class="tag">
            <div class="name">
              <small>매콤달콤한 매력의 밥도둑</small>
              <h3>홍대주꾸미 쭈꾸미 볶음 300g(냉동)</h3>
            </div>
            <div class="price">
              <span class="percent">40%</span><span class="salePrice">4,740원</span>
              <span class="originPrice">7,900원</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}
function Instagram(){
  return<section class="sectionfin">
  <div class="instagram">
      <div class="title">
          <h1>인스타그램 고객 후기</h1>
          <p>더 많은 고객 후기가 궁금하다면?</p>
      </div>
      <div class="image">
          <a><img alt="" class="insta" src={insta_01}/></a>
          <a><img alt="" class="insta" src={insta_02}/></a>
          <a><img alt="" class="insta" src={insta_03}/></a>
          <a><img alt="" class="insta" src={insta_04}/></a>
          <a><img alt="" class="insta" src={insta_05}/></a>
          <a><img alt="" class="insta" src={insta_06}/></a>
      </div>
      <div class="more">
          <p>더 많은 고객 후기가 궁금하다면?</p>
          <a>@marketkurly_regram</a>
      </div>
    </div>
  </section>
}

function App() {
  return (
    <div>
      <Header></Header>
      <Homeimg></Homeimg>
      {dummy.caption01.map(caption=>(
        <Goods title={caption.title} arrow={caption.arrow} sub={caption.sub}/>
      ))}
      <Ad></Ad>
      <Timegoods></Timegoods>
      <Timegoods02/>
      {dummy.caption02.map(caption=>(
        <Goods title={caption.title} arrow={caption.arrow} sub={caption.sub} subtitle={caption.subtitle}/>
      ))}
      <Ad/>
      <Goods title={"지금 가장 핫한 상품"} arrow={"arrow"} sub={"none"}/>
      <Goods title={"마감 세일"} arrow={"arrow"} sub={"none"}/>
      <Instagram></Instagram>
      <Footer></Footer>
    </div>
  );
}

export default App;
