const students = [
    { name: 'Ajinkya', score: 80 },
    { name: 'Alia', score: 65 },
    { name: 'Swarajya', score: 90 },
    { name: 'Abhi', score: 55 }
  ];
  
  const passingStudents = students.filter(student => {
    const passed = student.score >= 70;
    console.log(`${student.name} ${passed ? 'passed' : 'failed'} the exam`);
    return passed;
  });
  
  console.log(passingStudents);
  