// 병원 정보 객체 정의
const hospitalsByDistrict = {
    "기장군": [
      {
        id: 1,
        name: "동남권원자력의학원",
        director: "이진경",
        address: "부산광역시 기장군 장안읍 좌동길 40",
        phone: "051-720-5114"
      }
    ],
    "남구": [
      {
        id: 2,
        name: "부산성모병원(재단법인 천주교부산교구유지재단)",
        director: "손삼석",
        address: "부산광역시 남구 용호로232번길 25-14 (용호동)",
        phone: "051-933-7114"
      }
    ],
    "동구": [
      {
        id: 3,
        name: "좋은문화병원",
        director: "문화숙",
        address: "부산광역시 동구 범일로 119 (범일동)",
        phone: "051-644-2002"
      },
      {
        id: 4,
        name: "재단법인한호기독교선교회 일신기독병원",
        director: "인명진",
        address: "부산광역시 동구 정공단로 27 (좌천동)",
        phone: "051-630-0300"
      },
      {
        id: 5,
        name: "의료법인정화의료재단 봉생기념병원",
        director: "김남희",
        address: "부산광역시 동구 중앙대로 401 (좌천동, 봉생병원)",
        phone: "051-664-4000"
      }
    ],
    "동래구": [
      {
        id: 6,
        name: "동래봉생병원",
        director: "정의화",
        address: "부산광역시 동래구 안연로109번길 27 (안락동)",
        phone: "051-531-6000"
      },
      {
        id: 7,
        name: "대동병원",
        director: "박성환",
        address: "부산광역시 동래구 충렬대로 187 (명륜동)",
        phone: "051-554-1233"
      },
      {
        id: 8,
        name: "의료법인 광혜의료재단 광혜병원",
        director: "이광웅",
        address: "부산광역시 동래구 충렬대로 96 (온천동, 광혜병원)",
        phone: "051-503-2111"
      }
    ],
    "부산진구": [
      {
        id: 9,
        name: "의료법인 온그룹의료재단 온종합병원",
        director: "김승희",
        address: "부산광역시 부산진구 가야대로 721, 719, 767 (당감동)",
        phone: "051-607-0133"
      },
      {
        id: 10,
        name: "인제대학교부산백병원",
        director: "이순형",
        address: "부산광역시 부산진구 복지로 75, 진사로83번길 81, 1층(일부), 3층 (개금동)",
        phone: "051-890-6114"
      },
      {
        id: 11,
        name: "학교법인)동의병원",
        director: "정량부",
        address: "부산광역시 부산진구 양정로 62, 지상2ㆍ3ㆍ10층 각 일부/ 지하1ㆍ지상1ㆍ지상4~지상8층 전층 (양정동)",
        phone: "051-867-5101"
      },
      {
        id: 12,
        name: "학교법인 춘해병원",
        director: "김조영",
        address: "부산광역시 부산진구 중앙대로 605 지상1층~지상9층 (범천동)",
        phone: "051-638-8000"
      }
    ],
    "북구": [
      {
        id: 13,
        name: "구포성심병원",
        director: "박시환",
        address: "부산광역시 북구 낙동대로 1786 (구포동)",
        phone: "051-330-2001"
      },
      {
        id: 14,
        name: "의료법인 인당의료재단 부민병원",
        director: "정흥태",
        address: "부산광역시 북구 만덕대로 59 (덕천동)",
        phone: "051-330-3000"
      }
    ],
    "사상구": [
      {
        id: 15,
        name: "의료법인은성의료재단좋은삼선병원",
        director: "구정회",
        address: "부산광역시 사상구 가야대로 326 (주례동)",
        phone: "051-322-0900"
      },
      {
        id: 16,
        name: "한국보훈복지의료공단 부산보훈병원",
        director: "감신",
        address: "부산광역시 사상구 백양대로 420 (주례동)",
        phone: "051-601-6000"
      }
    ],
    "서구": [
      {
        id: 17,
        name: "고신대학교복음병원",
        director: "유연수",
        address: "부산광역시 서구 감천로 262 (암남동)",
        phone: "051-990-6114"
      },
      {
        id: 18,
        name: "부산대학교병원",
        director: "정성운",
        address: "부산광역시 서구 구덕로 179 (아미동1가)",
        phone: "051-240-7000"
      },
      {
        id: 19,
        name: "동아대학교병원",
        director: "정휘위",
        address: "부산광역시 서구 대신공원로 26 (동대신동3가)",
        phone: "051-240-2400"
      },
      {
        id: 20,
        name: "삼육부산병원",
        director: "강순기",
        address: "부산광역시 서구 대티로 170 (서대신동2가)",
        phone: "051-242-9751"
      }
    ],
    "수영구": [
      {
        id: 21,
        name: "의료법인 은성의료재단 좋은강안병원",
        director: "구정회",
        address: "부산광역시 수영구 수영로 493 (남천동)",
        phone: "051-625-0900"
      },
      {
        id: 22,
        name: "비에이치에스한서병원",
        director: "윤철수",
        address: "부산광역시 수영구 수영로 615 (광안동)",
        phone: "051-756-0081"
      }
    ],
    "연제구": [
      {
        id: 23,
        name: "부산광역시의료원",
        director: "김휘택",
        address: "부산광역시 연제구 월드컵대로 359 (거제동, 1동, 5동일부)",
        phone: "051-507-3000"
      }
    ],
    "영도구": [
      {
        id: 24,
        name: "의료법인 행도의료재단 해동병원",
        director: "조평래",
        address: "부산광역시 영도구 태종로 133 (봉래동3가)",
        phone: "051-412-6161"
      },
      {
        id: 25,
        name: "영도병원",
        director: "정준환",
        address: "부산광역시 영도구 태종로 85 (대교동2가)",
        phone: "051-414-8101"
      }
    ],
    "중구": [
      {
        id: 26,
        name: "재단법인천주교부산교구유지재단 메리놀병원",
        director: "손삼석",
        address: "부산광역시 중구 중구로 121 (대청동4가)",
        phone: "051-465-8801"
      }
    ],
    "해운대구": [
      {
        id: 27,
        name: "의료법인 인당의료재단 해운대부민병원",
        director: "정흥태",
        address: "부산광역시 해운대구 해운대로 584 (우동)",
        phone: "051-602-8000"
      },
      {
        id: 28,
        name: "인제대학교 해운대백병원",
        director: "이순형",
        address: "부산광역시 해운대구 해운대로 875 (좌동)",
        phone: "051-797-0100"
      }
    ]
};

document.addEventListener('DOMContentLoaded', (event) => {
  const districts = {
    guNames: [
      "기장군", "남구", "동구", "동래구", "부산진구", "북구", "사상구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구"
    ]
  };

  function populateDistricts() {
    const guSelect = document.getElementById('guNames');

    districts.guNames.forEach(gu => {
      const option = document.createElement('option');
      option.value = gu;
      option.textContent = gu;
      guSelect.appendChild(option);
    });
  }

  function redirectToSelectPage(selectedGu) {
    window.location.href = `select.html?gu=${encodeURIComponent(selectedGu)}`;
  }
  populateDistricts();

  const guSelect = document.getElementById('guNames');
  const areaBtn = document.getElementById('areaBtn');
  
  areaBtn.addEventListener('click', () => {
    const selectedGu = guSelect.value;
    if (selectedGu) {
      redirectToSelectPage(selectedGu);
    }
  });
});
