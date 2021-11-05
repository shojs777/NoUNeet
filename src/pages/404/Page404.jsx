import { useEffect, useState, prevState } from 'react';
import { useHistory } from 'react-router-dom';

export const Page404 = () => {
  const [count, setCount] = useState(3);
  const history = useHistory();

  const down = () => {
    setCount(count - 1);
  };

  const countDown = () => {
    setTimeout(down, 1000);
  };

  const autoBack = () => {
    window.setTimeout(dispMsg, 3000);
    countDown();
    function dispMsg() {
      history.goBack();
    }
  };
  useEffect(() => autoBack());
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>お探しのページは見つかりませんでした。</h1>
      <h2>{count}秒後に自動的に前のページに戻ります</h2>
    </div>
  );
};
