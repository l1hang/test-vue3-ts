//定义接口返回数据类型
export interface ResponseData <T = any> {
    code: number;
    message: string;
    data: T;
}
//定义token
const token = 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySGlzSWQiOiJhYjQ5NTczNDg2ZTM0NGE5OGRlZmViNmI3NWYyMWY1OCIsImRlcHROYW1lIjoi5L2P6Zmi56eR5a6kXzEiLCJvcmdOYW1lIjoi56CU5Y-R5Y-45py65Lit5b-D5Y2r55Sf6ZmiIiwibmlja05hbWUiOiLoi5_ljY7lvLoiLCJvcmdDb2RlIjoiNjIwMDAwMDAxODI4IiwidXNlcl9rZXkiOiI5NDczNDY3NC0zMjc3LTQyYmMtYmU4Mi05MTg3MTdkZjM1MjAiLCJvcmdIaXNJZCI6IjVDRkQwMzUwNzg0RjY3RjFFMDUzQjcwMUE4QzBCOUY0IiwiZGVwdENvZGUiOiJaWUtTMDEiLCJ1c2VybmFtZSI6ImdvdWh1YXFpYW5nMiJ9.eySDJ5W_Y03GPQlA5UBXCuHi8hHbYU4nir9ijnck_ppANhhjtXfaiygWx6HLB4OOn2BV5vzkE9IVYFxn6BS0JQ'
//获取验证码
//登录后获取token
export async function getToken(yhzh: string, password: string,code:string,uuid:string): Promise<ResponseData> {
    const response = await fetch(`/api/auth/login`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            yhzh,
            password,
            code,
            uuid
        })
    })
    const responseData = await response.json()
    return responseData
}
//根据字典类型查询（人员属性、档案状态）
export async function getResidentHealth(zdbm: string): Promise<ResponseData> {
const response = await fetch(`/api/system/syszdgl/getByBM?zdbm=${zdbm}`,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
    },
})
const responseData = await response.json()
return responseData
}
//查询列表
export async function getSearch(current: number, size: number,key?:string,personAttributes?:string,recordState?:string): Promise<ResponseData> {
    let url = `api/center/records/page?current=${current}&size=${size}`
    if(key){
        url += `&key=${key}`
    }
    if(personAttributes){
        url += `&personAttributes=${personAttributes}`
    }
    if(recordState){
        url += `&recordState=${recordState}`
    }
    const response = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        
    })
    const responseData = await response.json()
    return responseData
}
//获取人员档案信息
export async function getRecord(hrGid: string): Promise<ResponseData> {
    const response = await fetch(`/api/center/records/${hrGid}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
    const responseData = await response.json()
    return responseData
}