import "./App.less";
import { Button, DatePicker, Input, Progress, Slider, Space, Spin } from "antd";

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Space direction="vertical">
          <Button className="button" style={{ color: "yellow" }} type="primary">
            Button
          </Button>
          <Input placeholder="Type here..."></Input>
          <Progress percent={50} type="circle"></Progress>
          <Spin spinning></Spin>
          <DatePicker></DatePicker>
          <Slider></Slider>
        </Space>
      </header>
    </div>
  );
}
