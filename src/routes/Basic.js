import React from 'react';
import './Basic.css';

function Basic () {
    return(
        <section className="basic">
            <div className="basic1">
                <div className="row">
                    <p>Row 1</p>
                    <p>Row 2</p>
                    <p>Row 3</p>
                    <p>Row 4</p>
                    <p>Row 5</p>
                </div>
                <div className="column">
                    <p>Col 1</p>
                    <p>Col 2</p>
                    <p>Col 3</p>
                    <p>Col 4</p>
                    <p>Col 5</p>
                </div>
                <div className="rowCmt">
                → / flex-direction: column
                </div>
                <div className="columnCmt">
                ↓ / flex-direction: row
                </div>
            </div>
            
            <div className="units">
                <p>
                    <h3><span>vh, vw</span></h3>
                    vh는 높이값의 1/100이다. 예를들어 브라우저 높이가 900px이면 1vh는 9px,
                    뷰포트 너비가 750px이면 1vw는 7.5px이다.
                    .main 에 height:  100 vh 값을 주었다는것은 브라우저 높이값 만큼 높이를 쓴다는 것이다. 
                </p>
                <p>
                    <h3><span>vmin, vmax</span></h3>
                    vmin과 vmax는 너비와 높이에 따라 최대값과 최소값을 지정할 수 있다.
                    예를들어, 브라우저 너비가 1100px, 높이가 700px이면 1vmin은 7px, 1vmax는 11px이다.
                    브라우저 너비가 800px, 높이가 1080px이면 1vmin은 8px, 1vmax는 10.8px이다.
                    따라서, 터치화면 양변에 가득차는 정사각형의 요소는 100vmin, 100vmax이다.

                    브라우저 너비가 800px, 높이가 1080px인경우,
                    .box &#123; height:100vmin; width: 100vmin; &#125; 을 주었다면,
                    가로값에 맞춰진거라서 세로로는 조금 짧게 표현 될것이다.
                    반대로 .box &#123; height:100vmax; width: 100vmax; &#125; 을 주었다면,
                    세로에 맞춰진거라서 내용이 가로범위를 넘어서서 뷰포트보다 넘쳐질것이다. 

                    너비이건 높이이건 작은 부분에 맞출것이면 vmin, 넓은 부분에 맞출것이면 vmax를 사용한다.
                </p>
                <p>
                    <h3><span>rem</span></h3>
                    em의 경우 하위에 자식 태그들이 많아지면 계속 기준값이 변경된다. 
                    rem은 최상위 태그에 기준을 삼는데 보통은 html 태그가 기준이된다.
                    font-size뿐만 아니라 Grid System, UI Style등을 위해서도 사용된다.
                    html &#123; font-size:14px; &#125;
                    .Container &#123; width:70rem; &#125;// 14px * 70 = 980px;
                </p>
            </div>
        </section>  
    )
}

export default Basic;