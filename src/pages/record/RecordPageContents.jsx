import React from "react";
import {
  StyledWrapper,
  StyledContents,
  StryledUl,
  StyledLi,
} from "./styled/recordpage.style";

function RecordPageContents() {
  const record_obj = {
    records: [
      {
        users: [
          "김영준",
          "주현호",
          "홍정현",
          "남원석",
          "김두현",
          "윤재혁",
          "이지원",
          "전민재",
          "홍인표",
          "마성민",
        ],

        date: "2023.03.28",

        game: "origin",
      },

      {
        users: [
          "김영준",
          "이의현",
          "마리오",
          "신강희",
          "조지워싱턴",
          "조지포먼",
          "이재용",
          "구본길",
          "하시모토 칸나",
          "내일의 조",
        ],

        date: "2023.03.29",

        game: "howl",
      },

      {
        users: [
          "김영준",
          "이의현",
          "마리오",
          "신강희",
          "조지워싱턴",
          "조지포먼",
          "이재용",
          "구본길",
          "하시모토 칸나",
          "내일의 조",
        ],

        date: "2023.03.29",

        game: "howl",
      },
    ],
  };

  const Users_box = (props) => {
    const arrOfUsers = props.record;

    return (
      <div>
        <StryledUl>
          {arrOfUsers.map((user) => {
            return <li>{user}</li>;
          })}
        </StryledUl>
      </div>
    );
  };

  return (
    <StyledContents>
      <StryledUl>
        {record_obj.records.map((record) => {
          return (
            <StyledWrapper>
              <StyledLi>
                <div>{record.date}</div>
                <div>{record.game === "origin" ? "협곡" : "칼바람"}</div>
                <div>
                  <Users_box record={record.users} />
                </div>
              </StyledLi>
            </StyledWrapper>
          );
        })}
      </StryledUl>
    </StyledContents>
  );
}

export default RecordPageContents;
