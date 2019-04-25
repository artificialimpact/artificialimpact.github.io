import React from "react";
import { Card, Row, Tag } from "antd";
import { PRIMARY, SECONDARY } from "../constants/colors";

export const AnnouncementsList = props => {
  return (
    <div style={{ minWidth: "100%" }}>
      {props.data.map((item, i) => {
        return (
          <Row gutter={32} key={i} style={{ margin: "5%" }}>
            <Card hoverable>
              <p style={{ fontSize: "1.5em" }}>{item.detailText}</p>
              <Tag
                color={item.type === "need" ? PRIMARY : SECONDARY}
                style={{ alignSelf: "flex-end" }}
              >
                {item.type === "need" ? "Needing Help" : "Offering Help"}
              </Tag>
            </Card>
          </Row>
        );
      })}
    </div>
  );
};
