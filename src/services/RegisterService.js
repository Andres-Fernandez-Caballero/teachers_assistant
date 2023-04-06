import axios from 'axios'
class RegisterService {
  base_URL = 'http://localhost:3001/api/registers'

  constructor() {
    this.instance = axios.create({ baseURL: this.base_URL })
  }

  //this is almost like a credit interface
  //or a CRUD client
  async getAllRegisters() {
    const { data } = await this.instance.get('/')
    return data
  }

  async getOneRegister(id) {
    const { data } = await this.instance.get(`/${id}`)

    return data
  }
  /* lo que tiene q tener register { 
    attendance:boolean, 
    homework:bollean, 
    participation:string, 
    student:Student, 
    group:Group 
  }
  */
  async createRegister(register) {
      const { data } = await this.instance.post('/', register)
      return data
  }
  async deleteRegister(id) {
    const response = await this.instance.delete(`/${id}`)
    console.log('Deleted Register:', response.data)
  }
  

  async updateRegister(id, register) {
    const { data } = await this.instance.put(`/${id}`, {
      body: register
    })
    return data
  }
}

export default RegisterService
