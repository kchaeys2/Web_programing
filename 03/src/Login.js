import './Login.css';
import { useEffect, useState } from 'react';

function Login(){
    const[login,setLogin] = useState({
        id: "",
        password: "",
    })
    const handleLogin = (e) =>{
        setLogin({
            [e.target.name]: e.target.value,
        })
    }
    return(
        <div class="LoginContainer">
            <div class="LoginTitle">로그인</div>
            <div class="LoginMain">
                <form>
                    <div class="Login01">
                        <div class="Login011">
                            <div><input id="id" name="id" type="text" placeholder="아이디를 입력해주세요" onChange={handleLogin}/></div>
                        </div>
                        <div class="Login011">
                            <div><input password="password" name="password" type="password" placeholder="비밀번호를 입력해주세요" onChange={handleLogin}/></div>
                        </div>
                    </div>
                    <div class="Login02">
                        <span>아이디 찾기</span> <span class="middleSpan"></span> <span>비밀번호 찾기</span>
                    </div>
                    <div class="Login03">
                        <button><span>로그인</span></button>
                        <button><span>회원가입</span></button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;