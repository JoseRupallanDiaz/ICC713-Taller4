export function getStudent(request, response) {
    const student = {
        student: "Jose Miguel Rupallan Diaz",
        title: "Taller 4 MongoDB y Express.js - Especializacion Tecnologica 1"
    }
    return response.status(200).send(student)
}