export default getListStudents(students)
{
       return students.reduce((sum, student) => sum + student.id, 0);
}