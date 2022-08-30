import './App.css';
import insta_01 from './image/instagram_img01.jpg';
import insta_02 from './image/instagram_img02.jpg';
import insta_03 from './image/instagram_img03.jpg';
import insta_04 from './image/instagram_img04.jpg';
import insta_05 from './image/instagram_img05.jpg';
import insta_06 from './image/instagram_img06.jpg';

import Header from './functions/Header';
import Goods from './functions/Goods';
import dummy from './Data.json';

function Homeimg(){
  return<div class="home_image">
        <img alt="" src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/4a0cd847-7e75-4039-9b97-cd87d862654f.jpg"/>
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
export function Footer(){
  return<footer>
    <div class="footer01">
      <div class="footer02">
        <div class="footer03">
          <h2>고객행복센터</h2>
          <div class="f031">
              <h3><span>1644-1107</span></h3>
              <dl>
                  <dt>365고객선터</dt>
                  <dd>오전7시-오후7시</dd>
              </dl>
          </div>
          <div class="f032">
              <h3><button type="button">카카오톡 문의</button></h3>
              <dl>
                  <dt>365고객선터</dt>
                  <dd>오전7시-오후7시</dd>
              </dl>
          </div>
          <div class="oneByone">
              <h3><a>1:1 문의</a></h3>
              <dl>
                  <dt>24시간 접소 가능</dt>
              <dd>고객센터 운영시간에 순차적으로 답변해드리겠습니다.</dd>
              </dl>
          </div>
          <div class="large">
              <h3><a>대량주문 문의</a></h3>
              <dl>
                  <dd>비회원의 경우 메일로 문의 바랍니다.</dd>
              </dl>
          </div>
        </div>
        <div class="footer04">
          <ul class="f041">
              <li><a>컬리소개</a></li>
              <li><a>컬리소개영상</a></li>
              <li><a>인재채용</a></li>
              <li><a>이용약관</a></li>
              <li><a>개인정보처리방침</a></li>
              <li><a>이용안내</a></li>
          </ul>
          법인명 (상호) : 주식회사 컬리<span></span>사업자등록번호 : 261-81-23567<a class="purple">사업자정보 확인</a><br/>
          통신판매업 : 제 2018-서울강남-01646 호<span></span>개인정보보호책임자 : 이원준<br/>
          주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)<span></span>대표이사 : 김슬아<br/>
          입점문의 :<a class="purple">입점문의하기</a><span></span>제휴문의:<a class="purple">business@kurlycorp.com</a><br/>
          채용문의:<a class="purple">recruit@kurlycorp.com</a><br/>
          팩스: 070 - 7500 - 6098<span></span>이메일:<a class="purple">help@kurlycorp.com</a><br/>
          대량주문 문의:<a class="purple">kurlygift@kurlycorp.com</a><br/>

          <ul class="f042">
              <li>
                  <a><img alt="" src="https://res.kurly.com/pc/ico/1810/ico_instagram.png"/></a>
              </li>
              <li>
                  <a><img alt="" src="https://res.kurly.com/pc/ico/1810/ico_fb.png"/></a>
              </li>
              <li>
                  <a><img alt="" src="https://res.kurly.com/pc/ico/1810/ico_blog.png"/></a>
              </li>/
              <li>
                  <a><img alt="" src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png"/></a>
              </li>
              <li>
                  <a><img alt="" src="https://res.kurly.com/pc/ico/1810/ico_youtube.png"/></a>
              </li>
          </ul>
        </div>
      </div>
      <div class="footer05">
        <a class="f051">
            <img alt="" src="https://res.kurly.com/kurly/logo/isms_220310.png"/>
            <p>[인증범위] 마켓컬리 쇼핑몰 서비스 개발·운영<br/>[유효기간] 2022.01.19 ~ 2025.01.18</p>
        </a>
        <a class="f052">
            <img alt="" src="https://res.kurly.com/pc/ico/2001/logo_eprivacyplus.png"/>
            <p>개인정보보호 우수 웹사이트 ·<br/>개인정보처리시스템 인증 (ePRIVACY PLUS)</p>
        </a>
        <a class="f053">
            <img alt="" src="https://res.kurly.com/pc/service/main/2009/logo_payments.png"/>
            <p>고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한<br/>토스페이먼츠 구매안전(에스크로) 서비스를 이용하실 수 있습니다.</p>
        </a>
      </div>  
    </div>
    <div class="footer06">
        <p>마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.</p>
        <p>마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.</p>
        <p>© KURLY CORP. ALL RIGHTS RESERVED</p>
    </div>
  </footer>
  
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
