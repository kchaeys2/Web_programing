import insta_01 from '../image/instagram_img01.jpg';
import insta_02 from '../image/instagram_img02.jpg';
import insta_03 from '../image/instagram_img03.jpg';
import insta_04 from '../image/instagram_img04.jpg';
import insta_05 from '../image/instagram_img05.jpg';
import insta_06 from '../image/instagram_img06.jpg';


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
        <div class="Appmore">
            <p>더 많은 고객 후기가 궁금하다면?</p>
            <a>@marketkurly_regram</a>
        </div>
      </div>
    </section>
  }

export default Instagram;