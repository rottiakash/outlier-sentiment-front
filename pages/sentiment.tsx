import { Button, Form, Input } from "antd";
import React, { useState } from "react";

import * as s from "sentiment";
const Sentiment = s.default;
var sentiment = new Sentiment();

function analyse(sentence: string) {
  const result = sentiment.analyze(sentence);
  console.log(result);
  return result;
}

export default function SentimentComponent() {
  const [result, setResult] = useState<any>();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <Form
        onFinish={(values) => {
          setResult(analyse(values.sentence));
        }}
      >
        <Form.Item
          label="Sentence"
          name="sentence"
          rules={[{ required: true, message: "Please input the sentence!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {result && (
        <div style={{ fontSize: "1rem" }}>
          Score: {result.score} <br />
          Positive Words: {result.positive.map((v) => `${v},`)} <br />
          Neagtive Words: {result.negative.map((v) => `${v},`)} <br />
          Sentiment:{" "}
          {result.score >= 0
            ? result.score == 0
              ? "Neutral"
              : "Positive"
            : "Negative"}
        </div>
      )}
    </div>
  );
}
