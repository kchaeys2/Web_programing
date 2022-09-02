import './Item.css';
import './App.css';
import Header from './functions/Header';
import Footer from './functions/Footer';

function Cover(){
    return    <section class="main">
        <div class="article">
            <div class="image">

            </div>
            <div class="tag">
                <div class="name">
                    <p class="n01">샛별배송</p>
                    <div class="n02">
                        <h2>[스키니랩]애플페논 풋사과 다이어트(14일분)</h2>
                        <button></button>
                    </div>
                    <p class="n03">가벼워지는 습관</p>
                </div>
                <div class="price">
                    <span class="percent">40%</span><span class="salePrice">15,180</span><span class="won">원</span>
                </div>
                <div class="price02">
                    <p>25,300원</p>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAyMSAyMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBzdHJva2U9IiNDQ0MiIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTAuNSIgY3k9IjEwLjUiIHI9IjYuOSIvPgogICAgICAgIDxwYXRoIGQ9Ik03LjggOC43MzJoMS4zOTdjLjA0OC0uNzI2LjU0MS0xLjE5IDEuMzA4LTEuMTkuNzUgMCAxLjI1LjQ0NyAxLjI1IDEuMDY1IDAgLjU0LS4yMS44NS0uODE0IDEuMjRsLS4xNzQuMTFjLS44Mi40ODEtMS4xNjUgMS4wMTctMS4xMTIgMS45MDhsLjAwNi40MDVoMS4zOHYtLjM0YzAtLjU4OC4yMi0uODkxLjk5OC0xLjM0OS44MS0uNDgyIDEuMjYxLTEuMTE4IDEuMjYxLTIuMDI3IDAtMS4zMTUtMS4wODgtMi4yNTQtMi43MTctMi4yNTQtMS43NjYgMC0yLjczNSAxLjAyMy0yLjc4MyAyLjQzMnptMi42MTYgNi4zNzRjLS41OTQgMC0uOTg3LS4zNzUtLjk4Ny0uOTQ1IDAtLjU3Ny4zOTMtLjk1Mi45ODctLjk1Mi42MDcgMCAuOTg3LjM3NS45ODcuOTUyIDAgLjU3LS4zOC45NDUtLjk4Ny45NDV6IiBmaWxsPSIjQ0NDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICAgIDwvZz4KPC9zdmc+Cg=="/>
                </div>
                <p class="notice">
                    로그인 후,적립 혜택이 제공됩니다.
                </p>
                <div class="more">
                    <dl>
                        <dt>베송</dt>
                        <dd>
                            <p class="title">샛별배송</p>
                            <p class="inform">23시 전 주문 시 내일 아침 7시 전 도착<br/>
                                (대구·부산·울산 샛별배송 운영시간 별도 확인)</p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>판매자</dt>
                        <dd><p class="title">컬리</p></dd>
                    </dl>
                    <dl>
                        <dt>포장타입</dt>
                        <dd>
                            <p class="title">상온(종이포장)</p>
                            <p class="inform">택배배송은 에코 포장이 스티로폼으로 대체됩니다.</p>
                        </dd>
                    </dl>
                    <dl>
                        <dt>판매단위</dt>
                        <dd><p class="title">1통</p></dd>
                    </dl>
                    <dl>
                        <dt>중량/용량</dt>
                        <dd><p class="title">850mgX14포</p></dd>
                    </dl>
                    <dl>
                        <dt>알레르기정보</dt>
                        <dd>
                            <p class="inform"> - 우유, 대두 함유
                                -  본 제품은 알류(가금류), 메밀, 땅콩, 밀, 고등어, 게, 새우, 돼지고기, 복숭아, 토마토, 아황산류, 호두, 닭고기, 쇠고기, 오징어, 조개류(굴,전복, 홍합 포함), 잣을 원료로 사용한 제품과 같은 제조시설에서 제조하고 있습니다.</p>
                        </dd>
                    </dl>

                </div>
                <div class="order">
                    <div class="num"> 
                        <dl>
                            <dt>구매수량</dt>
                            <div class="button">
                                <button id="left"></button>
                                <div>1</div>
                                <button id="right"></button>
                            </div>
                        </dl>
                    </div>
                    <div class="finPrice">
                        <div class="originPrice">
                            <span class="coin">총 상품금액:</span><span class="salePrice">15,180</span><span class="won">원</span>
                        </div>
                        <div class="saving">
                            <span class="yellow">적립</span><span class="text">로그인 후, 적립 혜택 제공</span>
                        </div>
                        <div class="p03">
                            <button class="p031">
                                <span>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K"/>
                                </span>
                            </button>
                            <button class="p032">
                                <span>
                                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg=="/>
                                </span>
                            </button>
                            <div>
                                <button class="p033"><span>장바구니</span></button>
                            </div>
                        </div>
                    </div>
                    <div class="button">

                    </div>

                </div>

            </div>
        </div>
        <nav class="nav">
            <nav class="navnav">
                <div class="nav01">
                    <a>
                        <span>상품설명</span>
                    </a>
                </div>
                <div class="nav02">
                    <a>
                        <span>상세정보</span>
                    </a>
                </div>
                <div class="nav03">
                    <a>
                        <span>후기(989)</span>
                    </a>
                </div>
                <div class="nav04">
                    <a>
                        <span>문의</span>
                    </a>
                </div>
            </nav>
        </nav>
    
        <div class="itemData">
            <div id="description">
                <div class="goods_wrap">
                    <div class="goods01">
                        <div class="goods011">
                            <img src="https://img-cf.kurly.com/shop/data/goodsview/20201224/gv10000146517_1.jpg"/>
                        </div>
                        <div class="goods012">
                            <h3>
                                <small>한 알로 누리는 가벼움</small>
                                [스키니랩]<br/>애플페논 풋사과<br/>다이어트
                            </h3>
                            <p>싱그러움이 매력적인 초록빛 풋사과가 체지방 감소에 도움을 줄 수 있다는 사실, 알고 계셨나요? 풋사과에는 일반 숙성사과에 비해 10배 이상 많은 폴리페놀이 함유되어 있다고 하는데요. 스키니랩은 다이어트 신소재로 각광받는 식물성 자연 원료, 풋사과추출물 애플페논을 한 알에 담아 준비했어요. 풋풋하게 영근 풋사과를 250배 농축한 후 애플페논 성분을 추출해, 한 알에 무려 372mg의 폴리페놀을 담았답니다. 하루 1포, 꾸준히 섭취해보세요. 한결 가벼워진 몸을 마주할 수 있을 거예요.</p>
                        </div>
                    </div>
                    <div class="goods02">
                        <h3><span>Kurly's Check Point</span></h3>
                        <div>
                            <img src="https://img-cf.kurly.com/shop/data/goodsview/20201224/gv00000146519_1.png"/>
                        </div>
                    </div>
                    <div class="goods03">
                        <h3><span>Kurly’s Tip</span></h3>
                        <div class="tip_box">
                            <div class="contextlast">
                                <p class="words">
                                    <strong>중량안내</strong>
                                    <b>·</b>
                                    1박스(850mg X 14포)로, 총 14일분이 들어있어요. 
                                </p>
                                <p class="words">
                                    <strong>유의사항</strong>
                                    <b>·</b>
                                    본 제품은 질병의 예방 및 치료를 위한 의약품이 아닌 건강기능식품입니다.
                                    <br/>
                                    <b>·</b>
                                    임신부나 수유부, 어린이, 특정 성분에 알레르기가 있으신 분이 섭취할 경우에는 원료 성분을 꼭 확인한 후 섭취하세요.
                                    <br/>
                                    <b>·</b>
                                    사과 알레르기가 있는 분들은 섭취 시 주의하세요. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="goods04">
                        <h3><span>Kurly’s Note</span></h3>
                        <div class="context">
                            <p class="words">
                                <strong>기능 정보</strong>
                                <b>·</b>
                                [풋사과추출물 애플페논] 체지방 감소에 도움을 줄 수 있음 
                            </p>
                        </div>
                    </div>
                    <div class="detail">
                        <div class="image">
                            <img alt='' src='https://img-cf.kurly.com/shop/data/goodsview/20201224/gv00000146518_1.jpg'></img>
                        </div>
                        <div class="goods05">
                            <h3>상품고시정보</h3>
                            <ul>
                                <li class="goods051">제품명</li>
                                <li class="goods052">상품설명 및 상품이미지 참조</li>
                                <li class="goods051">식품의 유형</li>
                                <li class="goods052">상품설명 및 상품이미지 참조</li>
                                <li class="goods051">제조업소의 명칭과 소재지(수입품의 경우 수입업소명, 제조업소명 및 수출국명)</li>
                                <li class="goods052">상품설명 및 상품이미지 참조</li>
                                <li class="goods051">제조연월일, 유통기한</li>
                                <li class="goods052">상품설명 및 상품이미지 참조</li>
                                <li class="goods051">포장단위별 내용물의 용량(중량), 수량</li>
                                <li class="goods052">상품설명 및 상품이미지 참조</li>
                                <li class="goods051">원재료명 및 함량(농수산물의 원산지 표시에 관한 법률에 따른 원산지 표시 포함)</li>
                                <li class="goods052">상품설명 및 상품이미지 참조</li>
                                <li class="goods051">영양정보</li>
                                <li class="goods052">상품설명 및 상품이미지 참조</li>
                                <li class="goods051">기능정보</li>
                                <li class="goods052">상품설명 및 상품이미지 참조</li>
                                <li class="goods051">섭취량, 섭취방법 및 섭취 시 주의사항 및 부작용 가능성</li>
                                <li class="goods052">상품설명 및 상품이미지 참조</li>
                                <li class="goods051">질병의 예방 및 치료를 위한 의약품이 아니라는 내용의 표현</li>
                                <li class="goods052">본 제품은 질병의 예방 및 치료를 위한 의약품이 아닙니다.</li>
                                <li class="goods051">유전자변형건강기능식품에 해당하는 경우의 표시</li>
                                <li class="goods052">해당사항없음</li>
                                <li class="goods051">수입식품에 해당하는 경우 “수입식품안전관리특별법에 따른 수입신고를 필함”의 문구</li>
                                <li class="goods052">사전심의필</li>
                                <li class="goods051">소비자상담 관련 전화번호</li>
                                <li class="goods052">마켓컬리 고객행복센터 (1644-1107)</li>
                                <li class="goods051">소비자안전을 위한 주의사항</li>
                                <li class="goods052">상품설명 및 상품이미지 참조</li>
                            </ul>
                        </div>
                        <div class="goods06">
                            <div class="goods061">
                                <span>WHY KURLY</span>
                            </div>
                            <div class="goods062">
                                <dl class="goods0621">
                                    <dt>깐깐한 상품위원회</dt>
                                    <dd>
                                        나와 내 가족이 먹고 쓸 상품을 고르는<br/>
                                        마음으로 매주 상품을 직접 먹어보고,<br/>
                                        경험해보고 성분, 맛, 안정성 등 다각도의<br/>
                                        기준을 통과한 상품만을 판매합니다.<br/><span>(온라인 기준 / 자사몰, 직구 제외)</span>
                                    </dd>
                                </dl>
                                <dl class="goods0622">
                                    <dt >차별화된 Kurly Only 상품</dt>
                                    <dd>
                                        전국 각지와 해외의 훌륭한 생산자가<br/>
                                        믿고 선택하는 파트너, 마켓컬리.<br/>
                                        3천여 개가 넘는 컬리 단독 브랜드, 스펙의<br/>
                                        Kurly Only 상품을 믿고 만나보세요.<br/><span>(온라인 기준 / 자사몰, 직구 제외)</span>
                                    </dd>
                                </dl>
                                <dl class="goods0623">
                                    <dt>신선한 풀콜드체인 배송</dt>
                                    <dd>
                                        온라인 업계 최초로 산지에서 문 앞까지<br/>
                                        상온, 냉장, 냉동 상품을 분리 포장 후<br/>
                                        최적의 온도를 유지하는 냉장 배송 시스템,<br/>
                                        풀콜드체인으로 상품을 신선하게 전해드립니다.<span>(샛별배송에 한함)</span>
                                    </dd>
                                </dl>
                                <dl class="goods0624">
                                    <dt>고객, 생산자를 위한 최선의 가격</dt>
                                    <dd>
                                        매주 대형 마트와 주요 온라인 마트의 가격<br/>
                                        변동 상황을 확인해 신선식품은 품질을<br/>
                                        타협하지 않는 선에서 최선의 가격으로,<br/>
                                        가공식품은 언제나 합리적인 가격으로<br/>
                                        정기 조정합니다.
                                    </dd>
                                </dl>
                                <dl class="goods0625">
                                    <dt>환경을 생각하는 지속 가능한 유통</dt>
                                    <dd>
                                        친환경 포장재부터 생산자가 상품에만<br/>
                                        집중할 수 있는 직매입 유통구조까지,<br/>
                                        지속 가능한 유통을 고민하며 컬리를 있게<br/>
                                        하는 모든 환경(생산자, 커뮤니티, 직원)이<br/>
                                        더 나아질 수 있도록 노력합니다.
                                    </dd>
                                </dl>
                            </div>
                        </div>  
                    </div>
                    <div class="goods07">
                        <div class="goods071">
                            <div>
                                <h5>고객행복센터</h5>
                                <p>궁금하신 점이나 서비스 이용에 불편한 점이 있으신가요?<span>문제가 되는 부분을 사진으로 찍어 아래 중 편하신 방법으로 접수해 주시면 빠르게 도와드리겠습니다.</span></p>
                            </div>
                            <ul>
                                <li>
                                    <strong>전화 문의 1644-1107</strong>
                                    <span>오전 7시~오후 7시(연중무휴)</span>
                                </li>
                                <li>
                                    <strong>카카오톡 문의</strong>
                                    <span>오전 7시~오후 7시 (연중무휴)</span>
                                    <small>
                                        마켓컬리<br/>
                                        대화창에 문의 및 불편사항을<br/>
                                        남겨주세요.
                                    </small>
                                </li>
                                <li>
                                    <strong>홈페이지 문의</strong>
                                    <span>
                                        24시간 접수 가능<br/>
                                        로그인 {'>'} 마이컬리 {'>'} 1:1문의
                                    </span>
                                    <small>고객센터 운영 시간에 순차적으로<br/>답변해드리겠습니다.</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="goods08">
                        <strong>교환 및 환불 안내</strong>
                        <p>교환 및 환불이 필요하신 경우 고객행복센터로 문의해주세요.</p>
                        <button>닫기</button>
                    </div>
                    <Goods09/>
                    <div class="goods08">
                        <strong>주문 취소 안내</strong>
                        <p class="goods081">- [주문완료] 상태일 경우에만 주문 취소 가능합니다.<br/>- [마이컬리 {'>'} 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.</p>
                        <button>닫기</button>
                    </div>
                    <Goods10/>
                    <div class="goods08">
                        <strong>배송관련 안내</strong>
                        <p>배송 과정 중 기상 악화 및 도로교통 상황에 따라 부득이하게 지연 배송이 발생될 수 있습니다.</p>
                        <button>닫기</button>
                    </div>
                </div>
            </div>
        </div>    
    </section>
}
function Goods09(){
    return<>
        <div class="goods09">
            <strong>01. 상품에 문제가 있는 경우</strong>
            <p class="goods091">
            받으신 상품이 표시·광고 내용 또는 계약 내용과 다른 경우에는 상품을 받은 날부터 3개월 이내,<br/>
그 사실을 알게 된 날부터 30일 이내에 교환 및 환불을 요청하실 수 있습니다.<br/>
상품의 정확한 상태를 확인할 수 있도록 사진을 함께 보내주시면 더 빠른 상담이 가능합니다.
                <span>※ 상품에 문제가 있는 것으로 확인되면 배송비는 컬리가 부담합니다.</span>
            </p>
        </div>
        <div class="goods09">
            <strong>02. 단순 변심, 주문 착오의 경우</strong>
            <p class="goods092">
                <strong id="goods092S">신선 / 냉장 / 냉동 식품</strong>
                재판매가 불가한 상품의 특성상, 단순 변심, 주문 착오 시 교환 및 반품이 어려운 점 양해 부탁드립니다.<br/>
                <strong>유통기한 30일 이상 식품 (신선 / 냉장 / 냉동 제외) & 기타 상품</strong>
                상품을 받은 날부터 7일 이내에 고객행복센터로 문의해주세요.<br/>
                <br/><span>※ 단순 변심으로 인한 교환 또는 환불의 경우 고객님께서 배송비 6,000원을 부담하셔야 합니다.<br/>(주문 건 배송비를 결제하셨을 경우 3,000원)</span>
            </p>
        </div>
        <div class="goods09">
            <strong>03. 교환·반품이 불가한 경우</strong>
            <p class="goods093">
            다음에 해당하는 교환·환불 신청은 처리가 어려울 수 있으니 양해 부탁드립니다.
            <span>고객님의 책임 있는 사유로 상품이 멸실되거나 훼손된 경우</span>
            <span>고객님의 사용 또는 일부 소비로 상품의 가치가 감소한 경우</span>
            <span>시간이 지나 다시 판매하기 곤란할 정도로 상품의 가치가 감소한 경우</span>
            <span>복제가 가능한 상품의 포장이 훼손된 경우</span>
            <span>고객님의 주문에 따라 개별적으로 생산되는 상품의 제작이 이미 진행된 경우</span>
            </p>
        </div>

    </>
}
function Goods10(){
    return<>
        <div class="goods09">
            <strong>주문 취소 관련</strong>
            <p class="goods094">
            - [배송준비중] 부터는 취소가 불가하니, 반품으로 진행해주세요. (상품에 따라 반품이 불가할 수 있습니다.)
<br/>- 주문마감 시간에 임박할수록 취소 가능 시간이 짧아질 수 있습니다.
<br/>- 비회원은 App 또는 모바일 웹사이트에서 [마이컬리 {'>'} 비회원 주문조회 페이지] 에서 취소가 가능합니다.
<br/>- 일부 예약상품은 배송 3~4일 전에만 취소 가능합니다.
<br/>- 주문상품의 부분취소는 불가능합니다. 전체 주문 취소 후 다시 구매 해주세요.
            </p>
        </div>
        <div class="goods09">
            <strong>결제 승인 취소 / 환불 관련</strong>
            <p class="goods095">
            - 카드 환불은 카드사 정책에 따르며, 자세한 사항은 카드사에 문의해주세요.
<br/>- 결제 취소 시, 사용하신 적립금과 쿠폰도 모두 복원됩니다.
            </p>
        </div>

    </>
}

function Item(){
    return(
        <div>
        <Header/>
        <Cover></Cover>
        <Footer/>
        </div>
    );
}

export default Item;