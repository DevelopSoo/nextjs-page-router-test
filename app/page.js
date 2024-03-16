import { Button, Radio } from "antd";

export default function Home() {
  return (
    <div className="App">
      <div>하이 헬로 안녕</div>
      {/* className으로 안됨 */}
      <Button type="primary">버튼</Button>
      <Radio>라디오</Radio>;
    </div>
  );
}
