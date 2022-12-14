import './ItemList.css';
import dummy from "./Data.json";
import { Link, useLoaderData, useLocation } from 'react-router-dom';
function List(props){
    return<>
        <div class="il">
            <div class="il01">
                <h3>'<span>{props.search}</span>' 에 대한 검색결과</h3>
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
                <Goods/>
                <div class="buttonsNP">
                    <a><img alt=" " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAHCAQAAABwkq/rAAAAHUlEQVR42mNgAIPi/8X/kWkwA8SE0UQIMJAsCKMBBzk27fqtkcYAAAAASUVORK5CYII="/></a>
                    <a><img alt=" " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAQAAABqrk9lAAAAGElEQVR42mNgAIPi/8X/4QwwE5PBQJADAAKSG3cyVhtXAAAAAElFTkSuQmCC"/></a>
                    <a>1</a>
                    <a>2</a>
                    <a>3</a>
                    <a>4</a>
                    <a>5</a>
                    <a>6</a>
                    <a>7</a>
                    <a>8</a>
                    <a>9</a>
                    <a>10</a>
                    <a><img alt=" " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAQAAABqrk9lAAAAGUlEQVR42mMo/l/8nwECQEwCHEwGhAlRBgA2mht3SwgzrwAAAABJRU5ErkJggg=="/></a>
                    <a><img alt=" " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAHCAQAAABwkq/rAAAAIElEQVR42mMo/l/8n4GBgQFGQ5kgDowmQZCwAMImhDkAb0k27Zcisn8AAAAASUVORK5CYII="/></a>
                </div>
            </div>
        </div>
    </>
}
function Goods(props){
    return<div class="il012">
        {dummy.ItemList.map(item=>(
            <div class="li012-1">
                <Goodimg image={item.image} key={item.id}/>
                <Tag tagS03={item.tagS03} subname={item.subname} name={item.name} price={item.price} per={item.per} origin={item.origin} using={item.using} intro={item.intro} key={item.id}/>
            </div>
        ))}
    </div>
}
function Goodimg(props){
    return<>
    <Link to={"/Item"}>
        <div class="goodimg01">
            <img alt=" " src={props.image}/>
            <div><button><img alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="/></button></div>
        </div>
        </Link>
    </>
  }
function Tag(props){
  return<>
    <div class="tag01">
        <span class="tagS01"><span>{props.subname}</span></span>
        <div class="tagTitle">{props.name}</div>
        <div class="tagPrices">
            <div class="tagP01">
                <div class="tagS04"><span>{props.per}</span></div>
                <div class="tagS02"><span>{props.price}</span></div>
            </div>
            <span class="tagS05">{props.origin}</span>
        </div>
        <p>{props.intro}</p>
        <div class={props.tagS03}><span>{props.using}</span></div>
    </div>
  </>
}
function ItemList(){
    const {state} = useLocation();

    return(
        <>
            <List search={state}/>
        </>
    );
}
export default ItemList;  