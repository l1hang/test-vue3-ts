//定义接口返回数据类型
export interface ResponseData <T = any> {
    code: number;
    message: string;
    data: T;
}
//定义token
const token = 'eyJhbGciOiJIUzUxMiJ9.eyJ5aGlkIjoxLCJqZ21jIjoi5YWw5bee5biC5Y2r55Sf5YGl5bq35aeU5ZGY5LyaIiwicXhxaGRtIjoiNjIwMTAyIiwieWh6aCI6ImFkbWluIiwiamdkbSI6Ijc0NTg3MjY5OCIsInVzZXJfa2V5IjoiNzlmNjI1NzUtOGFjMy00MDlhLWI0OWItZmViYjkyNDMyMmJmIiwiamdpZCI6MiwieWh4bSI6Iui2hee6p-euoeeQhuWRmCIsInN6cWhkbSI6IjYyMDEwMCJ9.AtWC5eOVjS6jA403t4Qd1ucf02odUWDJQyMdOvGAgom2hEOOtFA3a0_laNzntBZVmUMTUf2doXS8t6cvVtGHDQ'
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