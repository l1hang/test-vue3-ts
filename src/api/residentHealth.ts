//定义接口返回数据类型
export interface ResponseData <T = any> {
    code: number;
    msg: string;
    data: T;
}
const token = localStorage.getItem("token");
//获取验证码
export async function getCode() {
    const response = await fetch(`/api/code`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const responseData = await response.json()
    return responseData
}
//登录
export async function getLogin(yhzh: string, password: string,code:string,uuid:string): Promise<ResponseData> {
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