import { useState } from 'react'

const useLocalStorage = <T>(key: string, initValue: T): [T, (value: T) => void] => {
  const [storage, setStorage] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initValue
    } catch {
      return initValue
    }
  })

  const setValue = (value: T): void => {
    try {
      setStorage(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (ex) {
      console.error(ex)
    }
  }

  return [storage, setValue]
}

export {
  useLocalStorage
}
