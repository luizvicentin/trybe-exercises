const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  
  const listSkillsWithFor = (student) => {
    const skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  const listSkillsWithValues = (student) => Object.values(student);
  
  // Sem Object.values
  console.log(listSkillsWithFor(student));
  
  // Com Object.values
  console.log(listSkillsWithValues(student));

  // Observe como a função listSkillsWithValues é bem mais simples e resolve o problema da listagem de valores de forma mais direta.