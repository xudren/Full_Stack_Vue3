import { defineStore } from 'pinia';
import { Names } from './store-name';
import { User } from '../type/store'

let user: User = {
  username: 'xudren',
  password: "rxd0417"
}
let login = <T>(): Promise<T> => { //类似java的泛型
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve({
        username: "大飞机",
        password: 888
      })
    }, 2000)
  })
}

export const loginStore = defineStore(Names.TEST, {
  state: () => {
    return {
      current: 1,
      username: "小任",
      user: {} as User
    }
  },
  //有缓存 相当于computed
  getters: {
    newName(): string {
      return `$-${this.username}`
    }
  },
  actions: {
    setCurrent() {
      this.current++
    },
    async setUser(): Promise<void> {
      const result = await login<User>()//
      this.user = result
    }
  }
})