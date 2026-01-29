import { createContext, useContext, useState } from 'react'

// 1️⃣ 建立 Context
const AuthContext = createContext(null)

// 2️⃣ 建立 Provider
export const AuthProvider = ({ children }) => {
  // 是否登入
  const [isAuth, setIsAuth] = useState(false) // false 預設未登入
  // 使用者資訊
  const [user, setUser] = useState(null) // 登入後才有 user 資料

  // 登入函式（模擬）
  const login = (userData) => {
    setIsAuth(true)
    setUser(userData)
  }

  // 登出函式
  const logout = () => {
    setIsAuth(false)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ isAuth, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// 3️⃣ 自訂 Hook，方便使用
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext)
