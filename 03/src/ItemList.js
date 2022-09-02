import Header from "./functions/Header";
import Footer from "./functions/Footer";
import './ItemList.css';

function List(){
    return<>
        <div class="il">
            <div class="il01">
                <h3>'<span>다이어트</span>' 에 대한 검색결과</h3>
                <div class="il011">
                    <div class="il011-1">총 567건</div>
                    <ul>
                        <li id="li-01">
                            <a>추천순</a>
                            <a><img alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMiA1YzMuODY0IDAgNyAzLjEzNiA3IDdzLTMuMTM2IDctNyA3LTctMy4xMzYtNy03IDMuMTM2LTcgNy03em0wIDEuM0E1LjcwOCA1LjcwOCAwIDAgMCA2LjMgMTJjMCAzLjE0MiAyLjU1OCA1LjcgNS43IDUuNyAzLjE0MiAwIDUuNy0yLjU1OCA1LjctNS43IDAtMy4xNDItMi41NTgtNS43LTUuNy01Ljd6bS0uMTIyIDcuOTgxYy41NTIgMCAuODk4LjM0Ljg5OC44NjUgMCAuNTE5LS4zNDYuODYtLjg5OC44Ni0uNTQgMC0uODk3LS4zNDEtLjg5Ny0uODYgMC0uNTI0LjM1Ny0uODY1Ljg5Ny0uODY1ek0xMi4wMyA4YzEuNDggMCAyLjQ3Ljg1NCAyLjQ3IDIuMDQ5IDAgLjgyNy0uNDEgMS40MDUtMS4xNDYgMS44NDMtLjcwOC40MTYtLjkwOC42OTItLjkwOCAxLjIyN3YuMzA4aC0xLjI1NGwtLjAwNi0uMzY4Yy0uMDQ4LS44MS4yNjUtMS4yOTcgMS4wMTEtMS43MzVsLjE1OS0uMDk5Yy41NDgtLjM1Ni43MzktLjYzNy43MzktMS4xMjggMC0uNTYyLS40NTQtLjk2Ny0xLjEzNi0uOTY3LS42OTcgMC0xLjE0NS40MjEtMS4xODkgMS4wOEg5LjVDOS41NDMgOC45MyAxMC40MjQgOCAxMi4wMyA4eiIgZmlsbD0iI0NDQyIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo="/></a>
                        </li>
                        <li>
                            <a>신상품순</a>
                        </li>
                        <li>
                            <a>판매량순</a>
                        </li>
                        <li>
                            <a> 혜택순</a>
                        </li>
                        <li>
                            <a>낮은 가격순</a>
                        </li>
                        <li>
                            <a>높은 가격순</a>
                        </li>
                    </ul>
                </div>
                <div class="il012">
                </div>
            </div>
        </div>
    </>
}
function Goodimg(props){
    return
  }
function Tag(props){
  return
}
function ItemList(){
    return(
        <>
            <Header></Header>
            <List></List>
            <Footer></Footer>
        </>
    );
}
export default ItemList;  