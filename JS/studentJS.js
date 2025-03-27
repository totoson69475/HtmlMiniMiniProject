let myLecture = []      // 수강 신청한 강의를 담아둘 배열 선언
function apply(event) {       // 수강 신청 버튼 함수
  let row = event.target.closest("tr");                                    // 클릭된 버튼의 부모 요소인 <tr> 찾기
  let lectureName = row.querySelector("#lectureName").textContent.trim();  // 해당 행에서 id가 "lectureName"인 요소 찾기
  if (myLecture.includes(lectureName)) {      // 가져온 강의 이름이 이미 수강신청한 강의일 때(배열에 저장되어 있을 때)
    alert("이미 수강 신청한 강의입니다.")
  } else {                                   // 가져온 강의가 첫 수강신청일 때
    myLecture.push(lectureName);            // 배열에 강의 이름 저장
    alert("'" + lectureName + "' 수강 신청 완료했습니다!")
  }
}
/* 출석 상세보기 */
function attendanceDetail1st() {
  var x = document.getElementById("1stDetail");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
/* 출석 상세보기 */
function attendanceDetail2nd() {
  var x = document.getElementById("2ndDetail");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
/* 출석 이의신청 */
let myAttendance = [];     // 이의신청 완료한 출석 담아두는 배열
function attendanceDissent(event) {
  let row = event.target.closest("tr");                                    // 클릭된 버튼의 부모 요소인 <tr> 찾기
  let dissentAttendance = row.querySelector("#attendanceLecture").textContent.trim();  // 해당 행에서 id가 "attendance"인 요소 찾기
  if (myAttendance.includes(dissentAttendance)) {      // 가져온 출석 행이 이미 이의신청한 출석일 때(배열에 저장되어 있을 때)
    alert("이미 이의 신청했습니다.")
  } else {                                   // 가져온 출석 행이 첫 이의신청일 때
    myAttendance.push(dissentAttendance);            // 배열에 출석 행 저장
    alert("'" + dissentAttendance + "' 출석 이의 신청 완료했습니다!")
  }
}
/* 성적 상세보기(1학기) */
function semester1st_datal() {
  var x = document.getElementById("1stDetail");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
/* 성적 상세보기(2학기) */
function semester2nd_datal() {
  var x = document.getElementById("2ndDetail");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
/* 성적 이의신청 */
let myDissent = [];     // 이의신청 완료한 강의 담아두는 배열
function dissent(event) {
  let row = event.target.closest("tr");                                    // 클릭된 버튼의 부모 요소인 <tr> 찾기
  let dissentLecture = row.querySelector("#lectureName").textContent.trim();  // 해당 행에서 id가 "lectureName"인 요소 찾기
  if (myDissent.includes(dissentLecture)) {      // 가져온 강의 이름이 이미 이의신청한 강의일 때(배열에 저장되어 있을 때)
    alert("이미 이의 신청한 강의입니다.")
  } else {                                   // 가져온 강의가 첫 이의신청일 때
    myDissent.push(dissentLecture);            // 배열에 강의 이름 저장
    alert("'" + dissentLecture + "' 이의 신청 완료했습니다!")
  }
}
/* 학생 개인정보 조회/수정 이미지 설정 */
function loadImage(event) { // 학생 프로필 이미지 설정
  var image = document.getElementById('profileImage');
  var button = document.getElementById('imageBtn');

  var file = event.target.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      image.src = e.target.result;
      image.style.display = 'block';  // 이미지를 보이게 설정
      button.style.display = 'none';  // 버튼은 숨김
    };
    reader.readAsDataURL(file);
  }
}
/* 학생 프로필 수정 및 저장 */
function saveData() {
  var hakbun = document.getElementById("hakbun").value;
  var major = document.getElementById("major").value;
  var name = document.getElementById("name").value;
  var course = document.getElementById("course").value;
  var etc = document.getElementById("etc").value;
  var birthDate = document.getElementById("birthDate").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var address = document.getElementById("address").value;
  var email = document.getElementById("email").value;
  var advisor = document.getElementById("advisor").value;

  // 로컬 스토리지에 데이터 저장
  /*
  localStorage.setItem("hakbun", hakbun);
  localStorage.setItem("major", major);
  localStorage.setItem("name", name);
  localStorage.setItem("course", course);
  localStorage.setItem("etc", etc);
  localStorage.setItem("birthDate", birthDate);
  localStorage.setItem("phoneNumber", phoneNumber);
  localStorage.setItem("address", address);
  localStorage.setItem("email", email);
  localStorage.setItem("advisor", advisor);
  */

  if (hakbun && major && name && course && birthDate && phoneNumber && address && email && advisor) {
    alert("정보가 저장되었습니다!");
  } else {
    alert("필수 입력칸이 비어있습니다.");
  }
}

/*
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".inputSearch");
  const searchForm = document.querySelector("form");

  // 저장된 검색어 유지
  if (localStorage.getItem("searchTerm")) {
      searchInput.value = localStorage.getItem("searchTerm");
  }

  searchForm.addEventListener("submit", function (event) {
      event.preventDefault(); // 기본 동작(새로고침) 방지

      const searchTerm = searchInput.value.trim();
      localStorage.setItem("searchTerm", searchTerm); // 검색어 저장

      filterTable(searchTerm);
  });

  function filterTable(searchTerm) {
      const rows = document.querySelectorAll("tbody tr");

      rows.forEach(row => {
          const subjectName = row.cells[6].textContent; // 교과목명 컬럼
          if (subjectName.includes(searchTerm) || searchTerm === "") {
              row.style.display = ""; // 일치하면 표시
          } else {
              row.style.display = "none"; // 불일치하면 숨김
          }
      });
  }

  // 페이지 로드 시 검색 필터 적용
  filterTable(searchInput.value);
});
*/