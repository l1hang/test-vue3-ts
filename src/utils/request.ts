const BASE_URL = () => import.meta.env.VITE_BASE_URL as string;  

export async function request(url: string, options: RequestInit = {}): Promise<any> {
  // 添加请求拦截逻辑，例如判断是否有 token
  const token = localStorage.getItem('token');
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  // 设置超时时间
  const timeout = 30000; 
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  options.signal = controller.signal;

  const response = await fetch(`${BASE_URL}${url}`, options);

  // 添加响应拦截逻辑，例如处理错误状态码
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  clearTimeout(timer);

  return response.json();
}