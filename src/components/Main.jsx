import { useState } from 'react';

function Main() {
  const [target, setTarget] = useState('');
  const [hours, setHours] = useState('');
  const [days, setDays] = useState(null);

  const calculateDays = () => {
    const daysRequired = Math.ceil(10000 / hours);
    setDays(daysRequired);
  };

  return (
    <main>
      <p className="motivational-text">"연습은 어제의 당신보다 당신을 더 낫게 만든다."</p>
      <section className="explanation">
        <img src="/img/quotes.png" alt="quotes" className="quotes" />
        <p>
          <strong>1만 시간의 법칙</strong>은<br />
          어떤 분야의 전문가가 되기 위해서는<br />
          최소한 1만 시간의 훈련이 필요하다는 법칙이다.
        </p>
      </section>
      <p className="goal-setting">
        나는 <input id="target-field" placeholder="예)프로그래밍" value={target} onChange={(e) => setTarget(e.target.value)} /> 전문가가 될 것이다.<br />
        그래서 앞으로 매일 하루에<span> </span><input id="daily-hours" placeholder="예)5시간" value={hours} onChange={(e) => setHours(e.target.value)} /> 시간씩 훈련할 것이다.
      </p>
      <section className="calculate">
        <button type="button" className="primary" id="calculate" onClick={calculateDays}>나는 며칠 동안 훈련을 해야<span> </span>1만 시간이 될까?</button>
      </section>
      {days && (
        <p className="result">
          당신은 <strong id="target-output">{target}</strong> 전문가가 되기 위해서<br />
          대략 <strong id="days-output">{days}</strong> 일 이상 훈련하셔야 합니다! :)
        </p>
      )}
      <section className="buttons">
        <button type="button" className="action" id="open-dialog">훈련하러 가기 GO!GO!</button>
        <button type="button" className="share">공유하기</button>
      </section>
    </main>
  );
}

export default Main;