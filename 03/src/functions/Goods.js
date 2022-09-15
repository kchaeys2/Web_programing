import dummy from '../Data.json';

function Goodimg(props){
    return<div class="img">
      <div class={props.purple}><span>{props.purpleName}</span></div>
    <img class = {props.basket} alt="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="/>
    <img src={props.image} alt=""/>
  </div>
  }
function Tag(props){
  return<div class="tag">
    <div class="name">
        <h3>{props.name}</h3>
    </div>
    <div class="price">
        <span class="percent">{props.percent}</span><span class="salePrice">{props.salePrice}</span>
        <span class="originPrice">{props.originPrice}</span>
    </div>
</div>
}
function Goods1(props){
  return<section class="section01">
    <div class="caption01">
      <span class="title">{props.title}</span><img class={props.arrow} alt='' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0wIDBoMzJ2MzJIMHoiLz4KICAgICAgICA8cGF0aCBkPSJtMTAuOTUyIDIzLjM4NCAyLjA5NiAyLjE0NiAxMC4wNTUtOS44MjUtOS43MDEtMTAuMjc4LTIuMTgyIDIuMDYgNy42NzcgOC4xMzN6IiBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICAgIDwvZz4KPC9zdmc+Cg=='/>
      <p class={props.sub}>{props.subtitle}</p>
      <ul class={props.listBtn}>
      {dummy.button.map(btn=>(
          <li>
            <button>{btn.name}</button>
          </li>
      ))}
      </ul>
    </div>
    <div class="list">
      <button type="button"></button>
      <button id = "reverse" type="button"></button>
      {dummy.items.map(item=>(
          <div class="li">
              <Goodimg basket={item.basket} image={item.image} key={item.id} purpleName={item.purpleName} purple={item.purple}/>
              <Tag name={item.name} percent={item.percent} salePrice={item.salePrice} originPrice={item.originPrice} purpleName={item.purpleName} purple={item.purple} key={item.id}/>
          </div>
      ))}
    </div>
    <div class={props.listBtn_more}><span>{props.more}</span></div>
  </section>
}

  export default Goods1;