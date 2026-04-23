function generate() {
  document.getElementById("pTitle").innerText = document.getElementById("title").value;

  document.getElementById("pCourseName").innerText = document.getElementById("courseName").value;
  document.getElementById("pCourseCode").innerText = document.getElementById("courseCode").value;

  document.getElementById("pStudentName").innerText = document.getElementById("studentName").value;
  document.getElementById("pStudentId").innerText = document.getElementById("studentId").value;
  document.getElementById("pYear").innerText = document.getElementById("year").value;
  document.getElementById("pTerm").innerText = document.getElementById("term").value;

  document.getElementById("pTeacherName").innerText = document.getElementById("teacherName").value;
  document.getElementById("pDesignation").innerText = document.getElementById("designation").value;

  let dept = document.getElementById("department").value;

  document.getElementById("pDept1").innerText = dept;
  document.getElementById("pDept2").innerText = dept;
}

function downloadPDF() {
  const element = document.getElementById("preview");

  html2pdf()
    .from(element)
    .save("cover-page.pdf");
}
