let obj1  = {nome:"Jhon",       profissão:"Programador",                        salario:30000};
let obj2  = {nome:"Pedro",      profissão:"Engenheiro Aeronáutico",             salario:20000};
let obj3  = {nome:"Ester",      profissão:"Social Mídia",                       salario:40000};
let obj4  = {nome:"Vivian",     profissão:"Programador",                        salario:35000};
let obj5  = {nome:"Iderlan",    profissão:"Juiz",                               salario:55000};
let obj6  = {nome:"Jeallyson",  profissão:"Policial",                           salario:7500};
let obj7  = {nome:"Jefferson",  profissão:"Programador",                        salario:500000};
let obj8  = {nome:"Francielle", profissão:"Programador",                        salario:15000};
let obj9  = {nome:"Alef",       profissão:"Bungbounty",                         salario:700000};
let obj10 = {nome:"Aparecida",  profissão:"Especialista em reprodução humana",  salario:90000};
let obj11 = {nome:"Aleksander", profissão:"Professor",                          salario:15000};


let funcionarios = []
funcionarios = []
funcionarios.push(obj1)
funcionarios.push(obj2)
funcionarios.push(obj3)
funcionarios.push(obj4)
funcionarios.push(obj5)
funcionarios.push(obj5)
funcionarios.push(obj6)
funcionarios.push(obj7)
funcionarios.push(obj8)
funcionarios.push(obj9)
funcionarios.push(obj10)
funcionarios.push(obj11)


for (let i = 0; i < funcionarios.length; i++) {
    console.log( ` Funcionários: ${funcionarios[i].nome} -> Salário: ${funcionarios[i].salario } `)
}