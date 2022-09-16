import Ad from "./functions/Ad";
import Slider from './functions/Slider';
import Goods from './functions/Goods';
import dummy from './Data.json';
import Instagram from "./functions/Instagram";
import Timer from './functions/Timer';

function Timegoods(){
    return<section class="spacialSale">
    <div class="chuseok">
        <div class="countdown">
            <h2>일일특가</h2>
            <h3>24시간 한정 특가</h3>
            <div class="timer">
              <Timer/>
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
            <Timer/>
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

function Home(){
    return(
        <>
            <Slider/>
            {dummy.caption01.map(caption=>(
                <Goods item={caption.item}title={caption.title} arrow={caption.arrow} sub={caption.sub} listBtn={caption.button} listBtn_more={caption.moreBtn} more={caption.more}/>
            ))}
            <Ad/>
            <Timegoods></Timegoods>
            <Timegoods02/>
            {dummy.caption02.map(caption=>(
                <Goods title={caption.title} arrow={caption.arrow} sub={caption.sub} subtitle={caption.subtitle} listBtn={caption.button} listBtn_more={caption.moreBtn} more={caption.more}/>
            ))}
            <Ad/>
            <Instagram/>
        </>
    );
}
export default Home;
