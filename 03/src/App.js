import './App.css';

function Header(){
  return<div class="header_inform">
    <div class="login">
      <a class="purple">회원가입</a> <div></div>  <a>로그인</a> <div></div> <a>고객센터<img src="https://res.kurly.com/pc/ico/1908/ico_down_16x10.png"></img></a>
    </div>
  </div>
}
function Search(){
  return<div class="header_search">
    <div class="left">
      <img src="image/kurly_img.png"/>
      <button class="purple" type="menu">마켓컬리</button>
      <div></div>
      <button type="menu" class="gray">뷰티컬리</button>
    </div>
    <div class="search">
      <input type="text" value="검색어를 입력해주세요"></input>
      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgzNnYzNkgweiIvPgogICAgICAgIDxnIHN0cm9rZT0iIzVGMDA4MCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Im0yNi4wODEgMjYuMDgxLTQuMTItNC4xMk0xNi40NjcgMjMuMzM0YTYuODY3IDYuODY3IDAgMSAwIDAtMTMuNzM0IDYuODY3IDYuODY3IDAgMCAwIDAgMTMuNzM0eiIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="></img>
    </div>
    <div class="service">
      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM2IDM2SDBWMGgzNnoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4LjcgNikiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjciPgogICAgICAgICAgICA8cGF0aCBkPSJNOS4zMDYgMjRTMCAxNi41NDQgMCA5LjMwNmE5LjMwNiA5LjMwNiAwIDAgMSAxOC42MTIgMEMxOC42MTIgMTYuNTQ0IDkuMzA2IDI0IDkuMzA2IDI0eiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgY3g9IjkuMjEyIiBjeT0iOS4xMjMiIHI9IjIuNzg0Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"></img>
      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yOC45MjcgOC44OTNhNi40NiA2LjQ2IDAgMCAwLTkuMTM5IDBsLTEuODI5IDEuODI4LTEuODI3LTEuODI4YTYuNDYyIDYuNDYyIDAgMSAwLTkuMTQgOS4xMzhMOC44MiAxOS44Nmw4LjQzMiA4LjQzNGExIDEgMCAwIDAgMS40MTQgMGw4LjQzMy04LjQzNGgwbDEuODI4LTEuODI4YTYuNDYgNi40NiAwIDAgMCAwLTkuMTM4eiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEuNyIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg=="></img>
      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTM2IDM2SDBWMGgzNnoiLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjE2NCA2LjU0NykiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjciPgogICAgICAgICAgICA8cGF0aCBkPSJtMjUuNjggMy42Ni0yLjcyIDExLjU3SDcuMzdMNC42NiAzLjY2eiIvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIyMC41MiIgY3k9IjIwLjc4IiByPSIyLjE0Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjkuODEiIGN5PSIyMC43OCIgcj0iMi4xNCIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMCAwaDMuOGwxLjc2IDcuNSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="></img>
    </div>
  </div>

}
function Nav(){
  return<div class = "header_list">
    <div class="category">
      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMTZ2MS43SDBWMHptMCA2LjE1aDE2djEuN0gwdi0xLjd6bTAgNi4xNWgxNlYxNEgwdi0xLjd6IiBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg=="/>
      <span>카테고리</span>
    </div>
    <ul class="list">
      <li>
          <span>신상품</span>
      </li>
      <li>
          <span>베스트</span>
      </li>
      <li>
          <span>알뜰쇼핑</span>
      </li>
      <li>
          <span>특가/혜택</span>
      </li>
    </ul>
    <div class="deliver">
      <a><span class="purple">샛별 · 낮</span>배송안내</a>
    </div>
  </div>
}
function Homeimg(){
  return<div class="home_image">
        <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/4a0cd847-7e75-4039-9b97-cd87d862654f.jpg"/>
  </div>
}
function Goods1(){
  return<section class="section01">
    <div class="caption01">
      <span>이 상품 어때요?</span>
    </div>
    <div class="list">
      <button type="button"></button>
      <button id = "reverse" type="button"></button>
      <div class="li">
          <div class="img">
            <img class = "basket" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="/>
            <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1644543531994l0.jpg"/>
          </div>
          <div class="tag">
              <div class="name">
                  <h3>[아넬라]짜먹는 아넬라 HOP 5종</h3>
              </div>
              <div class="price">
                  <span class="percent">20%</span><span class="salePrice">2,400원</span>
                  <span class="originPrice">3,000원</span>
              </div>
          </div>
      </div>
      <div class="li">
          <div class="img">
              <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1653035364597l0.jpg"/>
          </div>
          <div class="tag">
              <div class="name">
                  <h3>[설치배송][LG전자]DIOS 오브제 컬렉션 식기세척기</h3>
              </div>
              <div class="price">
                  <span class="percent">33%</span><span class="salePrice">1,096,200원</span>
                  <span class="originPrice">1,652,000원</span>
              </div>
          </div>
      </div>
      <div class="li">
          <div class="img">
              <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1656921395862l0.jpg"/>
          </div>
          <div class="tag">
              <div class="name">
                  <h3>[설치배송][LG전자]TROMM ThinQ 드럼세탁기</h3>
              </div>
              <div class="price">
                  <span class="percent">33%</span><span class="salePrice">920,900원</span>
                  <span class="originPrice">1,387,900원</span>
              </div>
          </div>
      </div>
      <div class="li">
          <div class="img">
              <img class = "basket" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="/>
              <img src="https://img-cf.kurly.com/cdn-cgi/image/width=400,format=auto/shop/data/goods/1641453472687l0.jpg"/>
          </div>
          <div class="tag">
              <div class="name">
                  <h3>[선물세트]그래놀라가 들어간 담백견과 4종세트 1호</h3>
              </div>
              <div class="price">
                  <span class="percent">10%</span><span class="salePrice">16,110원</span>
                  <span class="originPrice">17,900원</span>
              </div>
          </div>
      </div>
    </div>
  </section>
}
function Ad(){
  return<section class = "ad">
    <img src="https://product-image.kurly.com/banner/random-band/pc/img/e7b19a08-def2-4e5a-bcb5-dd48a20864fd.jpg"/>
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
              <img class="main" src="https://img-cf.kurly.com/shop/data/goods/1614747154996z0.jpg"/>
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
function Instagram(){
  return<section class="sectionfin">
  <div class="instagram">
      <div class="title">
          <h1>인스타그램 고객 후기</h1>
          <p>더 많은 고객 후기가 궁금하다면?</p>
      </div>
      <div class="image">
        /**url 만료 */
          <a><img class="insta" src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/299750222_3189510418045092_6083173906281154002_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=zhbO-waFtAcAX8tPuF_&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-XXKOABjQbMgmDbR01OYY_MFOAUN-a2lUhIPcrk5IcYg&oe=63037846"/></a>
          <a><img class="insta" src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/298362099_586334389767927_3208823048695355163_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=CApSo3nxqBQAX9SOc9S&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-Fg0T7iTKcFLE4pkix4xhJApTmLZ14ncQDSEBkk7neIw&oe=630380AB"/></a>
          <a><img class="insta" src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/298093370_155439073738448_3063437925065164283_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=jDH6VRLmaNIAX-aETX6&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_8AsOUSBUa0e076qazEiZC6XJ_yBjp4VYCi8jZWvbyBA&oe=630265E1"/></a>
          <a><img class="insta" src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/297114872_518510886697838_7788308058485534607_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=7tnsoPLKxRsAX83k5tC&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8Pe3yvgITZNxU46XaGcFSpgUJKw9zUus-wZfr4mi7ukg&oe=63038C61"/></a>
          <a><img class="insta" src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/296932394_171778925337107_1387866932129173530_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ZMVs_-bA9V8AX87wVeI&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT85xNOfUxnPVvK--D90wIkEXnaIsUx0kg3wtyopIWIOuQ&oe=6302B4BF"/></a>
          <a><img class="insta" src="https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/295914844_775288327220245_3783518540097333256_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=lsThJxRZQ3kAX9duW3r&_nc_ht=scontent-nrt1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-dXuxtugDheKjYJcrOW5tnGvSqa98kCg9CpMxcKqSEBg&oe=63020C4C"/></a>
      </div>
      <div class="more">
          <p>더 많은 고객 후기가 궁금하다면?</p>
          <a>@marketkurly_regram</a>
      </div>
    </div>
  </section>
}
function Footer(){
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
                  <a><img src="https://res.kurly.com/pc/ico/1810/ico_instagram.png"/></a>
              </li>
              <li>
                  <a><img src="https://res.kurly.com/pc/ico/1810/ico_fb.png"/></a>
              </li>
              <li>
                  <a><img src="https://res.kurly.com/pc/ico/1810/ico_blog.png"/></a>
              </li>/
              <li>
                  <a><img src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png"/></a>
              </li>
              <li>
                  <a><img src="https://res.kurly.com/pc/ico/1810/ico_youtube.png"/></a>
              </li>
          </ul>
        </div>
      </div>
      <div class="footer05">
        <a class="f051">
            <img src="https://res.kurly.com/kurly/logo/isms_220310.png"/>
            <p>[인증범위] 마켓컬리 쇼핑몰 서비스 개발·운영<br/>[유효기간] 2022.01.19 ~ 2025.01.18</p>
        </a>
        <a class="f052">
            <img src="https://res.kurly.com/pc/ico/2001/logo_eprivacyplus.png"/>
            <p>개인정보보호 우수 웹사이트 ·<br/>개인정보처리시스템 인증 (ePRIVACY PLUS)</p>
        </a>
        <a class="f053">
            <img src="https://res.kurly.com/pc/service/main/2009/logo_payments.png"/>
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
      <Search></Search>
      <Nav></Nav>
      <Homeimg></Homeimg>
      <Goods1></Goods1>
      <Ad></Ad>
      <Timegoods></Timegoods>
      <Instagram></Instagram>
      <Footer></Footer>
    </div>
  );
}

export default App;
