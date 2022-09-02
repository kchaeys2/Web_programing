import Header from "./functions/Header";
import Footer from "./functions/Footer";
import

function List(){
    return<>
        <div class="il">
            <div class="il01">
                <h3>'<span>다이어트</span>' 에 대한 검색결과</h3>
            </div>
        </div>
    </>
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