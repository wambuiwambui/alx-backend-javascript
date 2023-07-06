function updateStudentGradeByCity(students, city, newGrades) {
  return students.map((student) => {
    if (student.location === city) {
      const matchedGrade = newGrades.find((grade) => grade.studentId === student.id);
      if (matchedGrade) {
        return { ...student, grade: matchedGrade.grade };
      } else {
        return { ...student, grade: 'N/A' };
      }
    } else {
      return student;
    }
  });
}

export default updateStudentGradeByCity;
